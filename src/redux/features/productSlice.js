import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSaved: false,
  isInWishList: false,
  isInCart: false,
  isLiked: false
}

export const cartSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToSavedProducts: (state, action) => {  },
    addToLikedProducts: (state, action) => {  },
    addToWishlist: (state, action) => {  }
  },
})

// Action creators are generated for each case reducer function
export const { addToSavedProducts, addToLikedProducts, addToWishlist } = cartSlice.actions

export default cartSlice.reducer;