import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  BarChart3,
  Users,
  Car,
  Wrench,
  ClipboardList,
  DollarSign,
  Calendar,
  Settings,
  Menu,
  X,
  LogOut,
} from 'lucide-react'
import { toggleSidebar } from '../store/slices/uiSlice'
import { logout } from '../store/slices/authSlice'
import { useTranslate } from '../hooks/useTranslate'

const Sidebar = () => {
  const dispatch = useDispatch()
  const { sidebarOpen } = useSelector(state => state.ui)
  const location = useLocation()
  const t = useTranslate()
  const [expandedMenu, setExpandedMenu] = useState(null)

  const menuItems = [
    { icon: BarChart3, label: t('sidebar.dashboard'), path: '/', exact: true },
    { icon: Users, label: t('sidebar.customers'), path: '/customers' },
    { icon: Car, label: t('sidebar.vehicles'), path: '/vehicles' },
    { icon: ClipboardList, label: t('sidebar.orders'), path: '/orders' },
    { icon: Wrench, label: t('sidebar.services'), path: '/services' },
    { icon: Calendar, label: t('sidebar.employees'), path: '/employees' },
    { icon: DollarSign, label: t('sidebar.payments'), path: '/payments' },
    { icon: BarChart3, label: t('sidebar.reports'), path: '/reports' },
  ]

  const isActive = (path, exact = false) => {
    if (exact) return location.pathname === path
    return location.pathname.startsWith(path)
  }

  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => dispatch(toggleSidebar())}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:relative top-0 left-0 h-screen bg-slate-900 text-white transition-all duration-300 z-30 ${
          sidebarOpen ? 'w-64' : 'w-0 lg:w-20'
        } overflow-hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-slate-700">
            <div className={`flex items-center gap-3 ${ sidebarOpen ? '' : 'hidden'}`}>
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center font-bold">
                AC
              </div>
              <span className="font-bold text-lg">AutoCore</span>
            </div>
            <button
              onClick={() => dispatch(toggleSidebar())}
              className="lg:hidden p-2 hover:bg-slate-800 rounded"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            {menuItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.path, item.exact)
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => !sidebarOpen && dispatch(toggleSidebar())}
                  className={`flex items-center gap-4 px-6 py-3 transition-colors ${
                    active
                      ? 'bg-blue-600 text-white border-l-4 border-blue-400'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <Icon size={20} />
                  <span className={sidebarOpen ? '' : 'hidden'}>{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="border-t border-slate-700 p-4 space-y-2">
            <Link
              to="/settings"
              className="flex items-center gap-4 px-6 py-3 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded transition-colors"
            >
              <Settings size={20} />
              <span className={sidebarOpen ? '' : 'hidden'}>{t('sidebar.settings')}</span>
            </Link>
            <button
              onClick={() => dispatch(logout())}
              className="w-full flex items-center gap-4 px-6 py-3 text-slate-400 hover:text-red-400 hover:bg-red-900/20 rounded transition-colors"
            >
              <LogOut size={20} />
              <span className={sidebarOpen ? '' : 'hidden'}>{t('sidebar.logout')}</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
