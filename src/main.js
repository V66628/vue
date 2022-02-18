import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/pages/Home/TypeNav'
import  Pagination  from '@/components/Pagination'
import '@/mock/mockServe'
import 'swiper/css/swiper.css'
import {Icon,Button,MessageBox} from 'element-ui'
import VueLazyload from 'vue-lazyload'
import *as API from '@/api'
import pgoto from '@/assets/images/11.png'
//注册全局组件
//分页组件
Vue.component(Pagination.name,Pagination)
Vue.component(TypeNav.name,TypeNav)
Vue.use(Icon)
Vue.use(Button)
Vue.use(VueLazyload,{
  loading:pgoto
})
 
Vue.prototype.$alert=MessageBox.alert
Vue.prototype.$messageBox=MessageBox
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  beforeCreate(){
    Vue.prototype.$bus=this
    Vue.prototype.$API=API
  }
}).$mount('#app')
