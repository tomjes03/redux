import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/CounterSlice'
import userReducer from '../redux/UserSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer
  },
})