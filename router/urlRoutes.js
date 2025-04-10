import express from "express"
import Url from "../model/url.js";
import { nanoid } from "nanoid";
const router = express.Router();

router.post('/shorten', async (req, res)=> 
{
    const { urlReceived} = req.body;
    const longUrl = urlReceived.trim();
    const existing = await Url.findOne({ longUrl });
    if(existing) return res.json({message: "This url is already shortened."});

    const BASE_URL = process.env.BASE_URL;
    const urlCode = nanoid(7);
    const shortUrl = `${BASE_URL}/${urlCode}`;

    const url = new Url({longUrl, shortUrl, urlCode});
    await url.save();

    res.json({message: `${shortUrl}`});
})

router.get('/:code', async (req,res) => {
    
    const urlCode = req.params.code;
    const url = await Url.findOne({urlCode});
    if(url) return res.redirect(url.longUrl);
    res.status(404).json({message: "url not found"});
});

export default router;