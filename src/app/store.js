import { configureStore } from '@reduxjs/toolkit'
import timeSliceReducer from "./timeSliceReducer"
import dataSliceReducer from './dataSliceReducer'

export default configureStore({
  reducer: {
    timeSlice: timeSliceReducer,
    dataSlice: dataSliceReducer
  },
})