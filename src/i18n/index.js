// https://kazupon.github.io/vue-i18n/guide/started.html

import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en: {
      message: {
        hello: 'Hello World'
      }
    },
    es: {
      message: {
        hello: 'Hola'
      }
    }
  }
})

export default i18n
