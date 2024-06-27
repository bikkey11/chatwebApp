import mongoose from "mongoose";

const conversatonModel = new mongoose.Schema({
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: []
        }
    ]

}, { timestamps: true });

const Conversation = mongoose.model("Conversation", conversatonModel);
export default Conversation