import Conversation from "../models/conversationModel.js";

export const getConversationList = async (req, res) => {
    try {
        const userId = req.user._id;
        // const conversation = await Conversation.find({
        //     members: { $all: [userId] },
        // }).select("-messages");
        const conversation = await Conversation.find({ members: userId }).populate({ path: 'members', select: "-password" }).exec();

        const friendsId = conversation.map((con) => {
            return con.members.filter(member => !member.equals(userId))
        })
        const members = friendsId.reduce((acc, members) => acc.concat(members), []);

        // console.log(members)
        res.status(200).json(members)

    } catch (error) {
        console.log(error)

    }
}

