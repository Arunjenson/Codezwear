import React from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai';
const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center md:justify-start items-center py-2 shadow-md'>
      <div className="logo mx-5">
        <Link href={"/"}>
          <p className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-fuchsia-800 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-2 text-xl">Codezwear.com</span>
          </p>
        </Link>
      </div>
      <div className="nav">
        <ul className='flex items-center space-x-4 font-bold md:text-md'>
          <Link href={'/tshirts'}><li>Tshirts</li></Link>
          <Link href={'/hoodies'}><li>Hoodies</li></Link>
          <Link href={'/stickers'}><li>Stickers</li></Link>
          <Link href={'/mugs'}><li>Mugs</li></Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-4 mx-5 ">
        <AiOutlineShoppingCart  className='text-xl md:text-2xl'/>
      </div>
    </div>
  )
}

export default Navbar