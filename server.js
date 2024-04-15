import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
const port = 8000;
dotenv.config();

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

app.post("/gemini", async (req,res) => {
    const data = req.body;
    console.log(data.history);
    console.log(data.message);

    const model = genAI.getGenerativeModel({model : "gemini-pro"});

    const chat = model.startChat({
        history : data.history 
    })

    const msg = data.message;

    const result = await chat.sendMessage(msg);
    const response = result.response;
    res.json(response.text());

})

app.listen(port, () => {
    console.log(`App Server running on port ${port}.`);
})