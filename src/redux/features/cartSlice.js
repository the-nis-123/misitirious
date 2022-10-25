import { createSlice } from '@reduxjs/toolkit'

const initialState = {cart:[]}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //increasing the quantity of a given product in the cart
    increment: (state, action) => {
      const index = state.cart.findIndex(elem => elem.id === action.payload);
      return {
        ...state, 
        cart: [ 
          ...state.cart.slice(0, index),
          {
            ...state.cart[index], 
            count : state.cart[index].count + 1
          },
          ...state.cart.slice(index + 1)
        ]
      }
    },

    //reducing the quantity of a given product in the cart
    decrement: (state, action) => { 
      const index = state.cart.findIndex(elem => elem.id === action.payload);
      return {
        ...state, 
        cart: [ 
          ...state.cart.slice(0, index),
          {
            ...state.cart[index], 
            count : state.cart[index].count - 1
          },
          ...state.cart.slice(index + 1)
        ]
      }
    },

    //removing product from cart
    removeFromCart: (state, action) => { 
      const index = state.cart.findIndex(elem => elem.id === action.payload);
      if(index === -1 ){ return state }

      if(state.cart.length < 2 && index !== -1) {
        return {...state, cart:[]};
      }

      const newCart = [...state.cart.slice(0, index), ...state.cart.slice(index + 1)];
      return { ...state, cart: newCart}
    },

    //adding new product to cart
    addToCart: (state, action) => { 
      const alreadyAdded = state.cart.some(elem => elem.id === action.payload.id);

      if(alreadyAdded){ return state }
      return { ...state, cart: [...state.cart, action.payload ]}
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, removeFromCart, addToCart } = cartSlice.actions

export default cartSlice.reducer