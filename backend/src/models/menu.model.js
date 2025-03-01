import mongoose from "mongoose";

const menuSchema= new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    }
    // imageURL:String,
    // price:Number,
    // NoOfStock:Number
});
export const MenuItems=mongoose.model("MenuItems",menuSchema);
