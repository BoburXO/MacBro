import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Aside1 from '../../component1/Aside1/Aside1'
import Head from '../../component1/Head/Head'
import Sect12 from '../../component1/Sect12/Sect12'

const Shop = () => {
    const [data,setData] = useState([])
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
    console.log(data);

  return (
    <>
        <Sect12 data={data}/>
        <Head data={data}/>
        <Aside1 data={data}/>
    </>
  )
}

export default Shop 