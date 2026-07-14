import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import customersReducer from './slices/customersSlice'
import ordersReducer from './slices/ordersSlice'
import vehiclesReducer from './slices/vehiclesSlice'
import uiReducer from './slices/uiSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    customers: customersReducer,
    orders: ordersReducer,
    vehicles: vehiclesReducer,
    ui: uiReducer,
  },
})

export default store
