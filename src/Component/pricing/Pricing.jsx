import React from 'react';

const Pricing = () => {
  return (
    <div className=' py-32 w-full bg-gray-50'>
      <h1 className='text-5xl text-center font-extrabold mb-7'>Simple, Transparent Pricing</h1>
      <p className='text-gray-600 text-center mb-10'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        <div className="card bg-base-100 shadow-sm rounded-2xl p-6">
          <h1 className='text-2xl font-bold mb-2'>Starter</h1>
          <p className='mb-5 text-gray-600'>Perfect for getting started</p>
          <span className="text-xl text-gray-600"><span className='text-black text-3xl font-bold'>$0</span>/month</span>
          <ul className="mt-5 flex flex-col gap-2 text-xs text-gray-600">
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Access to 10 free tools
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Basic templates
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Community support
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              1 project per month
            </li>
          </ul>
          <button className="btn bg-purple-600 text-white rounded-3xl btn-block mt-25">Get Started Free</button>
        </div>




        <div className="card bg-purple-700 text-white shadow-sm rounded-2xl p-6">
          <div className='flex justify-center mb-3'>
            <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FEF3C6] text-[#BB4D00] px-3 z-10 py-1 rounded-full text-xs font-bold">Most Popular</span>
          </div>
          <h1 className='text-2xl font-bold mb-2'>Pro</h1>
          <p className='mb-5'>Best for professionals</p>
          <span className="text-xl"><span className='text-3xl font-bold'>$29</span>/month</span>
          <ul className="mt-5 flex flex-col gap-2 text-xs">
            
            <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>Access to all premium tools</li>
            <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>Unlimited templates</li>
            <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>Priority support</li>
            <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>Unlimited projects</li>
            <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>Cloud sync</li>
            <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>Advanced analytics</li>
          </ul>
          <button className="btn bg-white text-purple-600 rounded-3xl btn-block mt-12">Start Pro Trial</button>
        </div>





        <div className="card bg-base-100 shadow-sm rounded-2xl p-6">
          <h1 className='text-2xl font-bold mb-2'>Enterprise</h1>
          <p className='mb-5 text-gray-600'>For teams and businesses</p>
          <span className="text-xl text-gray-600"><span className='text-black text-3xl font-bold'>$99</span>/month</span>
          <ul className="mt-5 flex flex-col gap-2 text-xs text-gray-600">
            <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>Everything in Pro</li>
            <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>Team collaboration</li>
            <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>Custom integrations</li>
            <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>Dedicated support</li>
            <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>SLA guarantee</li>
            <li className="flex items-center"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>Custom branding</li>
          </ul>
          <button className="btn bg-purple-600 text-white rounded-3xl btn-block mt-12">Contact Sales</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;          