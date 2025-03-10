import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js"
import connectToMongoDB from "./DB/mongodb.js";
import messageRoute from "./routes/messageRoute.js";
import conversationRoute from "./routes/conversationRoute.js"
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors"
import { app, server } from "./socket/socket.js";



const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()) //to parse the incoming request with json payloads
app.use(cookieParser()) //to parse the cookies
const corsOptions = {
    origin: ['https://remarkable-otter-6c6e4a.netlify.app',
             'http://localhost:3000'
        ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
}
app.use(cors(corsOptions))


app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/user", userRoute);
app.use("/api/conversation", conversationRoute);



server.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server is running on port ${PORT}`)
});
