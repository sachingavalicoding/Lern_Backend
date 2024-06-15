// CRUD 
import {Emp} from "../models/empSchema.js"

  // POST request 
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

// GET REQUEST 
export const getEmp = async (req , res , next ) => {
    const employees = await Emp.find();
    res.status(200).json({
        success:true,
        employees,
    });
}

// PUT Request for update emp 

export const updateEmp = async(req , res , next) => {
    const {id} = req.params;
    let employee = await Emp.findOne(id);

    if(!employee){
        return next(res.status(404).json({
            success:false,
            message:"Employee not found "
        }))
    }
    const {name , email , phone} = req.body;
     employee = await Emp.findByIdAndUpdate(id , {name , email , phone} , {
        new:true,
        useFindAndModify:false,
        runValidators:true
    });

    res.status(200).json({
        success:true,
        message:"Employee Updated",
        employee,
    });
}