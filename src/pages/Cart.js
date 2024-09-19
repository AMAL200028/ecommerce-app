import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../features/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? <p>Your cart is empty</p> : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="d-flex justify-content-between align-items-center">
              <img src={item.image} alt={item.title} width="50" />
              <h5>{item.title}</h5>
              <p>${item.price}</p>
              <div>
                <button className="btn btn-outline-secondary" onClick={() => dispatch(decreaseQuantity(item))}>-</button>
                <span className="mx-2">{item.quantity}</span>
                <button className="btn btn-outline-secondary" onClick={() => dispatch(increaseQuantity(item))}>+</button>
              </div>
              <button className="btn btn-danger" onClick={() => dispatch(removeFromCart(item))}>Remove</button>
            </div>
          ))}
          <h4>Total: ${total.toFixed(2)}</h4>
        </div>
      )}
    </div>
  );
};

export default Cart;
