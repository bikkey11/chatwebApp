import React, { useEffect, useState } from 'react';
import person1 from "../images/person1.jpg";
import { CiMenuBurger, CiSearch, CiMenuKebab, CiVideoOn, CiVideoOff, CiPhone } from "react-icons/ci";
import { getConversaton } from '../utils/messageApi';
import { useSocketContext } from '../Store/socketContext';
import { searchFriend } from '../utils/userApi';

const FriendCard = ({ friend, setConversation, setSelectedId }) => {
    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(friend._id)

    const FetchConversation = async (friend) => {

        const a = await getConversaton(friend._id);
        setSelectedId(friend)
        setConversation(a)

    }

    return (
        <div className='hover:bg-slate-200 p-2 cursor-pointer mx-2 peoples flex items-center gap-4 md:w-[425px] w-full justify-between pr-6 md:pr-0 ' onClick={() => FetchConversation(friend)}>
            <div className='flex items-center gap-4  '>
                <div className='relative'>
                    <img src={person1} className='h-16 w-16 rounded-full border border-black' alt="Hellow" />
                    <div className={`w-3 h-3 rounded-full bg-red-500 absolute right-1 top-12 ${isOnline ? "online" : "hidden"}`}></div>
                </div>
                <div>
                    <h3 className='font-poppins font-semibold text-base'>{friend.fullname}</h3>
                    <p className='text-sm'>Hellow this is test message</p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center  gap-2'>
                <span className='text-xs'>19.48</span>
                <div className='text-[10px] font-extralight text-white bg-orange-400 h-4 w-4 rounded-full flex items-center justify-center'>1</div>
            </div>
        </div>
    )
}

const FriendsList = ({ friends, setConversation, setSelectedId }) => {
    const [searchquery, setSearchQuery] = useState("")
    const [searchUser, setSearchUser] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault();
        let res
        searchFriend(searchquery).then((ress) => {
            setSearchUser(ress)
        }).catch((err) => {
            console.log(err)
        })
        
    }


    useEffect(() => {

     console.log(searchUser)

    }, [searchUser])
    return (
        <div className='sidebar flex flex-col gap-4 md:w-[450px] w-full  relative h-screen'>
            <form onSubmit={submitHandler} className='w-full  flex items-center gap-8 py-3 focus:border focus:border-black  bg-white px-2 '>

                <input required onChange={(e) => { setSearchQuery(e.target.value) }} className=' w-full  outline-none border-b-2 border-inputfield px-4 py-[13px] placeholder:font-light' placeholder="&#xF002; Search users or start a new chat" type="text" name="search_people" id="search_people" />

            </form>
            <div className='peoplebar flex flex-col gap-3 max-h-[700px] h-full overflow-hidden overflow-y-scroll'>
                {searchUser ? searchUser ? searchUser.map((friend, index) => (
                    <FriendCard key={index} friend={friend} setConversation={setConversation} setSelectedId={setSelectedId} />
                )) : <div /> 
                : friends ? friends.map((friend, index) => (
                    <FriendCard key={index} friend={friend} setConversation={setConversation} setSelectedId={setSelectedId} />
                )) : <div />}
            </div>

        </div>
    )
}

export default FriendsList