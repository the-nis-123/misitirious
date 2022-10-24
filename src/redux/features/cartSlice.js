import { createSlice } from '@reduxjs/toolkit'

const initialState = {cart:[]}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, action) => {},
    decrement: (state, action) => { },

    removeFromCart: (state, action) => { 
      const index = state.cart.indexOf(action.payload.id);
      const newCart = [...state.cart.slice(0, index), ...state.cart.slice(index + 1)];
      return { ...state, cart: newCart}
    },

    addToCart: (state, action) => { 
      if(!state.cart.includes(action.payload.id)){
          return { ...state, cart: [...state.cart, action.payload.id ]}
      }

      return state;
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, removeFromCart, addToCart } = cartSlice.actions

export default cartSlice.reducer