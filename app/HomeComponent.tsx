"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import frsyk from "../public/frysk-1-removebg-preview.png";
import coins from "../public/coins 1.png";
import frax from "../public/frxETH_coin.svg";
import frax2 from "../public/FRAX_coin.svg";
import Link from "next/link";
import CryptoPrices from "./components/CryptoPrices";
import { IoIosSpeedometer } from "react-icons/io"; 
import { PiFlowArrowFill } from "react-icons/pi"; 
import { SiBitcoincash } from "react-icons/si";
import { MdVerifiedUser } from "react-icons/md";
import { SiSolana } from "react-icons/si";
import { FaBitcoin } from "react-icons/fa6";
import { FaEthereum } from "react-icons/fa";
import { RiXrpFill } from "react-icons/ri";
import { SiLitecoin } from "react-icons/si";
import { SiCardano } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ethers } from "ethers";
import { getContractWithSigner } from "../app/components/contractUtils";

const HomeComponent: React.FC = () => {

  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    try {
      const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
      console.log("Wallet connected", accounts[0]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="landing-page min-h-screen mukta bg-black">
      <header className=" w-full h-[5rem] flex justify-between items-center px-[4rem]">
        <div className="navigate flex space-x-16">
          <Link href="/"><div className="logo flex justify-center items-center cursor-pointer mukta"><Image className="frysk-logo w-20 h-14" src={frsyk} alt="frysk logo"/> <p className="font-bold text-xl text-white">FRYSK</p></div></Link>                   
        </div>
        {/* division between both */}
        <div className="navigation-buttons text-white flex space-x-16">
          <ul className="flex justify-center items-center space-x-6 text-sm cursor-pointer">
            <Link href="/about"><li>About</li></Link>
            <Link href="/currencies"><li>Currencies</li></Link>
            <Link href="/support"><li>Support</li></Link>           
          </ul>
          <div className="buttons flex space-x-4 text-sm">
          {account ? (
              <button
                type="button"
                className="bg-[#4608ad] px-5 py-2 cursor-pointer"
              >
                {account.slice(0, 6) + '...' + account.slice(-4)}
              </button>
            ) : (
              <button
                type="button"
                className="bg-[#4608ad] px-5 py-2 cursor-pointer"
                onClick={connectWallet}
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </header>
      <section className="flex h-screen px-[12rem] text-white pt-[10rem] overflow-y-auto rounded-sm space-x-40">
        <div className="">
          <h1 className="text-5xl mb-[2rem] font-bold">Buy and Sell Crypto <br /> in local FIAT Currency-<br /> <span className="text-[#4608ad]">Seamlessly</span></h1>
          <p className="text-sm">Providing millions of users globally with a seamless link between your Fiat currency  <br /> and Fraxtal tokens, exploring a host of profitable opportunities on  <br /> the blooming layer 2, through a simpler, cost-effective process..</p>
          <div className="text-white flex space-x-4 pt-[2rem] font-bold text-sm"> 
            <Link href="/ramp" className="bg-[#4608ad] px-6 py-3 cursor-pointer">Buy and Sell Crypto</Link>
            <button className="bg-white px-6 py-3 text-[#4608ad] cursor-pointer">FIAT Deposits</button>
          </div>
        </div>
        <div className="image">
          <Image alt="crypto coins" className="crypto-image w-80 h-40" src={coins}/>
        </div>
      </section>     
      {/* middle section */}
      <div className="flex flex-col bg-white items-center h-[42rem] text-black ">
        <div className="flex flex-col items-center pt-[4rem]">
            <p className="text-blue-700 text-2xl">MAKING CRYPTO ONBOARDING SEAMLESS</p>
            <h1 className="text-5xl text-black">Fully Integrated For Ramp Services</h1>
        </div>

       <div className=" flex flex-col md:flex-row space-x-8 justify-center items-center pt-[4rem]">
          <div className="on-ramp flex items-center flex-col bg-gray bg-white shadow-lg p-[4rem] rounded-xl"> 
            <Image className="w-40" alt="" src={frax}/>
            <h1 className="text-3xl">Fiat to crypto on-ramp</h1>
            <p className="text-sm text-blue-700">Onboard users and without the hasssle and issues, <br /> purchase crypto with fiat readily for transactions</p>
          </div>
          <div className="off-ramp flex items-center flex-col bg-white shadow-lg p-[4rem] rounded-xl">
          <Image className="w-40" alt="" src={frax2}/>
            <h1 className="text-3xl ">Crypto to Fiat off-ramp</h1>
            <p className="text-sm text-blue-700">Quickly go back to local/foreign fiat currencies <br />in a simple way in a clean transaction</p>
          </div>       
      </div>  
      </div>
      {/* division */}
      <div>
        <CryptoPrices />
      </div>
      {/* beginning of features */}
      <div className="h-screen flex items-center justify-between text-white mx-[8rem] raleway">
          <div className="flex flex-col justify-between h-[18rem]">
            <p>FEATURES</p>
            <h1 className="text-5xl">A friendly, full-stack crypto toolkit for businesses</h1>
            <p>Get used to low fees and great exchange rates on international money transfers. <br/> Expand your business worldwide</p>
          </div>
          {/* division */}
          <div className="text-white grid grid-cols-2 gap-4 rounded-lg drop-shadow-2xl raleway2">
            <div className="p-[4rem]">
            <IoIosSpeedometer  className="w-10 h-10"/>
              <h1 className="text-2xl font-bold">Lightning fast transactions</h1>
              <p>Increase conversions with the fastest crypto fiat deliveries on the market.</p>
            </div>
            <div className="p-[4rem]">
              <PiFlowArrowFill className="w-10 h-10"/>
              <h1 className="text-2xl font-bold">Seamless Flow</h1>
              <p>Familiar e-commerce-like experience that converts beyond crypto natives.</p>
            </div>
            <div className="p-[4rem]">
              <MdVerifiedUser className="w-10 h-10"/>
              <h1 className="text-2xl font-bold">Built-in compliance</h1>
              <p className="font-light">We handle KYC, AML, and regulations on all transactions coming through our widget.</p>
            </div>
            <div className="p-[4rem]">
               <SiBitcoincash className="w-10 h-10" />
              <h1 className="text-2xl font-bold">New Revenue Streams</h1>
              <p>Unlock new sources of revenue for your business.</p>
            </div> 
          </div>
       </div>

       <div className="tokens flex justify-center items-center flex-col bg-gray-200 py-[6rem] raleway">
          <p className="text-blue-700">BUYING POPULAR CRYPTOCURRENCIES</p>
          <h1 className="text-5xl py-6">Popular tokens available</h1>
          <p className="py-6">Purchase any of <span className="text-blue-700">110+ of the most popular cryptocurrencies</span> on the top blockchain networks. </p>
          <div className="coins-supported flex justify-evenly space-x-4  mukta cursor-pointer">
            <p className="flex items-center bg-white py-1 px-6 rounded-xl shadow-md"><SiSolana />FXS</p>
            <p className="flex items-center bg-white py-1 px-6 rounded-xl shadow-md"><FaBitcoin />FRXETH</p>
            <p className="flex items-center bg-white py-1 px-6 rounded-xl shadow-md"><FaEthereum />FPI</p>
            <p className="flex items-center bg-white py-1 px-6 rounded-xl shadow-md"><RiXrpFill />wFRXETH</p>
            <p className="flex items-center bg-white py-1 px-6 rounded-xl shadow-md"><SiLitecoin />SFRXETH</p>
            <p className="flex items-center bg-white py-1 px-6 rounded-xl shadow-md"><SiCardano />SFRAX</p>
            <p className="flex items-center bg-white py-1 px-6 rounded-xl shadow-md"><Image src={frax} alt="frax coin" className="w-4 h-4"/>FrxETH</p>
          </div>
       </div>

       <div className="h-screen flex items-center justify-between text-white mx-[8rem] mukta">
          <div className="flex flex-col justify-between h-[18rem]">
            <p>Why Use Frsyk?</p>
            <h1 className="text-4xl">EVADE HIGH GAS FEES INVOLVED BY USING FRAXTAL'S VERY OWN RAMP</h1>
            <p>No need to be a Tech Expert of Crypto native when using Frysk <br/> Just click "buy"  and have tokens like FRAX FRXETH sFRXETH transferred to you instantly.</p>
          </div>
          {/* division */}
          <div className="text-white grid grid-cols-2 gap-4 rounded-lg drop-shadow-2xl raleway2">
            <div className="p-[4rem]">
            <IoIosSpeedometer  className="w-10 h-10"/>
              <h1 className="text-2xl font-bold">Lightning fast transactions</h1>
              <p>Increase conversions with the fastest crypto fiat deliveries on the market.</p>
            </div>
            <div className="p-[4rem]">
              <PiFlowArrowFill className="w-10 h-10"/>
              <h1 className="text-2xl font-bold">Seamless Flow</h1>
              <p>Familiar e-commerce-like experience that converts beyond crypto natives.</p>
            </div>
            <div className="p-[4rem]">
              <MdVerifiedUser className="w-10 h-10"/>
              <h1 className="text-2xl font-bold">Built-in compliance</h1>
              <p className="font-light">We handle KYC, AML, and regulations on all transactions coming through our widget.</p>
            </div>
            <div className="p-[4rem]">
               <SiBitcoincash className="w-10 h-10" />
              <h1 className="text-2xl font-bold">New Revenue Streams</h1>
              <p>Unlock new sources of revenue for your business.</p>
            </div> 
          </div>
       </div>

    <footer className='text-white mt-[4rem] bg-black h-[12rem] wiggly'>
      <div className='border-b flex flex-col md:flex-row justify-around items-center h-[9rem] '>
        <div className='logo-name'>
         <h1 className=' text-4xl wiggly'>FRYSK</h1>
         <p className=' text-xs'>Increasing finance leverage on the Frax ecosystem</p>
        </div>
        <div className='logo-name hidden lg:block'>
         <p className='font-bold wiggly text-xl'>Services</p>
         <ul className='text-sm'><li>Home</li> <li>Vault</li> <li>Bridge</li> </ul>
        </div>
        <div className='logo-name hidden lg:block'>
         <p className='font-bold wiggly text-xl'>Resources</p>
         <ul className='text-sm'><li>Docs</li> <li>Sponsors</li> <li>About Frax</li> </ul>
        </div>
        <div className='logo-name hidden lg:block'>
         <p className='font-bold wiggly text-xl'>Social Media</p>
         <ul className='text-sm'>
          <li><FaDiscord /></li>
          <li><FaTelegram /></li>
          <li><FaXTwitter /></li>
         </ul>
        </div>
      </div>
      <p className='text-center flex flex-col text-xs justify h-1 '>Copyright 2024 - All Rights Reserved</p>      
    </footer>    
    </main>
  );
}

export default HomeComponent;
