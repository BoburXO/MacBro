import React, { createContext, useState } from "react";
import axios from "axios";


const Context = createContext();

const ContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [mura, setMura] = useState("");
    const [_id, set_Id] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [desc, setDesc] = useState("");
    const [count, setCount] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const [updatedAt, setUpdatedAt] = useState("");
    const [__v, set__V] = useState("");


    React.useEffect(() => {
        axios
            .get("https://flowers-api-yqhj.onrender.com/products")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const searchText = (event) => {
        setMura(event.target.value);
    };

    const dataSearch = data.filter((item) => {
        return item?.desc.toLowerCase().includes(mura.toLowerCase());
    });

    return (
        <>
            <Context.Provider
                value={{
                    data,
                    setData,
                    mura,
                    setMura,
                    _id,
                    name,
                    price,
                    image,
                    desc,
                    count,
                    createdAt,
                    updatedAt,
                    set_Id,
                    setName,
                    setPrice,
                    setImage,
                    setDesc,
                    setCount,
                    setCreatedAt,
                    dataSearch,
                    setUpdatedAt,
                    set__V,
                    searchText,
                    __v,
                }}>
                {children}
            </Context.Provider>
        </>
    );
};

export { Context, ContextProvider };