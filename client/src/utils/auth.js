import axios from "axios";

export const Signup = async ({ formData }) => {
  const { fullname, email, password, confirm_password } = formData
  console.log({formData})
  await axios.post(
    "http://localhost:5000/api/auth/register",
    { fullname, email, password, confirm_password }).then((res) => {
      
        return res
      

    }).catch((err) => {
      console.log(err.response.data.error)
       return err
    })
}

