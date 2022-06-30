import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slicers/userSlice"
import movieReducer from "./Slicers/movieSlice"


const store = configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer,
    }
}) 

export default store;