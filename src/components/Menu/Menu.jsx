import React, { useEffect } from 'react';
import s from "./Menu.module.css"
import BasicPagination from '../Pogination/Pogination';

const Menu = ({readProduct, addProductOrder, setPage, pagination, DeleteProduct}) => {

   useEffect(()=>{
       readProduct();
   },[])

   return (
       <section id="section">
           <div className="container">
               <div className="section">
                   <h1 className={s.next}>MENU</h1>
                   <div className={s.foods}>
                       {
                           pagination().map((el, index) => (
                               <div key={index} className={s.food}>
                                   <div className={s.box}>
                                       <img className={s.img} src={el.img} alt="Imk" />
                                       <h2>{el.name}</h2>
                                       <div className={s.boxer}>
                                           <p>{el.price}$</p>
                                     <div className={s.class}>
                                           <button onClick={() => addProductOrder(index)}>to order</button>
                                           <button onClick={() => DeleteProduct(index)}>Delete</button>
                                     </div>
                                       </div>
                                   </div>
                               </div>
                           ))
                       }
                   </div>
                   <BasicPagination setPage={setPage} />
               </div> 
           </div>
       </section>
   );
};

export default Menu;
