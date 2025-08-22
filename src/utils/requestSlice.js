import { createSlice } from "@reduxjs/toolkit";

const requestSlice=createSlice({
    name:"requests",
    initialState:[],
    reducers:{
        addrequests:(state,action)=>action.payload,
        removerequests:(state,action)=>{
            const newArray=state.filter(r=>r._id !== action.payload)
            return newArray
        }
    },
})
export const{addrequests,removerequests}=requestSlice.actions
export default requestSlice.reducer