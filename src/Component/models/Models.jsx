import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Models = ({ models, cart, setCart }) => {
  const addToCart = (item) => {
    if (!cart.find(i => i.id === item.id)) {
      setCart([...cart, item]);
    }
  };

  if (!models || models.length === 0) return <p className="text-center py-10">No products available</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 py-10">
      {models.map(item => (
        <div 
          key={item.id} 
          className="relative bg-white border border-blue-50 rounded-[2.5rem] p-8 shadow-sm flex flex-col items-start transition-all hover:shadow-md"
        >
          {item.tag && (
            <div className="absolute top-6 right-6">
              <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                item.tagType === 'best-seller' ? 'bg-[#FFF4D9] text-[#CC9628]' : 
                item.tagType === 'popular' ? 'bg-blue-50 text-blue-500' : 
                'bg-green-50 text-green-500'
              }`}>
                {item.tag}
              </span>
            </div>
          )}

          <div className="w-16 h-16 bg-white border border-gray-100 rounded-full flex justify-center items-center mb-8 shadow-sm">
            <img src={item.icon} alt={item.name} className="w-10 h-10 object-contain" />
          </div>

          <h3 className="text-2xl font-bold text-[#0F172A] mb-3">{item.name}</h3>
          <p className="text-slate-500 text-base leading-relaxed mb-6 text-left">
            {item.description}
          </p>

          <div className="flex items-baseline mb-8">
            <span className="text-4xl font-extrabold text-[#0F172A]">${item.price}</span>
            <span className="text-gray-400 text-lg ml-1">
                /{item.period === 'monthly' ? 'Mo' : 'Once'}
            </span>
          </div>

          <ul className="space-y-4 mb-10 w-full">
            {item.features && item.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-slate-600 font-medium text-sm">
                <FaCheck className="text-[#34D399]" size={14} />
                {feature}
              </li>
            ))}
          </ul>

          <button
            className="w-full bg-[#8B2CFF] hover:bg-[#7a25e0] text-white py-4 rounded-full text-lg font-bold transition-all duration-200 mt-auto"
            onClick={() => addToCart(item)}
          >
            {cart.find(i => i.id === item.id) ? "Added to Cart" : "Buy Now"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Models;