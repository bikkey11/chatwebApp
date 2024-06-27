import jwt from "jsonwebtoken";


const generateTokenAndSetCookie = (user_id, res) => {
    const token = jwt.sign({ user_id }, process.env.JWT_SECRET, {
        expiresIn: "15d"
    })
    res.cookie("userToken", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, //in milliseconds
        httpOnly: true, //prevent xss attack 
        sameSite: "strict", //csrf attack
        secure:false  // process.env.NODE_ENV !== "development"
    });


};

export default generateTokenAndSetCookie;