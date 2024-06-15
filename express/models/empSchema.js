import mongoose from "mongoose";


const empSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
    },
    phone:Number,
})

export const Emp = mongoose.model("Emp" , empSchema);