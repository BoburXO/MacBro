import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'
import Head from '../../Component2/Head1/Head1'
import { useParams } from 'react-router-dom'
import Asid1 from '../../Component2/Asid1/Asid1'
import Sect10 from "../../Components/Sect10/Sect10"

const Cart = () => {

  const [data, setData] = useState([])
  const {_id} = useParams();

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
    <Head data={data}/>
    <Asid1 />
    <Sect10 />
    </>
  )
}

export default Cart