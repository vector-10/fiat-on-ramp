import Image from "next/image";
import frsyk from "../public/frysk-1-removebg-preview.png";
import coins from "../public/coins 1.png";
import frax from "../public/frxETH_coin.svg"
import frax2 from "../public/FRAX_coin.svg"
import Link from "next/link"

export default function Home() {
  return (
    <main className="landing-page min-h-screen mukta">
      <header className="fixed w-full h-[4rem] flex justify-between items-center px-[4rem]">
        <div className="navigate flex space-x-16">
         <Link href="/"><div className="logo flex justify-center items-center cursor-pointer mukta"><Image className="frysk-logo w-20 h-14" src={frsyk} alt="frysk logo"/> <p className="font-bold text-xl">FRYSK</p></div></Link>                   
        </div>
        {/* division between both */}
        <div className="navigation-buttons text-white flex space-x-16">
          <ul className="flex justify-center items-center space-x-6 text-sm cursor-pointer">
            <Link href="/about"><li>About</li></Link>
            <Link href="/currencies"><li>Currencies</li></Link>
            <Link href="/support"><li>Support</li></Link>           
          </ul>
          <div className="buttons flex space-x-4">
            <button className="bg-[#4608ad] px-5 py-2 cursor-pointer text-sm">Login</button>
            <button className="bg-[#4608ad] px-5 py-2 cursor-pointer text-sm">Signup</button>
          </div>
        </div>
      </header>
      <section className="flex h-screen px-[12rem] text-white pt-[14rem] overflow-y-auto raleway rounded-sm space-x-40">
        <div className="">
          <h1 className="text-5xl mb-[2rem] font-bold">Buy and Sell Crypto <br /> in local FIAT Currency-<br /> <span className="text-[#4608ad]">Seamlessly</span></h1>
          <p className="text-sm">Providing millions of users globally with a seamless link between your Fiat currency  <br /> and Fraxtal tokens, exploring a host of profitable opportunities on  <br /> the blooming layer 2, through a simpler, cost-effective process..</p>
          <div className="text-white flex space-x-4 pt-[2rem] font-bold text-xs">
            <button className="bg-[#4608ad] px-6 py-3 cursor-pointer">Buy and Sell Crypto</button>
            <button className="bg-white px-6 py-3 text-[#4608ad] cursor-pointer">FIAT Deposits</button>
          </div>
        </div>
        <div className="image">
          <Image alt="crypto coins" className="crypto-image w-80 h-40" src={coins}/>
        </div>
      </section>     
      {/* middle section */}
      <div className="flex flex-col bg-white items-center h-[42rem] text-black font-bold ">
        <div className="flex flex-col items-center pt-[4rem]">
            <p className="text-blue-600 text-xl">MAKING CRYPTO ONBOARDING SEAMLESS</p>
            <h1 className="text-5xl font-bold text-black">Fully Integrated For Ramp Services</h1>
        </div>

       <div className="flex space-x-8 justify-center items-center pt-[4rem]">
          <div className="on-ramp flex items-center flex-col bg-gray bg-white shadow-lg p-[4rem] rounded-xl"> 
            <Image className="w-40" alt="" src={frax}/>
            <h1 className="text-3xl">Fiat to crypto on-ramp</h1>
            <p className="text-sm">Onboard users and without the hasssle and issues, <br /> purchase crypto with fiat readily for transactions</p>
          </div>
          <div className="off-ramp flex items-center flex-col bg-white shadow-lg p-[4rem] rounded-xl">
          <Image className="w-40" alt="" src={frax2}/>
            <h1 className="text-3xl">Crypto to Fiat off-ramp</h1>
            <p className="text-sm">Quickly go back to local/foreign fiat currencies <br />in a simple way in a clean transaction</p>
          </div>       
      </div>  
      </div>
      <div className="features flex">
        <div>
          <h1></h1>
        </div>
        {/* division */}
        <div>

        </div>

      </div>
      {/* footer section */}
      <footer>
      </footer>  
    </main>
  );
}
