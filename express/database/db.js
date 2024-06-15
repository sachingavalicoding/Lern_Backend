import mongoose from "mongoose";

export const db = () => {
    mongoose.connect(
        "mongodb+srv://sachingavali:MewA6G6PGuWCNlk2@learnbackend.hytj8mv.mongodb.net/?retryWrites=true" , 
        {
            dbname:"learn_backend",
        }
    )
    .then (() => {
        console.log(" SuccessFully connected to database ");
    })
    .catch((err) => {
        console.log(` Error in Connect Database ${err}`);
    })
}