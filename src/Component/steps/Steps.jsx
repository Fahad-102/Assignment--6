import React from 'react';

const Steps = () => {
  return (
    <div className='py-20 bg-gray-50'>
      <div className='max-w-6xl mx-auto text-center px-4'>
        <h1 className='text-5xl font-extrabold mb-7'>Get Started in 3 Steps</h1>
        <p className='text-gray-600 mb-16'>Start using premium digital tools in minutes, not hours.</p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

          <div className="card bg-white shadow-md rounded-2xl p-6 text-center">
            <span className="badge rounded-full bg-purple-700 text-white py-2 px-4 mb-4">01</span>
            <img className='rounded-full p-4 bg-purple-100 mx-auto mb-4 w-20 h-20 object-contain' src="/products/user.png" alt="User icon" />
            <h2 className='text-xl font-bold mb-2'>Create Account</h2>
            <p className='text-gray-500 text-sm'>Sign up for free in seconds. No credit card required to get started.</p>
          </div>

          <div className="card bg-white shadow-md rounded-2xl p-6 text-center">
            <span className="badge rounded-full bg-purple-700 text-white py-2 px-4 mb-4">02</span>
            <img className='rounded-full p-4 bg-purple-100 mx-auto mb-4 w-20 h-20 object-contain' src="/products/package.png" alt="Package icon" />
            <h2 className='text-xl font-bold mb-2'>Choose Products</h2>
            <p className='text-gray-500 text-sm'>Browse our catalog and select the tools that fit your needs.</p>
          </div>

          <div className="card bg-white shadow-md rounded-2xl p-6 text-center">
            <span className="badge rounded-full bg-purple-700 text-white py-2 px-4 mb-4">03</span>
            <img className='rounded-full p-4 bg-purple-100 mx-auto mb-4 w-20 h-16 object-contain' src="/products/rocket.png" alt="Rocket icon" />
            <h2 className='text-xl font-bold mb-2'>Start Creating</h2>
            <p className='text-gray-500 text-sm'>Download and start using your premium tools immediately.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;