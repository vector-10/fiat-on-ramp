import { ethers } from "ethers";
import FraxtalRamp from "../constants/abi.json";

// Load environment variables
const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "";

// Create a provider
const getProvider = (): ethers.providers.Web3Provider => {
  const { ethereum } = window as any;
  if (!ethereum) {
    throw new Error("No crypto wallet found. Please install it.");
  }
  return new ethers.providers.Web3Provider(ethereum);
};

// Create a signer
const getSigner = (): ethers.Signer => {
  const provider = getProvider();
  return provider.getSigner();
};

// Create a contract instance
const getContract = (): ethers.Contract => {
  const provider = getProvider();
  return new ethers.Contract(contractAddress, FraxtalRamp, provider);
};

export const getContractWithSigner = (): ethers.Contract => {
  const signer = getSigner();
  return getContract().connect(signer);
};

export default getContract;
