import { useEffect } from "react";
import { useSocketContext } from "./socketContext"

const ListenMessageHook = ({ setConversation, conversation }) => {
    const { socket } = useSocketContext();
    //  const {message,setMessages}=useConversation();
    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            setConversation([...conversation, newMessage])
        })
        return () => socket?.off("newMessage")
    }, [socket, setConversation, conversation])
}

export default ListenMessageHook










