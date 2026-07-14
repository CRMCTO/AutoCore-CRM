import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import CustomersPage from './pages/Customers'
import VehiclesPage from './pages/Vehicles'
import OrdersPage from './pages/Orders'
import EmployeesPage from './pages/Employees'
import ServicesPage from './pages/Services'
import PaymentsPage from './pages/Payments'
import ReportsPage from './pages/Reports'
import SettingsPage from './pages/Settings'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
