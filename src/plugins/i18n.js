import { createI18n } from 'vue-i18n'
import messages from '@/i18n/i18n'

const i18n = createI18n({
  legacy: false, // 要把 legacy 設為 false，才可以使用 Composition API
  locale: 'zh-TW',
  fallbackLocale: 'zh-TW',
  globalInjection: true,
  messages
})

export default i18n
