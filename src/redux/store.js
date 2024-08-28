import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";
import productSlice from "./productSlice";
import { configureStore } from "@reduxjs/toolkit";


const store=configureStore({
    reducer:{
        cartSlice,wishlistSlice,productSlice
    }
})

export default store