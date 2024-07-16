import axios from "axios";

export const getAllUser = async () => {
    try {
        const res = await axios.get("http://localhost:5000/api/user/getUser", { withCredentials: true })
        return res
        console.log(res)

    } catch (error) {
        console.log(error)


    }
}

export const searchFriend = async (searchquery) => {
    try {
        console.log(searchquery)
        const res = await axios.get(`http://localhost:5000/api/user/searchUser?q=${searchquery}`, { withCredentials: true })
        return res.data


    } catch (error) {
        console.log(error.response.data)

    }
}

export const getAllFriends = async () => {
    try {
        const res = await axios.get("http://localhost:5000/api/conversation/getConversationList", { withCredentials: true })
        return res
        console.log(res)

    } catch (error) {
        console.log(error)

    }
}