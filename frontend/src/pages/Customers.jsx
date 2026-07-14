import { useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import Input from '../components/Input'
import Modal from '../components/Modal'
import Badge from '../components/Badge'
import { Plus, Edit2, Trash2, Search, Filter } from 'lucide-react'
import { useTranslate } from '../hooks/useTranslate'

const CustomersPage = () => {
  const t = useTranslate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'Іван Петров',
      phone: '+380 (99) 123-45-67',
      email: 'ivan@example.com',
      status: 'active',
      vehicles: [
        { id: 1, make: 'BMW', model: 'X5', plate: 'АА0001АА', vin: 'WBADT43452G942339' },
        { id: 2, make: 'Toyota', model: 'Camry', plate: 'БВ0001БВ', vin: 'JT2BF18K0M0108876' }
      ],
      orders: 5,
      joinDate: '15.01.2024'
    },
    {
      id: 2,
      name: 'Марія Сідорова',
      phone: '+380 (99) 234-56-78',
      email: 'maria@example.com',
      status: 'active',
      vehicles: [
        { id: 3, make: 'Mercedes', model: 'C-Class', plate: 'ВГ0001ВГ', vin: 'WMEUF56K51A123456' }
      ],
      orders: 3,
      joinDate: '22.02.2024'
    },
    {
      id: 3,
      name: 'Сергій Іванов',
      phone: '+380 (99) 345-67-89',
      email: 'sergey@example.com',
      status: 'inactive',
      vehicles: [],
      orders: 1,
      joinDate: '10.03.2024'
    },
  ])

  const filteredCustomers = customers.filter(c => {
    const searchLower = searchTerm.toLowerCase()
    const nameMatch = c.name.toLowerCase().includes(searchLower)
    const phoneMatch = c.phone.includes(searchTerm)
    const emailMatch = c.email.toLowerCase().includes(searchLower)
    const vehicleMatch = c.vehicles.some(v => 
      v.plate.toLowerCase().includes(searchLower) || 
      `${v.make} ${v.model}`.toLowerCase().includes(searchLower) ||
      v.vin.toLowerCase().includes(searchLower)
    )
    
    return nameMatch || phoneMatch || emailMatch || vehicleMatch
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">{t('customers.title')}</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">{t('customers.subtitle')}</p>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2"
        >
          <Plus size={20} />
          {t('customers.newCustomer')}
        </Button>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex-1 min-w-64 relative">
            <Search className="absolute left-3 top-3 text-slate-400" size={20} />
            <input
              type="text"
              placeholder={t('customers.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={20} />
            {t('common.filter')}
          </Button>
        </div>
      </Card>

      {/* Info Message */}
      {searchTerm && (
        <Card className="p-3 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            {t('customers.found')}: <span className="font-semibold">{filteredCustomers.length}</span> {t('customers.customers_many')}
          </p>
        </Card>
      )}

      {/* Customers Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">{t('common.name')}</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">{t('customers.contact')}</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">{t('common.status')}</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">{t('common.vehicles')}</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">{t('common.orders')}</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">{t('customers.registerDate')}</th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300">{t('common.actions')}</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900 dark:text-white">{customer.name}</td>
                    <td className="px-6 py-4 text-sm">
                      <div className="text-slate-700 dark:text-slate-300">{customer.phone}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">{customer.email}</div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <Badge variant={customer.status === 'active' ? 'success' : 'default'}>
                        {customer.status === 'active' ? t('common.active') : t('common.inactive')}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {customer.vehicles.length > 0 ? (
                        <div className="space-y-1">
                          {customer.vehicles.map((v) => (
                            <div key={v.id} className="text-slate-700 dark:text-slate-300">
                              <div className="font-medium">{v.make} {v.model}</div>
                              <div className="text-xs text-slate-500 dark:text-slate-400">
                                {v.plate} • VIN: {v.vin.slice(-6)}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <span className="text-slate-500 dark:text-slate-400">{t('customers.noVehicles')}</span>
                      )}
                    </td>
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
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-6 py-8 text-center text-slate-500 dark:text-slate-400">
                    <p className="text-sm">{t('common.notFound')}</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Add Customer Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={t('customers.addNewCustomer')}
        size="lg"
      >
        <div className="space-y-4">
          <Input label={t('customers.fullName')} placeholder="Іван Петров" />
          <Input label={t('common.phone')} type="tel" placeholder="+380 (99) 123-45-67" />
          <Input label={t('common.email')} type="email" placeholder="example@mail.com" />
          <Input label={t('common.address')} placeholder="вул. Пушкина, буд. 10" />
          <div className="flex gap-3 mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
            <Button variant="outline" className="flex-1" onClick={() => setIsModalOpen(false)}>
              {t('common.cancel')}
            </Button>
            <Button className="flex-1">{t('common.save')}</Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default CustomersPage
