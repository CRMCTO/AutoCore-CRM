import { useDispatch, useSelector } from 'react-redux'
import { Menu, Moon, Sun, Bell, Settings, Globe } from 'lucide-react'
import { toggleSidebar, toggleDarkMode, setLanguage } from '../store/slices/uiSlice'
import { useTranslate } from '../hooks/useTranslate'

const Header = () => {
  const dispatch = useDispatch()
  const { darkMode, language } = useSelector(state => state.ui)
  const { user } = useSelector(state => state.auth)
  const t = useTranslate()

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded"
        >
          <Menu size={24} />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">AutoCore CRM</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">{t('sidebar.dashboard')}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Language Switcher */}
        <div className="flex items-center gap-2 border-l border-r border-slate-200 dark:border-slate-700 px-4">
          <Globe size={20} className="text-slate-600 dark:text-slate-400" />
          <select
            value={language}
            onChange={(e) => dispatch(setLanguage(e.target.value))}
            className="bg-transparent text-sm font-medium text-slate-700 dark:text-slate-300 cursor-pointer focus:outline-none"
          >
            <option value="uk">Українська</option>
            <option value="ru">Русский</option>
          </select>
        </div>

        <button
          onClick={() => dispatch(toggleDarkMode())}
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors"
        >
          {darkMode ? (
            <Sun size={20} className="text-yellow-500" />
          ) : (
            <Moon size={20} className="text-slate-600" />
          )}
        </button>

        <button className="relative p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors">
          <Bell size={20} className="text-slate-600 dark:text-slate-400" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-700">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
            AC
          </div>
          <div>
            <p className="text-sm font-medium text-slate-900 dark:text-white">Admin User</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{t('sidebar.dashboard')}</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
