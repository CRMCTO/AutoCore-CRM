import { useTranslate } from '../hooks/useTranslate'

const Dashboard = () => {
  const t = useTranslate()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">{t('dashboard.welcome')}</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">{t('dashboard.overview')}</p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-8 text-center">
        <p className="text-slate-500 dark:text-slate-400">{t('common.loading')}...</p>
      </div>
    </div>
  )
}

export default Dashboard
