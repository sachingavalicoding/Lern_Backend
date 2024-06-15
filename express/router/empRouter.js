import express from "express";
import { addEmp } from "../controller/employee.js";

const router = express.Router();

router.post("/add" , addEmp);

export default router;