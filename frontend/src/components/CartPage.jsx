import React, { use } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { incrementQuantity,decrementQuantity,removeFromCart } from '../reducer/cartSlice';
import { useParams } from 'react-router-dom';

const CartPage = () => {
  const {tableId}=useParams()
  console.log(tableId);
  
  const TableCart=useSelector((state)=>state.carts)
  const cart=TableCart.filter((i)=>(i.tableId==tableId))
  
  const totalPrice = cart.reduce((total, item) =>
     total+=(item.item.MenuPrice*item.quantity),0
     );
  console.log(totalPrice);
  
  const dispatch=useDispatch()

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Order Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">No items in cart.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}
          className="flex justify-between items-center border-b py-4">
            <h4 className="text-lg font-semibold w-14">{item.item.MenuName}</h4>
            <p className="text-gray-600" >Price: RS.{item.item.MenuPrice}</p>
            <p className="text-gray-600">Quantity: {item.quantity}</p>
            <button onClick={() => dispatch(incrementQuantity({tableId,item}))}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">+</button>
            <button onClick={() => dispatch(decrementQuantity({tableId,item}))}
               className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
               disabled={item.quantity == 1} >-</button>
            <button onClick={() => dispatch(removeFromCart({tableId,item}))} 
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-600">Remove</button>
              
          </div>
        ))
      )}
    <div className={`text-right mt-4 text-xl font-bold ${totalPrice <= 0 ? "hidden" : ""}`} >
                Total Price: RS.{totalPrice.toFixed(2)}
       <button class= 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-10'>Order Now</button>
       </div>
    </div>
  );
};

export default CartPage;