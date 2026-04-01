import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ cart, setCart }) => {
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error("Item removed from cart");
  };

  const checkout = () => {
    if (cart.length === 0) return;
    setCart([]);
    toast.success("Checkout complete! Cart cleared.");
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-10">
      <ToastContainer position="top-right" autoClose={1500} />
      
      {/* মেইন কন্টেইনার */}
      <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-800 mb-8 text-left italic">Your Cart</h2>

        {cart.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-400 text-lg">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-4 mb-8">
              {cart.map(item => (
                <div 
                  key={item.id} 
                  className="flex justify-between items-center bg-[#F8F9FD] p-5 rounded-2xl transition-all hover:shadow-sm"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-50">
                      <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain"/>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-lg">{item.name}</p>
                      <p className="text-gray-400 font-medium">${item.price}</p>
                    </div>
                  </div>

                  <button
                    className="text-[#FF5B8E] hover:text-red-600 font-semibold text-sm transition-colors mr-4"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center px-2 mb-8 mt-10">
              <p className="text-gray-400 font-medium text-lg italic">Total:</p>
              <p className="text-3xl font-black text-slate-800 tracking-tight">${totalPrice}</p>
            </div>

            <button
              className="w-full bg-[#8B2CFF] hover:bg-[#7a25e0] text-white py-5 rounded-full text-xl font-bold shadow-lg shadow-purple-200 transition-all active:scale-[0.98]"
              onClick={checkout}
            >
              Proceed To Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;