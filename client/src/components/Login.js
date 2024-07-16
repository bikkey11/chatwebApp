import React, { useState, useEffect } from 'react';
import chatImg from "../images/loginPageImg.png";
import googlePng from "../images/google.png";
import facebookPng from "../images/facebook.png"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterOrAuth } from '../Store/authSlice';



const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.auth)
    const [formData, setFormData] = useState({ email: "", password: "", controller: "login" })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(RegisterOrAuth({ formData }));
        

    }
    const checkKeyDown = (e) => {
        if (e.key === 'Enter') e.preventDefault();
    };
    useEffect(() => {
        if (currentUser.sucess === false && currentUser.errorMessage) {
            console.log(currentUser.errorMessage);
            setFormData({ email: "", password: "", controller: "login" })

        }
        else if(currentUser.sucess===true){
            window.alert("Logged In sucessfully");
            setFormData({ email: "", password: "", controller: "login" })
            navigate("/")


        }


    }, [dispatch, currentUser])

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className='grid grid-cols-2'>

                <img src={chatImg} className='h-[480px] w-[480px]' alt="Image" />
                <form action="" className=' font-poppins flex flex-col gap-3'>
                    <h1 className='text-3xl font-bold mb-8'>Create your Account</h1>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor="email" className='text-loginLabel'>Email</label>
                        <input onChange={handleChange} type="text" name='email' value={formData.email} className='text-fortText outline-none rounded-lg bg-inputfield px-5 py-3 text-sm' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="password" className='text-loginLabel'>Password</label>
                        <input onChange={handleChange} type="password"  value={formData.password} name='password' className='text-fortText outline-none rounded-lg bg-inputfield px-5 py-3 text-sm' />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <div className='flex justify-center' >
                            <button onClick={handleSubmit} onKeyDown={(e) => checkKeyDown(e)} className='bg-buttonlogin px-4 rounded-lg py-2'>Log In</button>
                        </div>
                        <p className='text-loginLabel text-sm'>Create a new account? <span onClick={() => { navigate("/register") }} className='text-black cursor-pointer'>Sign up</span></p>
                    </div>
                    <div >
                        <div className='flex justify-center font-extrabold text-lg'>
                            - OR -
                        </div>
                        <div className='flex  justify-between mt-5'>
                            <button className='border border-black  p-2 rounded-xl flex items-center gap-2'><img src={googlePng} className='h-8 w-8' alt="google" /> <span className='text-sm text-fortText' >Login In with Google</span> </button>
                            <button className='border border-black p-2 rounded-xl flex items-center gap-2'><img src={facebookPng} className='h-8 w-8' alt="google" /> <span className='text-sm text-fortText' >Login In with Facebook</span> </button>

                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login