import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BarChart3, Users, Car, ClipboardList, DollarSign, TrendingUp } from 'lucide-react'
import StatCard from '../components/StatCard'
import Card from '../components/Card'
import Button from '../components/Button'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'

const Dashboard = () => {
  const [stats] = useState([
    {
      icon: Users,
      label: 'Всего клиентов',
      value: '1,234',
      change: '+12.5%',
      trend: 'up',
      subtext: 'за последний месяц'
    },
    {
      icon: Car,
      label: 'Автомобили',
      value: '856',
      change: '+5.2%',
      trend: 'up',
      subtext: 'зарегистрировано'
    },
    {
      icon: ClipboardList,
      label: 'Активные заказы',
      value: '342',
      change: '+8.1%',
      trend: 'up',
      subtext: 'в обработке'
    },
    {
      icon: DollarSign,
      label: 'Доход (месяц)',
      value: '₽245,320',
      change: '+18.3%',
      trend: 'up',
      subtext: 'от прошлого месяца'
    },
  ])

  const revenueData = [
    { month: 'Янв', revenue: 45000 },
    { month: 'Фев', revenue: 52000 },
    { month: 'Мар', revenue: 48000 },
    { month: 'Апр', revenue: 61000 },
    { month: 'Май', revenue: 75000 },
    { month: 'Июн', revenue: 82000 },
  ]

  const ordersData = [
    { status: 'Новые', count: 45 },
    { status: 'В работе', count: 120 },
    { status: 'Готовые', count: 95 },
    { status: 'Завершены', count: 320 },
  ]

  const COLORS = ['#3b82f6', '#06b6d4', '#10b981', '#f59e0b']

  const recentOrders = [
    {
      id: '#ORD-001',
      customer: 'Иван Петров',
      vehicle: 'BMW X5',
      service: 'ТО-1',
      status: 'completed',
      amount: '₽5,200',
      date: '14.07.2024'
    },
    {
      id: '#ORD-002',
      customer: 'Мария Сидорова',
      vehicle: 'Mercedes C-Class',
      service: 'Замена масла',
      status: 'in_progress',
      amount: '₽1,800',
      date: '14.07.2024'
    },
    {
      id: '#ORD-003',
      customer: 'Сергей Иванов',
      vehicle: 'Audi A6',
      service: 'Диагностика',
      status: 'pending',
      amount: '₽2,500',
      date: '13.07.2024'
    },
  ]

  const getStatusColor = (status) => {
    const colors = {
      completed: 'success',
      in_progress: 'warning',
      pending: 'info',
    }
    return colors[status]
  }

  const getStatusText = (status) => {
    const texts = {
      completed: 'Завершен',
      in_progress: 'В работе',
      pending: 'Ожидание',
    }
    return texts[status]
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Добро пожаловать! 👋</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">Вот обзор вашего бизнеса за сегодня</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Доход по месяцам</h2>
            <select className="text-sm border border-slate-300 dark:border-slate-600 rounded px-3 py-1 bg-white dark:bg-slate-800">
              <option>2024</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #475569',
                  borderRadius: '8px',
                }}
                cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ fill: '#3b82f6', r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Orders Status */}
        <Card className="p-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Статус заказов</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={ordersData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
              >
                {COLORS.map((color, index) => (
                  <Cell key={`cell-${index}`} fill={color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Последние заказы</h2>
          <Button variant="outline" size="sm">Посмотреть все</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="text-left px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Заказ</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Клиент</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300">ТС</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Услуга</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Сумма</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300">Статус</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, idx) => (
                <tr key={idx} className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-4 py-3 text-sm font-medium text-blue-600">{order.id}</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">{order.customer}</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">{order.vehicle}</td>
                  <td className="px-4 py-3 text-sm text-slate-700 dark:text-slate-300">{order.service}</td>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-white">{order.amount}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      order.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                      'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {getStatusText(order.status)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

export default Dashboard
