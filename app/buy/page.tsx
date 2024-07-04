import React from 'react'   

const page = () => {
  return (
    <div className='ramp-main bg-black h-screen flex flex-col justify-center items-center raleway2 text-white'>
      <h1>My name is Blaise</h1>
      <div className= "ramp-component p-4 flex flex-col bg-white w-[8rem] h-[8rem] text-sm">        <div className='ramp-area'>
        <p className='flex justify-center items-center bg-black py-1 px-2'>On Ramp</p>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            You pay
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
        </div>
        </form>
        </div>

      </div>
    </div>
  )
}

export default page