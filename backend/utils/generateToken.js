import jwt from "jsonwebtoken";


const generateTokenAndSetCookie = (user_id, res) => {
    const token = jwt.sign({ user_id }, process.env.JWT_SECRET, {
        expiresIn: "15d"
    })
    res.cookie("userToken", token, {
        httpOnly: true, // The cookie is inaccessible to JavaScript's Document.cookie API; it's only sent to the server.
        secure: true, // The cookie is only sent over HTTPS.
        sameSite: 'None', // The cookie is sent with cross-origin requests.
        maxAge: 24 * 60 * 60 * 1000, // The cookie will be removed after 24 hours.
        path: '/', // The path where the cookie is accessible.
    });


};

export default generateTokenAndSetCookie;
