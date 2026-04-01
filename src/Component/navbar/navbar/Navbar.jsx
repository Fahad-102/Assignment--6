import React from 'react';
import { CiShoppingCart } from "react-icons/ci";

const Navbar = ({ cart, setShowCart }) => {
  return (
    <>
      <div className='flex items-center justify-between py-5 px-4 max-w-6xl mx-auto'>
        <h1 className='text-4xl text-purple-600 font-bold'>DigiTools</h1>

        <ul className='hidden md:flex gap-5 font-semibold text-gray-700'>
          <li className='hover:text-purple-600 cursor-pointer transition'>Products</li>
          <li className='hover:text-purple-600 cursor-pointer transition'>Features</li>
          <li className='hover:text-purple-600 cursor-pointer transition'>Pricing</li>
          <li className='hover:text-purple-600 cursor-pointer transition'>Testimonials</li>
          <li className='hover:text-purple-600 cursor-pointer transition'>FAQ</li>
        </ul>

        <div className='flex justify-center items-center gap-5'>
          <div
            className='flex gap-2 items-center font-semibold text-gray-700 cursor-pointer'
            onClick={() => setShowCart(prev => !prev)}
          >
            <span className='text-3xl relative'>
              <CiShoppingCart />
              {cart.length > 0 && (
                <span className='absolute -top-2 -right-3 bg-red-500 text-white w-5 h-5 text-xs rounded-full flex justify-center items-center'>
                  {cart.length}
                </span>
              )}
            </span>
            <p>Cart</p>
          </div>
          <button className="btn text-white bg-purple-600 rounded-3xl hover:bg-purple-700 transition">
            Get Started
          </button>
        </div>
      </div>
      <hr className='mt-2 border-gray-200' />
    </>
  );
};

export default Navbar;