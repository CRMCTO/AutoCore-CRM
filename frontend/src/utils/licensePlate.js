// Utilities for license plate validation and formatting

const UKRAINIAN_REGIONS = {
  'АА': 'Київська область',
  'АВ': 'Київ',
  'АЕ': 'Аергея область',
  'АК': 'Акмолинская область',
  'АО': 'Астраханская область',
  'АР': 'Республика Алтай',
  'АС': 'Архангельская область',
  'АТ': 'Республика Татарстан',
  'АХ': 'Республика Хакасия',
  // Add more as needed
}

export const validateUkrainianPlate = (plate) => {
  // Format: ХХ0000ХХ (2 letters, 4 digits, 2 letters)
  const regex = /^[А-ЯЇЄ]{2}\d{4}[А-ЯЇЄ]{2}$/
  return regex.test(plate.toUpperCase())
}

export const formatUkrainianPlate = (input) => {
  // Convert to uppercase and remove extra spaces
  let formatted = input.toUpperCase().replace(/\s/g, '')
  
  // Remove non-cyrillic characters and digits
  formatted = formatted.replace(/[^А-ЯЇЄ\d]/g, '')
  
  // Format to ХХ0000ХХ
  if (formatted.length <= 2) return formatted
  if (formatted.length <= 6) return formatted.slice(0, 2) + formatted.slice(2, 6)
  if (formatted.length <= 8) return formatted.slice(0, 2) + formatted.slice(2, 6) + formatted.slice(6, 8)
  
  return formatted.slice(0, 8)
}

export const parseUkrainianPlate = (plate) => {
  // Parse plate format: ХХ0000ХХ
  const match = plate.match(/^([А-ЯЇЄ]{2})(\d{4})([А-ЯЇЄ]{2})$/i)
  if (!match) return null
  
  return {
    region: match[1],
    number: match[2],
    code: match[3],
    full: plate,
  }
}

export const getRegionName = (regionCode) => {
  return UKRAINIAN_REGIONS[regionCode] || 'Невідомий регіон'
}
