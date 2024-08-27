import { createSlice } from "@reduxjs/toolkit";



const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{

        addToWishlist:(state,action)=>{
            console.log("Added item:", action.payload);
            state.push(action.payload);
        },
        removeFromWishlist:(state,action)=>{
            console.log("Removing item with ID:", action.payload);
          return  state.filter(i=>i.id !== action.payload);
        }
    }
})


export default wishlistSlice.reducer
export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions


