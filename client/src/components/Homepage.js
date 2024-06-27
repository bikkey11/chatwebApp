import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CiMenuBurger, CiSearch, CiMenuKebab, CiVideoOn, CiVideoOff, CiPhone } from "react-icons/ci";
import person1 from "../images/person1.jpg";
import { IoMdSend,IoIosAttach } from "react-icons/io";
import { MdEmojiEmotions } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";

const PeopleSidebar = ({ people }) => {
  return (
    <div className='hover:bg-slate-200 p-2 cursor-pointer mx-2 peoples flex items-center gap-4 w-[425px] justify-between'>
      <div className='flex items-center gap-4'>
        <img src={people.profile_pic} className='h-16 w-16 rounded-full border border-black' alt="Hellow" />
        <div>
          <h3 className='font-poppins font-semibold text-base'>{people.name}</h3>
          <p className='text-sm'>{people.message}</p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center  gap-2'>
        <span className='text-xs'>19.48</span>
        <div className='text-[10px] font-extralight text-white bg-orange-400 h-4 w-4 rounded-full flex items-center justify-center'>1</div>
      </div>
    </div>
  )
}

const Homepage = () => {
  const navigate = useNavigate();

  const peoples = [{
    "profile_pic": person1,
    "name": "Chatgram",
    "message": "hey i am comming"
  }, {
    "profile_pic": person1,
    "name": "Ram",
    "message": "fuck you bro "

  }, {
    "profile_pic": person1,
    "name": "Shyam",
    "message": "Lets go to watch movie"
  },
  {
    "profile_pic": person1,
    "name": "Chatgram",
    "message": "hey i am comming"
  }, {
    "profile_pic": person1,
    "name": "Ram",
    "message": "fuck you bro "

  }, {
    "profile_pic": person1,
    "name": "Shyam",
    "message": "Lets go to watch movie"
  },
  {
    "profile_pic": person1,
    "name": "Chatgram",
    "message": "hey i am comming"
  }, {
    "profile_pic": person1,
    "name": "Ram",
    "message": "fuck you bro "

  }, {
    "profile_pic": person1,
    "name": "Shyam",
    "message": "Lets go to watch movie"
  },
  {
    "profile_pic": person1,
    "name": "Chatgram",
    "message": "hey i am comming"
  }, {
    "profile_pic": person1,
    "name": "Ram",
    "message": "fuck you bro "

  }, {
    "profile_pic": person1,
    "name": "Shyam",
    "message": "Lets go to watch movie"
  }
  ]



  return (
    <div className='mx-2  h-screen '>
      <div className='flex'>
        {/* first */}
        <div className='sidebar flex flex-col gap-4 w-[450px]  relative h-screen'>
          <div className='w-full  flex items-center gap-8 py-3 border-b border-slate-300  bg-white px-2 '>
            <CiMenuBurger className='text-3xl text-fortText' />
            <div className='flex items-center  '>
              <label htmlFor="search_people"><CiSearch className='text-fortText text-3xl' /></label>
              <input className='rounded-lg outline-inputfield   px-4 py-2 placeholder:' placeholder='Search' type="text" name="search_people" id="search_people" />
            </div>
          </div>
          <div className='peoplebar flex flex-col gap-3 max-h-[700px] h-full overflow-hidden overflow-y-scroll'>
            {peoples.map((people, index) => (
              <PeopleSidebar key={index} people={people} />
            ))}
          </div>

        </div>


        {/* seconds */}

        <div className=' w-full sidebar flex flex-col gap-4  border-r relative bg-blue-300 h-screen justify-between'>
          <div className='w-full justify-between flex items-center  py-3  bg-white px-2 '>
            <div className='flex gap-2'>
              <img src={person1} className='w-10 h-10 rounded-full' alt="" />
              <div className='flex flex-col  justify-center'>
                <h3 className='text-base font-poppins font-semibold'>David More</h3>
                <span className='text-[10px] font-poppins'>last seen 5 min ago</span>
              </div>
            </div>
            <div className='flex items-center text-3xl gap-4'>
              <CiSearch    className='cursor-pointer text-fortText hover:text-4xl' />
              <CiPhone     className='cursor-pointer text-fortText hover:text-4xl' />
              <CiVideoOn   className='cursor-pointer text-fortText hover:text-4xl' />
              <CiMenuKebab className='cursor-pointer text-fortText hover:text-4xl'  />

            </div>
          </div>
          <div className='peoplebar flex flex-col gap-3 max-h-[650px]     overflow-hidden overflow-y-scroll'>

          </div>
          <div className=' flex justify-center items-center pb-4  text-fortText'>
            <IoIosAttach className='bg-white  py-2 text-[40px] rounded-l-lg cursor-pointer'/>
            <AiFillPicture className='bg-white  py-2 text-[40px]  cursor-pointer'/>
            <MdEmojiEmotions className='bg-white  py-2 text-[40px] cursor-pointer'/>
            <input placeholder='Message' size={60} type="text" className= 'text-black font-poppins bg-white px-4 py-2 outline-none' />
            <IoMdSend className='bg-white  py-2 text-[40px] rounded-r-lg cursor-pointer'/>

          </div>

        </div>

      </div>
    </div>

  )
}

export default Homepage