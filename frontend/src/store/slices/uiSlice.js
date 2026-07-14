import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  language: localStorage.getItem('language') || 'uk', // uk or ru
  darkMode: localStorage.getItem('darkMode') === 'true' || false,
  sidebarOpen: true,
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
    setLanguage: (state, action) => {
      state.language = action.payload
      localStorage.setItem('language', action.payload)
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
  setLanguage,
  addNotification,
  removeNotification,
} = uiSlice.actions
export default uiSlice.reducer
