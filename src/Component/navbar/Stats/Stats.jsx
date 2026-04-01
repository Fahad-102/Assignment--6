import React from 'react';

const Stats = () => {
  return (
    <div className='w-full bg-purple-700 py-12 px-4'>
      <div className='max-w-6xl mx-auto flex justify-around items-center flex-wrap gap-8'>
        
        <div className='text-center text-white'>
          <div className='text-7xl font-bold'>50K+</div>
          <p className='text-2xl text-gray-300'>Active Users</p>
        </div>

        <div className="divider divider-horizontal hidden md:block"></div>

        <div className='text-center text-white'>
          <div className='text-7xl font-bold'>200+</div>
          <p className='text-2xl text-gray-300'>Premium Tools</p>
        </div>

        <div className="divider divider-horizontal hidden md:block"></div>

        <div className='text-center text-white'>
          <div className='text-7xl font-bold'>4.9</div>
          <p className='text-2xl text-gray-300'>Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;