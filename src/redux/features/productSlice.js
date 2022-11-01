import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeProduct:{}
}

export const cartSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    showProductDetails: (state, action) => { 
      return { ...state, activeProduct: action.payload }
    }
  },
})

export const { showProductDetails } = cartSlice.actions

export default cartSlice.reducer;