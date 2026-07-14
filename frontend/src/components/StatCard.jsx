import { TrendingUp, TrendingDown } from 'lucide-react'

const StatCard = ({ icon: Icon, label, value, change, trend = 'up', subtext }) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{label}</p>
          <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">{value}</p>
          {subtext && (
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{subtext}</p>
          )}
        </div>
        <div className="p-3 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg">
          <Icon size={24} className="text-blue-600 dark:text-blue-400" />
        </div>
      </div>
      {change && (
        <div className={`flex items-center gap-1 mt-4 text-sm font-medium ${
          trend === 'up' ? 'text-green-600' : 'text-red-600'
        }`}>
          {trend === 'up' ? (
            <TrendingUp size={16} />
          ) : (
            <TrendingDown size={16} />
          )}
          <span>{change}</span>
        </div>
      )}
    </div>
  )
}

export default StatCard
