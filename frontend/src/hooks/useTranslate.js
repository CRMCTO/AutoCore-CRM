import { useSelector } from 'react-redux'
import { getTranslation } from '../locales/translations'

export const useTranslate = () => {
  const language = useSelector(state => state.ui.language)

  const t = (path) => {
    return getTranslation(language, path)
  }

  return t
}
