import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/pages/Home/TypeNav'
import '@/mock/mockServe'
import 'swiper/css/swiper.css'
import {Icon} from 'element-ui'
//注册全局组件
Vue.component(TypeNav.name,TypeNav)
Vue.use(Icon)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  beforeCreate(){
    Vue.prototype.$bus=this
  }
}).$mount('#app')
