import { error } from "console";
import User from "../models/userModel.js";
import bcryptjs from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js";

// login function
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isPasswordCorrect = await bcryptjs.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            res.status(400).json({ error: "Invalid email or password" })
        }
        else {
            generateTokenAndSetCookie(user._id, res);
            res.status(200).json({
                _id: user._id,
                fullname: user.fullname,
                emai: user.email
            })

        }





    } catch (error) {
        console.log("Error in signIn controller", error.message);
        res.status(500).json({ error: "Internal Server Error" })

    }
};


// logout function

export const logout = async (req, res) => {
    try {
        res.cookie("userToken", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out sucessfully" })

    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ error: "Internal server occured" });

    }
}


// register function
export const Register = async (req, res) => {
    try {
        const { fullname, email, password, confirm_password } = req.body;
        if (password !== confirm_password) {
            return res.status(400).json({ error: "Passwords doesn't match" });
        }

        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ error: "Email already used, login instead" });
        }
        // hash the password
        const salt = await bcryptjs.genSalt(10);
        const hasedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({ fullname, email, password: hasedPassword });


        if (newUser) {
            // generate token
            generateTokenAndSetCookie(newUser.user_id, res)
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullname: fullname,
                email: email
            });

        }
        else {
            res.status(400).json({ error: "Invalid user data" })
        }

    } catch (error) {
        console.log("Error in signup controller", error.message)
        res.status(500).json({ error: "Internal Server Error Occured" })

    }

}