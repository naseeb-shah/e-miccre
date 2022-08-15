
import Cart from './cart'
import Auth from './auth';
import { configureStore } from "@reduxjs/toolkit";


export default  configureStore({
    reducer:{
Cart:Cart,
Auth:Auth,
    }
})