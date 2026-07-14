import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidebarOpen: true,
  darkMode: localStorage.getItem('darkMode') === 'true' || false,
  notifications: [],
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode
      localStorage.setItem('darkMode', state.darkMode)
    },
    addNotification: (state, action) => {
      state.notifications.push({
        id: Date.now(),
        ...action.payload,
      })
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter(
        n => n.id !== action.payload
      )
    },
  },
})

export const {
  toggleSidebar,
  toggleDarkMode,
  addNotification,
  removeNotification,
} = uiSlice.actions
export default uiSlice.reducer
