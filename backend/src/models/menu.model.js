import mongoose from "mongoose";

const menuSchema= new mongoose.Schema({
    name:String,
    description:String,
    imageURL:String,
    price:Number,
    NoOfStock:Number
});
const menuItems=mongoose.model("menuItems",menuSchema);
module.exports={menuItems};