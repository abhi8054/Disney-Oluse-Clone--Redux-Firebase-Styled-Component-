import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    name:"",
    email:"",
    photo:"",
}

export const userSlice = createSlice({
    name:"users",
    initialState:initialState,
    reducers:{
        login:(state,action)=>{
            state.name = action.payload.name
            state.email = action.payload.email
            state.photo = action.payload.photo
        },

        logout:(state) =>{
            state.name = null
            state.email = null
            state.photo = null
        },
    },
})
export const { login,logout} = userSlice.actions
export default userSlice.reducer;