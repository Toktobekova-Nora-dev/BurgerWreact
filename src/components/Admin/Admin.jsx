import React, { useState } from 'react';
import c from "./Admin.module.css"

const Admin = ({addProduct}) => {

    const [img,setImg] = useState("")
   const [name,setName] = useState("")
   const [price,setPrice] = useState("")

  const handleSubmit = () => {
    let newProduct = {
        name: name,
        price: price,
        img: img
       }    
       addProduct(newProduct);
  }


    return (
       <section id= {c.adminner}  >
        <div className="container">
            <div className={c.adminner}>
                <h1>CREATE PRODUCT</h1>
                <div className={c.input}>
                    <input onChange={(e)=> setImg(e.target.value)} type="text" placeholder='img'/>
                    <input onChange={(e)=> setName(e.target.value)} type="text" placeholder='food name' />
                    <input onChange={(e)=> setPrice(e.target.value)} type="text" placeholder='price' />
                    <button onClick={handleSubmit}>create</button>
                </div>
            </div>
        </div>
       </section>
    );
};

export default Admin;