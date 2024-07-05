"use client"
import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { ethers } from "ethers";
import FraxtalRamp from "../constants/abi.json";  // Adjust the path to your ABI file

// Types for state
interface FormData {
    fiatAmount: string;
    cryptoType: string;
    walletAddress: string;
    paymentMethod: string;
}

const OnRamp: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fiatAmount: '',
        cryptoType: 'Bitcoin',
        walletAddress: '',
        paymentMethod: 'Credit Card',
    });

    // Event handler for input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Function to get ethers provider
    const getProvider = (): ethers.providers.Web3Provider => {
        const { ethereum } = window as any;
        if (!ethereum) {
            throw new Error("No crypto wallet found. Please install it.");
        }
        return new ethers.providers.Web3Provider(ethereum);
    };

    // Function to get contract instance
    const getContract = (): ethers.Contract => {
        const provider = getProvider();
        const signer = provider.getSigner();
        const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || ""; // Ensure this is set in your environment variables
        return new ethers.Contract(contractAddress, FraxtalRamp, signer);
    };

    // Connect wallet function
    const connectWallet = async () => {
        const { ethereum } = window as any;
        if (!ethereum) {
            alert("Please install MetaMask.");
            return;
        }

        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Connected", accounts[0]);
        } catch (error) {
            console.error("Error connecting to MetaMask", error);
        }
    };

    // Function to handle form submission
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { fiatAmount, cryptoType, walletAddress } = formData;

        try {
            const contract = getContract();
            const usdAmount = ethers.utils.parseUnits(fiatAmount, 18); // Convert fiat amount to Wei
            const tx = await contract.purchaseTokens(cryptoType, usdAmount, walletAddress);

            await tx.wait();
            console.log('Transaction successful:', tx);
        } catch (error) {
            console.error('Transaction failed:', error);
        }
    };

    // Connect wallet on component mount
    useEffect(() => {
        connectWallet();
    }, []);

    return (
        <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-xs mukta">
            <h1 className="text-2xl font-bold mb-4 text-center">Fiat On-Ramp</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Payment Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">You Pay</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Amount (Fiat)</label>
                            <input
                                type="number"
                                name="fiatAmount"
                                value={formData.fiatAmount}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300"
                                placeholder="Enter amount"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Payment Method</label>
                            <select
                                name="paymentMethod"
                                value={formData.paymentMethod}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300"
                            >
                                <option value="Credit Card">Credit Card</option>
                                <option value="Bank Transfer">Bank Transfer</option>
                                <option value="PayPal">PayPal</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Receiving Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">You Get</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Cryptocurrency</label>
                            <select
                                name="cryptoType"
                                value={formData.cryptoType}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300"
                            >
                                <option value="Bitcoin">FXS</option>
                                <option value="Ethereum">FRXETH</option>
                                <option value="USDT">FPI</option>
                                <option value="BNB">wFRXETH</option>
                                <option value="Ripple">SFRXETH</option>
                                <option value="Polygon">SFRAX</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700">Wallet Address</label>
                            <input
                                type="text"
                                name="walletAddress"
                                value={formData.walletAddress}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300"
                                placeholder="Enter wallet address"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Summary and Submit */}
                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Summary</h3>
                        <p className="text-gray-700">Amount: {formData.fiatAmount} (Fiat)</p>
                        <p className="text-gray-700">Payment Method: {formData.paymentMethod}</p>
                        <p className="text-gray-700">Receiving: {formData.cryptoType}</p>
                        <p className="text-gray-700">Wallet Address: {formData.walletAddress}</p>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 hover:bg-blue-600"
                    >
                        Make Payment
                    </button>
                </div>
            </form>
        </div>
    );
};

export default OnRamp;
