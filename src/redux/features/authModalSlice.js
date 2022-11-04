import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modalState: false,
  login: false,
  signup:false
}

export const authModalSlice = createSlice({
  name: 'authModal',
  initialState,
  reducers: {
    showLoginForm: (state, action) => { 
      return { 
        ...state,  
        modalState: true,
        login: true,
        signup:false
      }
    },

    showSignupForm: (state, action) => { 
      return { 
        ...state,  
        modalState: true,
        login: false,
        signup:true
      }
    },

    closeModal: (state, action) => { 
      return { 
        ...state,  
        modalState: false,
        login: false,
        signup:false
      }
    }
  },
})

export const { closeModal, showSignupForm, showLoginForm } = authModalSlice.actions

export default authModalSlice.reducer;