import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState={
    carts:[{}]
}

export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const {tableId,item}=action.payload;
            // console.log(item);
            
           const Item=state.carts.find((i)=>(i.tableId==tableId && i.item.id==item.id))
           if(Item){Item.quantity+=1}
           else{
            state.carts.push({...action.payload,quantity:1,id:Date.now()})
           }
            // console.log(state.carts);
        },
        incrementQuantity:(state,action)=>{
            const {tableId,item}=action.payload; 
            state.carts.find((i)=>{
                if(i.id==item.id && i.tableId==tableId) i.quantity+=1;
            })
            // console.log(state.carts);
        },
        decrementQuantity:(state,action)=>{
            const {tableId,item}=action.payload;
            state.carts.find((i)=>{
                if(i.tableId==tableId && i.id==item.id) i.quantity-=1;
            })
            // console.log((state.carts));    
        },
        removeFromCart:(state,action)=>{
            const {tableId,item}=action.payload;
            state.carts=state.carts.filter((i)=>(i.tableId==tableId &&i.id!==item.id))
        }
    }
})


export const {addToCart,incrementQuantity,decrementQuantity,removeFromCart}=cartSlice.actions;
export default cartSlice.reducer;