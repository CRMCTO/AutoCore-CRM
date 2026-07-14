// Document generation utilities
// All documents are generated in Ukrainian language

export const generateInvoiceDocument = (order, language = 'uk') => {
  // Always generate in Ukrainian
  const invoiceData = {
    title: 'РАХУНОК',
    orderNumber: order.id,
    date: new Date().toLocaleDateString('uk-UA'),
    customer: order.customer,
    vehicle: order.vehicle,
    services: order.services,
    totalAmount: order.totalAmount,
    currency: '₴',
    footerText: 'Дякуємо за ваш бізнес!',
  }
  return invoiceData
}

export const generateServiceReportDocument = (order, language = 'uk') => {
  // Always generate in Ukrainian
  const reportData = {
    title: 'АКТ ВИКОНАНИХ РОБІТ',
    orderNumber: order.id,
    date: new Date().toLocaleDateString('uk-UA'),
    customer: order.customer,
    vehicle: order.vehicle,
    services: order.services,
    startDate: order.startDate,
    endDate: order.endDate,
    technician: order.technician,
    notes: order.notes,
    signatureField: 'Підпис виконавця:_______________',
  }
  return reportData
}

export const generateReceiptDocument = (payment, language = 'uk') => {
  // Always generate in Ukrainian
  const receiptData = {
    title: 'КВИТАНЦІЯ',
    receiptNumber: payment.id,
    date: new Date().toLocaleDateString('uk-UA'),
    amount: payment.amount,
    currency: '₴',
    paymentMethod: {
      cash: 'Готівка',
      card: 'Банківська карта',
      transfer: 'Банківський переведення',
    }[payment.method],
    paidFor: payment.description,
  }
  return receiptData
}

export const generateAnalyticsReportDocument = (data, language = 'uk') => {
  // Always generate in Ukrainian
  const reportData = {
    title: 'ЗВІТ ПО АНАЛІТИЦІ',
    period: data.period,
    date: new Date().toLocaleDateString('uk-UA'),
    totalOrders: data.totalOrders,
    totalRevenue: data.totalRevenue,
    currency: '₴',
    newCustomers: data.newCustomers,
    repeatCustomers: data.repeatCustomers,
  }
  return reportData
}
