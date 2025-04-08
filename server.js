import express from "express";
import urlRoutes from "./router/urlRoutes.js"; 
import mongoose from "mongoose";
import 'dotenv/config'

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log('MONGO DB CONNECTED'))
.catch(err => console.error(err));


app.use('/',urlRoutes);

app.listen(5000, ()=> 
{
   console.log("app is listening on port 5000");
})
