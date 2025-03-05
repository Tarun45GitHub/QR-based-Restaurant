import { createContext,useReducer } from "react";

const CartContext=createContext();

const cartReducer=(state,action)=>{
  const { tableId, item } = action.payload;
  const tableCart = state[tableId] || [];
  switch(action.type){
    case "ADD_TO_CART":
      return{
        ...state,
        [tableId]: [...tableCart,{item,quantity:1}],
      };
    case "REMOVE_FROM_CART":
      return{
        ...state,
        [tableId]:tableCart.filter((it)=>{it.id!=item.id}),
      };
      case "INCREMENT":
        return {
          ...state,
          [tableId]:tableCart.map((e)=>{e.id===item.id?{...e,quantity:e.quantity+1}:e}),
        };
      case "DECREMENT":
        return {
          ...state,
          [tableId]:tableCart.map((e)=>{e.id===item.id?{...e,quantity:e.quantity-1}:e}),
        };
      default:
        return state;
  }
};

export default {cartReducer}

// const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, { cart: [] });

//   return (
//     <CartContext.Provider value={{ cart: state.cart, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default{CartProvider,CartContext}