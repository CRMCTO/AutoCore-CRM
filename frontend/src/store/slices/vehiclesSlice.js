import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  vehicles: [],
  selectedVehicle: null,
  loading: false,
  error: null,
  pagination: {
    page: 1,
    limit: 20,
    total: 0,
  },
}

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    setVehicles: (state, action) => {
      state.vehicles = action.payload
    },
    addVehicle: (state, action) => {
      state.vehicles.unshift(action.payload)
    },
    updateVehicle: (state, action) => {
      const index = state.vehicles.findIndex(v => v.id === action.payload.id)
      if (index !== -1) {
        state.vehicles[index] = action.payload
      }
    },
    deleteVehicle: (state, action) => {
      state.vehicles = state.vehicles.filter(v => v.id !== action.payload)
    },
    setSelectedVehicle: (state, action) => {
      state.selectedVehicle = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    },
  },
})

export const {
  setVehicles,
  addVehicle,
  updateVehicle,
  deleteVehicle,
  setSelectedVehicle,
  setLoading,
  setError,
} = vehiclesSlice.actions
export default vehiclesSlice.reducer
