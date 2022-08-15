

import { createSlice } from "@reduxjs/toolkit";

const  Auth=createSlice({
    name:'Auth'
    ,
initialState:{
    value:false
},
reducers:{
     login:(state,action)=>{
        state.value=action.payload
     },
     logout:(state)=>{
        state.value=false
     }
}
})


export const{login,logout}=Auth.actions
export default Auth.reducer