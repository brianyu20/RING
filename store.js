import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {},
})
//This creates a Redux store, and also automatically configure the Redux DevTools extension 
//so that you can inspect the store while developing.