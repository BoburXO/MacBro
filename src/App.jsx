import React, { useEffect } from 'react'
import axios from "axios"
import { Route, Routes } from "react-router-dom"
import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop'
import Cart from './Pages/Cart/Cart'

// sanjar
import Trade_in from './Pages/Trade_in/Trade_in'
import News from './Pages/News/News';
import About from './Pages/About/About';
import Shop_addresses from './Pages/Shop_addresses/Shop_addresses';
import For_business from './Pages/For_business/For_business';
import Vacancy from './Pages/Vacancy/Vacancy';
import Sell from './Pages/Sell/Sell';
import Delivery from './Pages/Delivery/Delivery';
import Contact from './Pages/Contact/Contact';
import Suggestions from './Pages/Suggestions/Suggestions';
import Esim from './Pages/Esim/Esim';
// import from './Pages';


const App = () => {

  //   useEffect(() => {
  //     axios
  //     .get("https://flowers-api-yqhj.onrender.com/products")
  //     .then((res) => {
  //         console.log(res);
  //         setData(res.data)
  //     })
  //     .catch((err) => {
  //         console.log(err);
  //     })
  // }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart/:_id' element={<Cart />} />
        <Route path='/data/:desc' element={<Shop />} />
        <Route path='/trade_in' element={<Trade_in />} />
        <Route path='/news' element={<News />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop_addresses' element={<Shop_addresses />} />
        <Route path='/for_business' element={<For_business />} />
        <Route path='/vacancy' element={<Vacancy />} />
        <Route path='/sell' element={<Sell />} />
        <Route path='/delivery' element={<Delivery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/suggestions' element={<Suggestions />} />
        <Route path='/esim' element={<Esim />} />

      </Routes>
    </>
  )
}

export default App