import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js"
import connectToMongoDB from "./DB/mongodb.js";
import messageRoute from "./routes/messageRoute.js"
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors"



const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()) //to parse the incoming request with json payloads
app.use(cookieParser()) //to parse the cookies
app.use(cors())

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/user", userRoute);



app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server is running on port ${PORT}`)
});
