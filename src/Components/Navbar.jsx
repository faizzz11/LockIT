import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-[#840cca] bg-gradient-to-br from-[#840cca] to-[#4514a0] shadow-lg shadow-black/30 text-white text-2xl'>
       <div className="mycontainer flex justify-between items-center px-4 py-5 h-20 font-[McLaren] font-extralight">
        <div className="logo font-bold tracking-wide ">Lock<span className='text-[#16052a] text-[gradient-to-br from-[#840cca] to-[#4514a0]]'>IT</span></div>
       <ul>
        <li className='flex gap-4'>
            <a className='hover:font-bold' href='#'>Home</a>
            <a className='hover:font-bold' href='#'>Contact</a>
            <a className='hover:font-bold' href='#'>About</a>
            <a className='hover:font-bold' href='#'>Pass</a>
        </li>
       </ul>
       </div>
    </nav>
  )
}

export default Navbar
