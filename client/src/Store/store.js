import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Store/authSlice"

export default configureStore({
    reducer: {
        auth: authReducer.reducer,
    }
})