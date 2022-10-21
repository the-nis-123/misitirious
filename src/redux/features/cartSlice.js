import { createSlice } from '@reduxjs/toolkit'

const initialState = []
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, action) => {},
    decrement: (state, action) => { },
    removeFromcart: (state, action) => { state.value += action.payload },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, removeFromcart } = cartSlice.actions

export default cartSlice.reducer