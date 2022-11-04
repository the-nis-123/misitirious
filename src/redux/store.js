import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { misitiriousApi } from './misitiriousApi';
import cartReducer from './features/cartSlice';
import productReducer from './features/productSlice';
import  authModalReducer  from './features/authModalSlice';

const store = configureStore({
  reducer: {
    [misitiriousApi.reducerPath]: misitiriousApi.reducer,
    cart: cartReducer,
    product: productReducer,
    authModal: authModalReducer
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(misitiriousApi.middleware),
})

setupListeners(store.dispatch);

export default store;