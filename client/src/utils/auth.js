import React from 'react'
import axios from "axios"
export const Signup = async ({ formData }) => {
  const { fullname, email, password, confirm_password } = formData
  await axios.post(
    "http://localhost:5000/api/auth/register",
    { fullname, email, password, confirm_password }).then((res) => {
      console.log(res)
    })
}

