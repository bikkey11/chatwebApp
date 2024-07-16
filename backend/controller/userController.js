import User from "../models/userModel.js";

export const getUser = async (req, res) => {

    try {
        const loggedInUserId = req.user._id;
        const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password")
        res.status(200).json(allUsers)

    } catch (error) {
        console.log("error from the usercontroller", error.message);
        res.status(500).json({ error: "Interal server error occured" })

    }
}

export const searchUser = async (req, res) => {
    try {
        const query = req.query.q
        if(!query){
            return 0
        }  
        const isPhoneNumber = /^\d+$/.test(query);
        let users;

        if (isPhoneNumber) {
            users = await User.find({
                phone: query
            }).select('-password').exec();
        } else {
            console.log("from")
            users = await User.find({
                fullname: new RegExp(query, 'i') // Case-insensitive name search
            }).select('-password').exec();
        }
        if (users.length == 0) {
            res.status(400).json({ error: "User not found" })
        }
        else {
            res.status(200).json(users)


        }




    } catch (error) {
        console.log(error)
    }
}