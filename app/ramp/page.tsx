"use client"
import React, { useState, FormEvent, ChangeEvent } from 'react';

//   types for state   
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

    // Event handler for form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Form submitted:', formData);
    };

    // Event handler for input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-xs raleway">
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
                                className="w-full p-2 border border-gray-300 "
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
                                className="w-full p-2 border border-gray-300 "
                            >
                                <option value="Bitcoin">Bitcoin</option>
                                <option value="Ethereum">Ethereum</option>
                                <option value="USDT">USDT</option>
                                <option value="BNB">BNB</option>
                                <option value="Ripple">Ripple</option>
                                <option value="Polygon">Polygon</option>
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
