import React, { useState } from 'react'
import { CiMenuBurger, CiChat1, CiPhone, CiSettings } from 'react-icons/ci';
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { FaArchive } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import person1 from "../images/person1.jpg"
import { IoIosClose } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { Logout } from '../Store/authSlice';


const SideBar = () => {
    const [IssidebarOpen, setIssisebarOpen] = useState(false);
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
    const dispatch=useDispatch()
    const handleLogOut=async()=>{
        await dispatch(Logout());

    }

    return (
        <div>
            <div className='flex flex-col py-4 px-2 border-r items-center text-2xl justify-between h-screen overflow-hidden'>
                <div className='flex flex-col gap-10'>
                    <div className='flex items-center w-full  mt-2  p-1 '>
                        <CiMenuBurger className='cursor-pointer  ' onClick={() => { setIssisebarOpen(!IssidebarOpen) }} />
                    </div>
                    <div className='flex flex-col gap-5 '>
                        <div>

                        </div>
                        <div className='flex items-center w-full gap-10   p-1 '>
                            <CiChat1 className='cursor-pointer  ' />
                            {IssidebarOpen ? <span className='text-xs font-poppins font-extralight'>Chat</span> : <div />}
                        </div>
                        <div className='flex items-center w-full   p-1 gap-10'>
                            <CiPhone className='cursor-pointer  ' />
                            {IssidebarOpen ? <span className='text-xs font-poppins font-extralight'>Phone</span> : <div />}


                        </div>
                        <div className='flex items-center w-full   p-1 gap-10'>
                            <IoCaretBackCircleOutline className='cursor-pointer  ' />
                            {IssidebarOpen ? <span className='text-xs font-poppins font-extralight'>Status</span> : <div />}


                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col gap-4 pb-2 relative'>

                        <div className='flex items-center w-full   p-1 gap-10'>
                            <FaArchive className='cursor-pointer  ' />
                            {IssidebarOpen ? <span className='text-xs font-poppins font-extralight'>Archieve</span> : <div />}


                        </div>
                        <div className='flex items-center w-full   p-1 gap-10'>
                            <CiSettings className='cursor-pointer  ' />
                            {IssidebarOpen ? <span className='text-xs font-poppins font-extralight'>Setting</span> : <div />}


                        </div>
                        <div className='flex items-center w-full   p-1 gap-10'>
                            <IoCaretBackCircleOutline className='cursor-pointer  ' onClick={()=>setProfileMenuOpen(true)}/>
                            {IssidebarOpen ? <span className='text-xs font-poppins font-extralight'>Profile</span> : <div />}


                        </div>
                        {/* <img src="" alt="a"  className='w-5 h-5'/> */}



                    </div>
                </div>
            </div>

            {
                isProfileMenuOpen ?
                    <div className='absolute bottom-2 left-2 h-[400px] bg-slate-200 text-black z-10 p-4 rounded-lg'>

                        <div className='flex flex-col h-full justify-between '>

                            <div className='flex relative'>
                                <img src={person1} className='rounded-full w-20 h-20' alt="" />
                                <IoIosClose onClick={()=>setProfileMenuOpen(false)} className='cursor-pointer absolute text-2xl font-bold -right-4 -top-5'/>

                            </div>
                            <div className='flex items-center justify-between'>
                                <input className='text-2xl font-poppins font-semibold outline-none' disabled value="Bikkey" />
                                <MdEdit className='cursor-pointer' />
                            </div>
                            <div>
                                <h1 className='text-sm font-bold font-poppins'>About</h1>
                                <div className='flex items-center justify-between'>
                                    <input className='text-xs font-poppins w-full ' disabled value="Lorem ipsum dolor sit amet consectetur" />


                                    <MdEdit className='cursor-pointer' />

                                </div>
                            </div>
                            <div>
                                <h1 className='text-sm font-poppins font-bold'>Phone Number</h1>
                                <div className='flex justify-between'>
                                    <input className='text-xs font-poppins' disabled value="9864985844" />
                                    <MdEdit className='cursor-pointer' />


                                </div>
                            </div>
                            <div onClick={handleLogOut}
                             className='bg-buttonlogin w-[100px] text-center p-3 cursor-pointer'>Log out</div>


                        </div>


                    </div> : <div />
            }
        </div>

    )
}

export default SideBar

