import { Server } from "socket.io";
import http from 'http';
import express from "express";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ['https://6695f44ff619af922c4dcb29--prismatic-blini-51bf7a.netlify.app'],
        methods: ["GET", "POST"]
    }
});

export const getReceiverSocketId=(receiverId)=>{
    return userSocketMap[receiverId]
}

const userSocketMap = {};
io.on("connection", (socket) => {
    console.log('a user connected', socket.id)
    const userId = socket.handshake.query.userId;
    if (userId != 'undefined') userSocketMap[userId] = socket.id;
    io.emit("getOnlineUsers", Object.keys(userSocketMap)) //send events to all the connected clients
})
io.on("disconnect", (socket) => {
    console.log('user disconnected', socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
})

export { app, io, server }
