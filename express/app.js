/* const express = require("express"); */


import express from "express";
import cors from "cors";
import { db } from "./database/db.js";
import empRouter  from "./router/empRouter.js";
const app = express();


 // middle ware

// build in middle ware
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// third party middle ware  have to install it 

app.use(cors({
    origin:["http:://localhost:5173"],
    methods:[ "GET" , "POST" , "PUT" , "DELETE"],
    credentials:true,
}));
 
// methods in backend 
// GET  - get data 
// put - updated method 
// delete - delete data
// post  - create data or post data 


// connect db
app.use(empRouter);
db();
app.listen(4000 , () => {
    console.log(" Server is created ");
})