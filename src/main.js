// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { func } from './func.js'

import Vuex from 'vuex'

import DefaultLayout from '~/layouts/Default.vue'
import vWow from 'v-wow'

import mdiVue from 'mdi-vue'
import * as mdijs from '@mdi/js'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default function (Vue, { router, head, isClient, appOptions }) {
  // if (isClient) {
  //   window.$ = require('jquery')
  // }

  Vue.use(Vuex);

  appOptions.store = new Vuex.Store({
    state: {
      order: [],
      minprice: 0
    },
    mutations: {
      setOrder(state, order) {
        state.order = order
      },
      minPrice(state, price) {
        state.minprice = price
      }
    }
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&amp;subset=cyrillic',
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&amp;subset=cyrillic',
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css',
  })

  // i18n
  appOptions.i18n.setLocaleMessage('ru-ru', require('./locales/ru.json'))
  appOptions.i18n.setLocaleMessage('uk-ua', require('./locales/ua.json'))

  Vue.prototype.$func = func

  Vue.use(mdiVue, {
    icons: mdijs
  })

  Vue.use(vWow);

  Vue.use(BootstrapVue)

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
