// CRUD 
import {Emp} from "../models/empSchema.js"
export const addEmp = async (req , res , next ) => {
    const {name , email , phone} = req.body;
    if(!name || !email || !phone){
        return next(res.status(400).json({
            success:false,
            message:"Please provide all details "
        }))
    }
    const emp = await Emp.create({name , email , phone});
    res.status(201).json({
        success:true,
        message:" emp is created ",
        emp,
    });
}