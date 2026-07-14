import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  orders: [],
  selectedOrder: null,
  loading: false,
  error: null,
  pagination: {
    page: 1,
    limit: 20,
    total: 0,
  },
  filters: {
    status: 'all',
    dateFrom: null,
    dateTo: null,
  },
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload
    },
    addOrder: (state, action) => {
      state.orders.unshift(action.payload)
    },
    updateOrder: (state, action) => {
      const index = state.orders.findIndex(o => o.id === action.payload.id)
      if (index !== -1) {
        state.orders[index] = action.payload
      }
    },
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter(o => o.id !== action.payload)
    },
    setSelectedOrder: (state, action) => {
      state.selectedOrder = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
    setPagination: (state, action) => {
      state.pagination = action.payload
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload }
    },
  },
})

export const {
  setOrders,
  addOrder,
  updateOrder,
  deleteOrder,
  setSelectedOrder,
  setLoading,
  setError,
  setPagination,
  setFilters,
} = ordersSlice.actions
export default ordersSlice.reducer
