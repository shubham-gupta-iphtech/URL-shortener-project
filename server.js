import express from "express";
import urlRoutes from "./router/urlRoutes.js"; 
import mongoose from "mongoose";
import 'dotenv/config'
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.use(express.json());
app.use(cors()); 

mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log('MONGO DB CONNECTED'))
.catch(err => console.error(err));


app.use('/api',urlRoutes);

const PORT = 5000 || process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'front.html'));
 });
app.listen(PORT, ()=> 
{
   console.log("app is listening on port 5000");
})
