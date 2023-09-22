import React, { useEffect, useState } from 'react'
import './products.css';
import {add } from '../../store/CartSlice';
import { useDispatch } from "react-redux";

export default function Products() {

    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        
         const fetchProducts = async () => {
             const res = await fetch('https://fakestoreapi.com/products');
             const data = await res.json();
             console.log(data);
             setProducts(data);
         };
         fetchProducts();
    }, []);

    const handleAdd=(product)=>{
        dispatch(add(product)); 
    }

    return (
        <div className='products-wrapper'>
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h3>{product.title}</h3>
                    <h4> ${product.price}</h4>
                        <button onClick={()=>handleAdd(product)} className='btn'>Add To Cart</button>
                    </div>
            ))
                }
        </div>
    )
}
