import React, { use } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { incrementQuantity,decrementQuantity,removeFromCart } from '../reducer/cartSlice';
import { useParams } from 'react-router-dom';

const CartPage = () => {
  const {tableId}=useParams()
  console.log(tableId);
  
  const cart=useSelector((state)=>state.cart)
  console.log(cart);
  
  const dispatch=useDispatch()

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h3>{item.id}</h3>
            <h4>{item.menu_name}</h4>
            <p>Price: ${item.menu_price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => dispatch(incrementQuantity({tableId,item}))}>+</button>
            <button onClick={() => dispatch(decrementQuantity({tableId,item}))}>-</button>
            <button onClick={() => dispatch(removeFromCart({tableId,item}))}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;