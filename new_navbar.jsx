import React from 'react'

function Navbar() {
    return (
       <>
       <div className='flex item-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
        <div>
            <button className='text-slate-50 cursor-pointer pr-4'>Sign In</button>
            <button className='bg-red-500 rounded px-6 py-3 cursor-pointer text-white'>Sign Up</button>

        </div>
       </div>
       </> 
    )
}

export default Navbar;
