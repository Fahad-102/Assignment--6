import React from 'react';
import { FaCircle } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
  return (
    <div className='my-10 px-4'>
      <div className='flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto'>

        <div className='max-w-xl'>
          <button className="btn text-purple-700 bg-purple-100 rounded-3xl mb-4 flex items-center gap-2">
            <FaCircle /> New: AI-Powered Tools Available
          </button>

          <h1 className='text-[#101727] font-extrabold text-5xl mb-8 leading-tight '>
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className='text-[#627382] text-xl mb-6'>
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>

          <div className='flex gap-5'>
            <button className='btn btn-ghost bg-purple-700 text-white rounded-3xl hover:bg-purple-800 transition'>
              Explore Products
            </button>
            <button className='btn btn-outline text-purple-700 rounded-3xl flex items-center gap-2 hover:bg-purple-100 transition'>
              <CiPlay1 /> Watch Demo
            </button>
          </div>
        </div>

        <div className='flex justify-center'>
          <img className='w-full max-w-[590px] h-auto' src="/products/banner.png" alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;