import Conversation from "../models/conversationModel.js";
import Message from "../models/messageMode.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            members: { $all: [senderId, receiverId] }
        })

        if (!conversation) {
            conversation = await Conversation.create({
                members: [senderId, receiverId]
            });
        };

        const newMessage = new Message({
            senderId,
            receiverId,
            message,

        });
        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }
        // await conversation.save();
        // await newMessage.save();
        await Promise.all([conversation.save(), newMessage.save()])

        res.status(201).json(newMessage);




    } catch (error) {
        console.log("error occured in sendMessageController", error.message);
        res.status(500).json({ error: "Internal server occured" });

    }
}

// get messages
export const getMessage = async (req, res) => {
    try {
        const { id: friendId } = req.params;
        const senderId = req.user._id;

        const conversation =await Conversation.findOne({
            members: { $all: [senderId, friendId] },
        }).populate("messages");//not reference to message but actual messages using populate

        if (!conversation) {
            return res.status(200).json([])
        }

        const messages = conversation.messages;
        res.status(200).json(messages)


    } catch (error) {
        console.log("Error occured from get message", error.message);
        res.status(500).json({ error: "Internal server occured" })

    }
}