import React from 'react'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center mx-auto max-w-[92%] mt-[50px]'>
      <img src={logo} alt="Logo" className='h-13' />
      <div className='font-[900] tracking-[-0.06em] text-[14px] flex gap-[20px] text-black-text '>
        <span className='cursor-pointer hover:text-black-text/40 transition'>Our pieces</span>
        <span className='cursor-pointer hover:text-black-text/40 transition'>The studio</span>
        <span className='cursor-pointer hover:text-black-text/40 transition'>Get in touch</span>
      </div>
    </div>
  )
}

export default Navbar