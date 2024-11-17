import React, { useState } from 'react';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Order from './components/Order/Order';
import Menu from './components/Menu/Menu';


const App = () => {
let [data,setData] = useState([])
let [dataLength,setDataLength] = useState(null)
let [newData,setNewData] = useState([])

  function addProduct(newProduct){
    let data = JSON.parse(localStorage.getItem("data")) || []
    data.push(newProduct)
    localStorage.setItem("data",JSON.stringify(data))
  }
  
  //!Pagination

  const [page, setPage] = useState(3)
   
  function pagination() {
    const itemPerage = 3
    let start = (page - 1 ) * itemPerage; 
    let end = start + itemPerage;
    return data.slice(start, end)
  }

  //!pagination
  
    function readProduct(){
      let data = JSON.parse(localStorage.getItem("data")) || []
      setData(data)
    }
      function addProductOrder(index){
      let data = JSON.parse(localStorage.getItem("data")) || []
      let newData = JSON.parse(localStorage.getItem("order")) || []
      if(newData.some((el,idx)=> idx === index)){
          alert("Этот продукт уже добавлен")
      }else{
        let findItem = data.find((el,idx)=> idx === index);
        newData.push(findItem);
        localStorage.setItem("order",JSON.stringify(newData))
      }
      setDataLength(newData.length)
      }

    
      function DeleteProduct(index) {
        let data = JSON.parse(localStorage.getItem("data")) || [];
        data.splice(index, 1); 
        localStorage.setItem("data", JSON.stringify(data));
        readProduct();
      }

      
      function readOrder() {
        let newData = JSON.parse(localStorage.getItem("order")) || [];
         setNewData(newData)
      }
      function OrderDelete(index) {
        let newData = JSON.parse(localStorage.getItem("order")) || [];
        newData.splice(index, 1);
        localStorage.setItem("order", JSON.stringify(newData));
        
        setDataLength(newData.length);
      }
      
      

   return (
    <div>
    <Layout dataLength = {dataLength} />
  <Routes>
    <Route path="/" element={<Menu 
    readProduct = {readProduct}
     data = {data} 
     pagination = {pagination} 
     setPage = {setPage} 
     addProductOrder = {addProductOrder}
     DeleteProduct = {DeleteProduct}
     />} />
    <Route path="/Admin" element={<Admin addProduct = {addProduct} />} />
    <Route path="/Order" element={<Order OrderDelete = {OrderDelete} readOrder={readOrder} />} />
  </Routes>
  </div>
   )
  };

export default App;
