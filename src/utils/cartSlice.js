import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items: []
    },
    reducers: {
        addCart: (state, action) => {
            // {payload: "item-name"}
            state.items.push(action.payload)
        },
        removeCart: (state, action) => {
            let i = state.items.indexOf((el) => el.name == action.payload)
            state.items.splice(i,1)
        },
        clearCart: (state) => {
            state.items.length = 0
        }

    }
})

export const {addCart, removeCart, clearCart} = cartSlice.actions 
export default cartSlice.reducer