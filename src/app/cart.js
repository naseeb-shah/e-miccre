
import { createSlice } from "@reduxjs/toolkit";


export const Cart=createSlice({
    name:"cart",
    initialState:{
        value:[]
    }
    ,
    reducers:{
        additem:(state,action)=>{
            var prepro=false
            state.value.forEach(e=> {
                if(e._id===action.payload._id){
                    e.quantity=action.payload.quantity
                    prepro=true
                }
                
            });
            if(!prepro)
          state.value.push(action.payload)
        },
        deleteitme:(state,action)=>{
            state.value.splice(action.payload,1)
        }

    }
})

export const {additem,deleteitme}=Cart.actions
export default Cart.reducer