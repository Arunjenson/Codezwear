'use client'
import React,{useRef} from 'react'
import Link from 'next/link'
import { AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';

const Navbar = () => {
  const toggleCart = () =>{
      if (sideBar.current.classList.contains('translate-x-full')){
        sideBar.current.classList.toggle('translate-x-0')
      }
  }
  const sideBar = useRef();
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
      <div  onClick={toggleCart} className="cart absolute right-0 top-4 mx-5 cursor-pointer ">
        <AiOutlineShoppingCart  className='text-xl md:text-2xl'/>
      </div>

      <div ref={sideBar} className="w-72 h-full z-10 text-center sideCart absolute top-0 right-0 px-6 py-10 transition translate-x-full bg-violet-100">
        <h2 className='font-bold text-xl'>Shopping Cart</h2>
        <span onClick={toggleCart} className='absolute top-5
         right-2 cursor-pointer text-2xl'><AiFillCloseCircle/></span>
         <ol className='list-decimal font-semibold'>
          <li>
          <div className="item flex my-5 text-left">
            <div className='w-2/3 font-semibold'>Tshirt - Wear the code</div>
            <div className='w-1/3 flex text-lg font-semibold items-center justify-center'> <AiFillMinusCircle className='cursor-pointer'/><span className='mx-2 textsm
            '>1</span><AiFillPlusCircle className='cursor-pointer text-violet-700'/></div>
          </div>
          </li>
         </ol>
         <div className="flex max-h-[30px]">

         <button className="flex justify-center items-center mr-2  text-white bg-violet-500 border-0 px-2 py-4 focus:outline-none hover:bg-violet-600 rounded text-lg"><BsFillBagCheckFill className='m-1'/>Checkout</button>
         <button className="flex justify-center items-center text-white bg-violet-500 border-0 px-2 py-4 focus:outline-none hover:bg-violet-600 rounded text-lg">Clear Cart</button>
         </div>
      </div>
    </div>
  )
}

export default Navbar