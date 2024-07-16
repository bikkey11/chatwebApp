import axios from "axios";

export const getConversaton = async (_id) => {
    try {
        const res = await axios.get(`http://localhost:5000/api/messages/getChat/${_id}`, { withCredentials: true })
        return res.data

    } catch (error) {
        console.log(error)

    }
}

export const sendMessage = async ( _id,message ) => {
    try {
        console.log(message,_id);
        const res = await axios.post(`http://localhost:5000/api/messages/send/${_id}`, { message }, { withCredentials: true })
    }
    catch (err) {
        console.log(err)
    }
}