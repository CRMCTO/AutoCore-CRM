import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  customers: [],
  selectedCustomer: null,
  loading: false,
  error: null,
  pagination: {
    page: 1,
    limit: 20,
    total: 0,
  },
  filters: {
    search: '',
    status: 'all',
  },
}

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    setCustomers: (state, action) => {
      state.customers = action.payload
    },
    addCustomer: (state, action) => {
      state.customers.unshift(action.payload)
    },
    updateCustomer: (state, action) => {
      const index = state.customers.findIndex(c => c.id === action.payload.id)
      if (index !== -1) {
        state.customers[index] = action.payload
      }
    },
    deleteCustomer: (state, action) => {
      state.customers = state.customers.filter(c => c.id !== action.payload)
    },
    setSelectedCustomer: (state, action) => {
      state.selectedCustomer = action.payload
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
  setCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
  setSelectedCustomer,
  setLoading,
  setError,
  setPagination,
  setFilters,
} = customersSlice.actions
export default customersSlice.reducer
