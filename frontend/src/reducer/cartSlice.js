import { createSlice } from "@reduxjs/toolkit";
const initialState={
    cart:[{id:1,menu_name:"hello",menu_price:100,quantity:1}]
}

export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const {tableId,addItem}=action.payload;
            console.log(state.cart);
            const item=state.cart.find((i)=>i.id===action.payload.item.id)
            if(item){
                item.quantity+=1;
            }
            else{
                state.cart.push({addItem,quantity:1})
            }
        },
        incrementQuantity:(state,action)=>{
            const {tableId,addItem}=action.payload; 
            const item=state.cart[tableId].find((i)=>i.id===addItem.id)
            if(item){
                item.quantity+=1;
            }
        },
        decrementQuantity:(state,action)=>{
            const {tableId,addItem}=action.payload;
            const item=state.cart[tableId].find((i)=>i.id===addItem.id)
            if(item && item.quantity>1){
                item.quantity-=1;
            }
            else{
                state.cart[tableId]=state.cart[tableId].filter((i)=>i.id!==addItem.id)
            }
        },
        removeFromCart:(state,action)=>{
            state.cart[tableId]=state.cart[tableId].filter((i)=>i.id!==addItem.id)
        }
    }
})


export const {addToCart,incrementQuantity,decrementQuantity,removeFromCart}=cartSlice.actions;
export default cartSlice.reducer;