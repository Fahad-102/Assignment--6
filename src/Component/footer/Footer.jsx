import React from 'react';

const Footer = () => {
  return (
    <div className='bg-[#101727] text-white w-full'>
      
      <footer className="p-10 sm:p-12">
        <div className='max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12'>

          <div className='lg:col-span-1 text-left'>
            <h1 className='text-4xl font-extrabold mb-4'>DigiTools</h1>
            <p className='text-gray-400 text-sm leading-relaxed'>
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>


          <nav className="text-left">
            <h6 className="text-xl font-bold mb-4">Product</h6>
            <ul className='flex flex-col gap-2 text-gray-400 text-sm'>
              <li className='hover:text-white cursor-pointer transition-colors'>Features</li>
              <li className='hover:text-white cursor-pointer transition-colors'>Pricing</li>
              <li className='hover:text-white cursor-pointer transition-colors'>Templates</li>
              <li className='hover:text-white cursor-pointer transition-colors'>Integrations</li>
            </ul>
          </nav>

          <nav className="text-left">
            <h6 className="text-xl font-bold mb-4">Company</h6>
            <ul className='flex flex-col gap-2 text-gray-400 text-sm'>
              <li className='hover:text-white cursor-pointer transition-colors'>About</li>
              <li className='hover:text-white cursor-pointer transition-colors'>Blog</li>
              <li className='hover:text-white cursor-pointer transition-colors'>Careers</li>
              <li className='hover:text-white cursor-pointer transition-colors'>Press</li>
            </ul>
          </nav>

          <nav className="text-left">
            <h6 className="text-xl font-bold mb-4">Resources</h6>
            <ul className='flex flex-col gap-2 text-gray-400 text-sm'>
              <li className='hover:text-white cursor-pointer transition-colors'>Documentation</li>
              <li className='hover:text-white cursor-pointer transition-colors'>Help Center</li>
              <li className='hover:text-white cursor-pointer transition-colors'>Community</li>
              <li className='hover:text-white cursor-pointer transition-colors'>Contact</li>
            </ul>
          </nav>

          <nav className="text-left">
            <h6 className="text-xl font-bold mb-4">Social Links</h6>
            <div className='flex gap-4 mt-2'>
              <img src="/products/Instagram.png" alt="Instagram" className='w-6 h-6 object-contain cursor-pointer hover:opacity-80' />
              <img src="/products/Facebook.png" alt="Facebook" className='w-6 h-6 object-contain cursor-pointer hover:opacity-80' />
              <img src="/products/Twitter.png" alt="Twitter" className='w-6 h-6 object-contain cursor-pointer hover:opacity-80' />
            </div>
          </nav>

        </div>
      </footer>

      <hr className='border-gray-800 mx-auto w-11/12' />

      <div className='flex flex-col sm:flex-row justify-between items-center max-w-[1280px] mx-auto px-4 py-8 gap-4 text-gray-500 text-xs uppercase tracking-widest'>
        <div>© 2026 DigiTools. All rights reserved.</div>
        <div className='flex gap-6'>
          <p className='hover:text-white cursor-pointer transition-colors'>Privacy Policy</p>
          <p className='hover:text-white cursor-pointer transition-colors'>Terms of Service</p>
          <p className='hover:text-white cursor-pointer transition-colors'>Cookies</p>
        </div>
      </div>

    </div>
  );
};

export default Footer;