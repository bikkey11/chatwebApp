import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        default:"Male",
        enum: ["Male", "Female", "Others"]
    },
    profile_pic: {
        type: String,
        default:""
    },
    phone: {
        type: Number,
        default:""

    }

},{timestamps:true});

const User = mongoose.model("User", userSchema);
export default User;