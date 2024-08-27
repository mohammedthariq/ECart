import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
            //actions
            
            
            //addtocart
             addToCart:(state,action)=>{
                state.push(action.payload)
             }, 
            // remove cart
            removeCart:(state,action)=>{
                console.log("Removing item with ID:", action.payload);
                return state.filter(i=>i.id!=action.payload);
            },
            cartClear:(state)=>{
                return state=[]
            }


    }
})


export default cartSlice.reducer
export const {addToCart,removeCart,cartClear}=cartSlice.actions 