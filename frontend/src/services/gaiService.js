// Mock API for Ukrainian traffic police (ГАІ) database
// In production, this would connect to real API

const mockGAIDatabase = {
  'АА0001АА': {
    plate: 'АА0001АА',
    vin: 'WBADT43452G942339',
    make: 'BMW',
    model: 'X5',
    year: 2019,
    color: 'Black',
    bodyType: 'SUV',
    engineVolume: '3.0',
    owner: 'Іван Петров',
  },
  'БВ0001БВ': {
    plate: 'БВ0001БВ',
    vin: 'JT2BF18K0M0108876',
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'Silver',
    bodyType: 'Sedan',
    engineVolume: '2.5',
    owner: 'Марія Сідорова',
  },
  'ВГ0001ВГ': {
    plate: 'ВГ0001ВГ',
    vin: 'WMEUF56K51A123456',
    make: 'Mercedes',
    model: 'C-Class',
    year: 2018,
    color: 'White',
    bodyType: 'Sedan',
    engineVolume: '2.0',
    owner: 'Сергій Іванов',
  },
}

// Simulate API call to ГАІ database
export const fetchVehicleDataFromGAI = async (plate) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = mockGAIDatabase[plate.toUpperCase()]
      if (data) {
        resolve(data)
      } else {
        reject(new Error('Транспортний засіб не знайдено в реєстрі ГАІ'))
      }
    }, 500) // Simulate network delay
  })
}

// Format vehicle data for display and documents
export const formatVehicleDataForDocuments = (vehicleData) => {
  return {
    ...vehicleData,
    displayName: `${vehicleData.make} ${vehicleData.model} (${vehicleData.year})`,
    description: `${vehicleData.make} ${vehicleData.model} ${vehicleData.year} - ${vehicleData.color}`,
  }
}
