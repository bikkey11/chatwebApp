import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies?.userToken;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No Token Provided" })
        };
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - Invalid Token" })
        };
        const user = await User.findById(decoded.user_id).select("-password");
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        };
        req.user = user;
        next();

    } catch (error) {
        console.log("error occured in protected route", error.message);
        res.status(500).json({ error: "Internal server occured" })

    };
};

export default protectRoute