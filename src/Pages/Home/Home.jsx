import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import Aside from '../../Components/Aside/Aside';
import Sect1 from '../../Components/Sect1/Sect1';
import Sect10 from '../../Components/Sect10/Sect10';
import Sect2 from '../../Components/Sect2/Sect2';
import Sect3 from '../../Components/Sect3/Sect3';
import Sect4 from '../../Components/Sect4/Sect4';
import Sect5 from '../../Components/Sect5/Sect5';
import Sect6 from '../../Components/Sect6/Sect6';
import Sect7 from '../../Components/Sect7/Sect7';
import Sect8 from '../../Components/Sect8/Sect8';
import Sect9 from '../../Components/Sect9/Sect9';
import Sect11 from '../../Components/Sect11/Sect11';

const Home = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get("https://flowers-api-yqhj.onrender.com/products")
      .then((res) => {
        console.log(res);
        setData(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <>
      {/* Sanjar code start */}
      <Nav />
      {/* FT code start */}
      <Sect10 data={data} />
      <Sect1 data={data} />
      <Sect2 data={data} />
      <Sect3 data={data} />
      <Sect4 data={data} />
      <Sect5 data={data} />
      <Sect6 data={data} />
      <Sect7 data={data} />
      <Sect8 data={data} />
      <Sect9 data={data} />
      <Sect11 data={data} />
      <Aside data={data} />
      {/* FT code end */}
          {/* Sanjar code start */}
          <Footer />
      {/* FT code start */}
    </>
  )
}

export default Home