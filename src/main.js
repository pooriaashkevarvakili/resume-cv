import Vue from 'vue'
import helper from '@/plugins/helper'
import App from '@/App.vue'
import '@/plugins/vuetify'
import '@/components'
import "./assets/iransans.css"
Vue.config.productionTip = false
Vue.use(helper)

new Vue({ render: (h) => h(App) }).$mount('#app')
