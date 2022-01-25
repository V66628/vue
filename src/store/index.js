import Vue from 'vue'
import Vuex from 'vuex'
import home from '@/store/home'
import search from '@/store/search'
import detail from '@/store/detail'
import shopCar from '@/store/shopCar'
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        home,
        search,
        detail,
        shopCar
    }
}) 