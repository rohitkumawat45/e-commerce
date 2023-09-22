import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../store/CartSlice';
import './cart.css'

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div className='cart'>
      <h3 className='title'>Cart</h3>
      <div className="cartWrapper">
        {products.map((product) => (
          <div key={product.id} className="cartCard">
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h3>${product.price}</h3>
            <button
              className="btn"
              onClick={() => handleRemove(product.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;