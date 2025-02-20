import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import movieRoute from "./route/movie.route.js"

const app = express()
const PORT = process.env.PORT || 4000
const URI = process.env.MONGO_URI

dotenv.config();

//connect to Mongo DB
try{
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("conectado a Mongo DB");
}catch(error){
    console.log("ERROR", error);
}

//definimos route
app.use("/movies", movieRoute);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})