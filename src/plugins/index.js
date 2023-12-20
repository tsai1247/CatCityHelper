/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import i18n from './i18n'
import router from '../router'

export function registerPlugins(app) {
  app
    .use(vuetify)
    .use(i18n)
    .use(router)
}
