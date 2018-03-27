import Vue from 'vue'
import Router from 'vue-router'
import GetInfo from '@/components/GetInfo/getInfo.vue'
import DisplayInfo from '@/components/DisplayInfo/displayInfo.vue'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'
import Cors from 'cors'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(Cors)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'GetInfo',
      component: GetInfo
    },
    {
      path: '/display',
      name: 'DisplayInfo',
      component: DisplayInfo
    }
  ]
})
