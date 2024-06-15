import express from "express";
import { addEmp, getEmp, updateEmp } from "../controller/employee.js";

const router = express.Router();

router.post("/add" , addEmp);
router.get("/get" , getEmp);
router.put("/update/:id" , updateEmp);
export default router;