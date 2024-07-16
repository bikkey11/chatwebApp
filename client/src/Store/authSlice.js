import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const RegisterOrAuth = createAsyncThunk(
    "auth/RegisterOrAuth",
    async ({ formData }, { getState, rejectWithValue }) => {

        const { controller } = formData
        if (controller === 'register') {


            try {
                const { fullname, email, password, confirm_password } = formData


                const res = await axios.post(
                    "http://localhost:5000/api/auth/register",
                    { fullname, email, password, confirm_password })

                return res.data;
            } catch (error) {
                console.log(error)
                return rejectWithValue(error.response.data.error);
            }
        }
        else {
            try {
                const { email, password } = formData


                const res = await axios.post(
                    "http://localhost:5000/api/auth/login",
                    { email, password },
                    {
                        withCredentials: true
                    })

                return res.data;
            } catch (error) {
                console.log(error)
                return rejectWithValue(error.response.data.error);
            }
        }
    }
);
export const Logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/logout', {}, {
                withCredentials: true,
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);




const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "",
    loading: false,
    isLoggedIn: localStorage.getItem("user") ?true:false,
    sucess: false,
    errorMessage: "",
}

const AuthSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(RegisterOrAuth.pending, (state, action) => {
                state.loading = true
            })
            .addCase(RegisterOrAuth.fulfilled, (state, action) => {
                state.loading = false
                state.isLoggedIn = true
                state.user = action.payload
                state.sucess = true
                state.errorMessage = ""
                localStorage.setItem("user", JSON.stringify(action.payload));
            })
            .addCase(RegisterOrAuth.rejected, (state, action) => {
                state.loading = false
                state.isLoggedIn = false
                state.errorMessage = action.payload
                state.sucess = false
            })
            .addCase(Logout.pending, (state, action) => {
                state.loading = true
            })
            .addCase(Logout.fulfilled, (state, action) => {
                state.loading = false
                state.isLoggedIn = false
                state.user = null
                state.sucess = false
                state.errorMessage = ""
                localStorage.clear()

            })
            .addCase(Logout.rejected, (state, action) => {
                state.loading = false
                state.isLoggedIn = false
                state.errorMessage = "logout failed"
                state.sucess = false
            })

    }

});

export default AuthSlice;
