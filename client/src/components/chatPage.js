import React, { useEffect, useRef, useState } from 'react';
import { IoMdSend, IoIosAttach } from "react-icons/io";
import { MdEmojiEmotions } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";
import person1 from "../images/person1.jpg"
import { CiSearch, CiMenuKebab, CiVideoOn, CiPhone } from "react-icons/ci";
import { getConversaton, sendMessage } from '../utils/messageApi';
import ListenMessageHook from '../Store/listenMessageHook';


const ChatPage = ({ selectedId, conversation, setConversation }) => {
  const [message, setMessage] = useState("");
  const lastMessageRef = useRef();
  ListenMessageHook({ setConversation, conversation })


  const handleSendMessage = async () => {
    const messages = message
    setMessage("")
    await sendMessage(selectedId._id, messages);
    console.log("hell")
  }

  useEffect(() => {
    console.log(conversation)


    setTimeout(() => {


      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100);
  }, [conversation])



  return (
    <div className=' w-full  flex flex-col gap-4  border-r relative bg-blue-300 h-screen overflow-hidden'>
      <div className='w-full justify-between flex items-center  py-3  bg-white px-2 '>
        <div className='flex gap-2'>
          <img src={person1} className='w-10 h-10 rounded-full' alt="" />
          <div className='flex flex-col  justify-center'>
            <h3 className='text-base font-poppins font-semibold'>{selectedId.fullname}</h3>
            <span className='text-[10px] font-poppins'>last seen 5 min ago</span>
          </div>
        </div>
        <div className='flex items-center text-3xl gap-4'>
          <CiSearch className='cursor-pointer text-fortText hover:text-4xl' />
          <CiPhone className='cursor-pointer text-fortText hover:text-4xl' />
          <CiVideoOn className='cursor-pointer text-fortText hover:text-4xl' />
          <CiMenuKebab className='cursor-pointer text-fortText hover:text-4xl' />

        </div>
      </div>

      <div className='flex flex-col justify-between h-full relative '>
        <div className='chatPage peoplebar flex flex-col gap-3 max-h-[550px]    overflow-hidden overflow-y-scroll'>
          {
            conversation ? conversation.map((message, index) => (
              <div ref={lastMessageRef} key={index} className={`flex w-full  px-4 ${message.receiverId === selectedId._id ? 'justify-end' : 'justify-start'}`}>
                <div className='flex flex-col gap-1'>
                  <div className='flex items-center  gap-2'>

                    {message.receiverId !== selectedId._id ? <img src={person1} className='h-8 w-8 rounded-full' alt="" /> : <div />}
                    <div className={`max-w-80 rounded-xl ${message.receiverId === selectedId._id ? 'bg-blue-500' : 'bg-slate-300'}`}><div className='p-2 text-sm '> {message.message}</div></div>
                  </div>
                  <span className={`flex w-full text-[8px]  ${message.receiverId === selectedId._id ? 'justify-end' : 'justify-start'}`}>11:12 AM</span>


                </div>
              </div>
            )) : <div />
          }
        </div>
        <div className=' flex justify-center items-center pb-4  text-fortText'>
          <IoIosAttach className='bg-white  py-2 text-[40px] rounded-l-lg cursor-pointer' />
          <AiFillPicture className='bg-white  py-2 text-[40px]  cursor-pointer' />
          <MdEmojiEmotions className='bg-white  py-2 text-[40px] cursor-pointer' />
          <input placeholder='Message' size={60} type="text" className='text-black font-poppins bg-white px-4 py-2 outline-none' value={message} onChange={(e) => { setMessage(e.target.value) }} />
          <IoMdSend className='bg-white  py-2 text-[40px] rounded-r-lg cursor-pointer' onClick={() => {
            handleSendMessage()
          }} />

        </div>
      </div>

    </div>
  )
}

export default ChatPage