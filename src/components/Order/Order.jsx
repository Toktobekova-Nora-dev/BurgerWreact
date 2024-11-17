import React, { useEffect, useState } from 'react';
import n from "./Order.module.css";

const Order = ({ OrderDelete, readOrder }) => {
    const [newData, setNewData] = useState([]);
    const [counts, setCounts] = useState({}); 

    useEffect(() => {
        readOrder();
    }, []);

    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem("order")) || [];
        setNewData(storedOrders);

        const initialCounts = storedOrders.reduce((acc, el, index) => {
            acc[index] = 1; 
            return acc;
        }, {});
        setCounts(initialCounts);
    }, [readOrder]);

    const handleCountChange = (index, operation) => {
        setCounts((prevCounts) => {
            const newCounts = { ...prevCounts };
            if (operation === 'increase') {
                newCounts[index] = newCounts[index] + 1;
            } else if (operation === 'decrease' && newCounts[index] > 1) {
                newCounts[index] = newCounts[index] - 1;
            }
            return newCounts;
        });
    };

    const handleOrderDelete = (index) => {
        OrderDelete(index);  
    };

    return (
        <section id={n.orderCoding}>
            <div className="container">
                <h1>MY ORDERS</h1>
                <div className={n.orderCoding}>
                    {newData.length === 0 ? (
                        <p>ПУСТ</p>
                    ) : (
                        newData.map((el, index) => (
                            <div key={index} className={n.box}>
                                <img src={el.img} alt="orderImg" />
                                <div className={n.cofee}>
                                    <h2>{el.name}</h2>
                                    
                                    <h4>{el.price * (counts[index] || 1)}$</h4>
                                </div>

                                <div className={n.counChast}>
                                    <button onClick={() => handleOrderDelete(index)}>Delete order</button>

                                    <div className={n.doulinCounter}>
                                        <button onClick={() => handleCountChange(index, 'increase')}>+</button>
                                        <p>{counts[index] || 1}X</p>
                                        <button onClick={() => handleCountChange(index, 'decrease')}>-</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Order;
