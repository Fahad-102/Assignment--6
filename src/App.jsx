import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Component/navbar/navbar/Navbar';
import Banner from './Component/navbar/Banner/Banner';
import Stats from './Component/navbar/Stats/Stats';
import Steps from './Component/steps/Steps';
import Pricing from './Component/pricing/Pricing';
import Transform from './Component/tranform/Transform';
import Footer from './Component/footer/footer';
import Models from './Component/models/Models';
import Cart from './Component/cart/Cart';

function App() { 
  const [cart, setCart] = useState([]);
  const [models, setModels] = useState([]);
  const [view, setView] = useState('products');

  useEffect(() => {
    fetch('/models.json')
      .then(res => res.json())
      .then(data => setModels(data))
      .catch(err => console.error('Error loading models:', err));
  }, []);

  return (
    <>
      <Navbar cart={cart}/>
      <Banner/>
      <Stats/>
      <div>
        <h1 className=' text-black  text-center text-7xl font-semibold m-10 '>Premium Digital Tools</h1>
        <p className='text-center text-gray-600 '  >Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
      </div>
      <div className="flex justify-center gap-5 my-8">
        <button
          className={`btn rounded-3xl ${view==='products'?'bg-purple-600 text-white':'bg-gray-200'}`}
          onClick={()=>setView('products')}
        >Products</button>
        <button
          className={`btn rounded-3xl ${view==='cart'?'bg-purple-600 text-white':'bg-gray-200'}`}
          onClick={()=>setView('cart')}
        >Cart</button>
      </div>

      {view === 'products' && <Models models={models} cart={cart} setCart={setCart} />}
      {view === 'cart' && <Cart cart={cart} setCart={setCart} />}

      <Steps/>
      <Pricing/>
      <Transform/>
      <Footer/>
    </>
  )
}

export default App;


