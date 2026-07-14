import { useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import Input from '../components/Input'
import Modal from '../components/Modal'
import Badge from '../components/Badge'
import { Plus, Edit2, Trash2, Search, Filter } from 'lucide-react'

const CustomersPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'Иван Петров',
      phone: '+7 (999) 123-45-67',
      email: 'ivan@example.com',
      status: 'active',
      vehicles: 2,
      orders: 5,
      joinDate: '15.01.2024'
    },
    {
      id: 2,
      name: 'Мария Сидорова',
      phone: '+7 (999) 234-56-78',
      email: 'maria@example.com',
      status: 'active',
      vehicles: 1,
      orders: 3,
      joinDate: '22.02.2024'
    },
    {
      id: 3,
      name: 'Сергей Иванов',
      phone: '+7 (999) 345-67-89',
      email: 'sergey@example.com',
      status: 'inactive',
      vehicles: 0,
      orders: 1,
      joinDate: '10.03.2024'
    },
  ])

  const filteredCustomers = customers.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.phone.includes(searchTerm) ||
    c.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Клиенты</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Управление клиентами и их профилями</p>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2"
        >
          <Plus size={20} />
          Новый клиент
        </Button>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex gap-4 items-center">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Поиск по имени, телефону или email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={20} />
            Фильтры
          </Button>
        </div>
      </Card>

      {/* Customers Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Имя</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Контакт</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Статус</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">ТС</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Заказы</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Дата регистрации</th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">Действия</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">{customer.name}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="text-slate-700 dark:text-slate-300">{customer.phone}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{customer.email}</div>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <Badge variant={customer.status === 'active' ? 'success' : 'default'}>
                      {customer.status === 'active' ? 'Активный' : 'Неактивный'}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300">{customer.vehicles}</td>
                  <td className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300 font-medium">{customer.orders}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{customer.joinDate}</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex gap-2 justify-center">
                      <button className="p-2 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-600 rounded transition-colors">
                        <Edit2 size={18} />
                      </button>
                      <button className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 text-red-600 rounded transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Add Customer Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Добавить нового клиента"
        size="lg"
      >
        <div className="space-y-4">
          <Input label="Полное имя" placeholder="Иван Петров" />
          <Input label="Телефон" type="tel" placeholder="+7 (999) 123-45-67" />
          <Input label="Email" type="email" placeholder="example@mail.com" />
          <Input label="Адрес" placeholder="ул. Пушкина, д. 10" />
          <div className="flex gap-3 mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
            <Button variant="outline" className="flex-1" onClick={() => setIsModalOpen(false)}>
              Отмена
            </Button>
            <Button className="flex-1">Сохранить</Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default CustomersPage
