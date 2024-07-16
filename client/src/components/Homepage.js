import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import ChatPage from './chatPage';
import FriendsList from './friendsList';
import SideBar from './sideBar';
import { getAllFriends } from '../utils/userApi';



const Homepage = () => {
  const navigate = useNavigate();
  const state = useSelector(state => state.auth);
  const [friends, setFriends] = useState("");
  const [selectedId, setSelectedId] = useState("")
  const [conversation, setConversation] = useState("");




  useEffect(() => {
    const getFriends = async () => {
      const res = await getAllFriends();
      setFriends(res?.data)
    }
    getFriends()


  }, [])


  if (!state.isLoggedIn)
    return <Navigate to="/login" />

  return (
    <div className='mx-2  h-screen '>
      <div className='flex'>
        <SideBar />
        <FriendsList friends={friends} setSelectedId={setSelectedId} setConversation={setConversation} />
        <div className='w-full hidden md:block'>
          <ChatPage selectedId={selectedId} conversation={conversation} setConversation={setConversation} />
        </div>




      </div>
    </div>

  )
}

export default Homepage