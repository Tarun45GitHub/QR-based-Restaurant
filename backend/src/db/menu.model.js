import mongoose from "mongoose";

const menuSchema=new mongoose.Schema({
    MenuName:{
        type:String,
        require:true
    },MenuImage:{
        type:String,
        require:true
    },Descriptions:{
        type:String,
        require:true
    },MenuPrice:{
        type:Number,
        require:true
    }
})

export const Menu=mongoose.model("Menu",menuSchema);