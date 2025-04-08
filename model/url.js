import mongoose from "mongoose";

export const urlSchema = new mongoose.Schema({
   longUrl: String,
   shortUrl: String, 
   urlCode: String,
   createdAt: {type: Date, default: Date.now}
});

const Url = mongoose.model("url", urlSchema);

export default Url;
