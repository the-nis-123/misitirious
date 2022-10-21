import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { misitiriousApi } from './misitiriousApi';
import cartReducer from './features/cartSlice';
import productReducer from './features/productSlice';

const store = configureStore({
  reducer: {
    [misitiriousApi.reducerPath]: misitiriousApi.reducer,
    cart: cartReducer,
    product: productReducer
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(misitiriousApi.middleware),
})

setupListeners(store.dispatch);

export default store;