//在这个文件里编写路由规则
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import addShopCar from '@/pages/addShopCar'
import shopCar from '@/pages/shopCar'
Vue.use(VueRouter)
//重写push与replace方法，因为它们的返回值为promise对象，连续push或者replace会返回一个失败的promise对象，所以要有一个失败的回调，以防止出现代码中断，报NavigationDuplicated错误
const originPush=VueRouter.prototype.push
VueRouter.prototype.push=function(location,resolve,reject){
        if(reject){
            originPush.call(this,location,resolve,reject)
        }else{
            originPush.call(this,location,resolve,()=>{})
        }
}
const originReplace=VueRouter.prototype.replace
VueRouter.prototype.replace=function(location,resolve,reject){
        if(reject){
            originReplace.call(this,location,resolve,reject)
        }else{
            originReplace.call(this,location,resolve,()=>{})
        }
}
export default  new VueRouter({
    routes:[
        {
            path:'/shopCar',
            component:shopCar,
            meta:{show:true}
        },
        {   
            name:'addcarSuccess',
            path:'/addcarSuccess',
            component:addShopCar,
            meta:{show:true}
        },
        {
            path:'/home',
            component:Home,
            meta:{show:true}
        },
        {
            path:'/detail/:skuid',
            component:Detail,
            meta:{show:true}
        },
        {
            //给路由命名
            name:'search',
            //?表示params参数可有可无
            path:'/search/:keyword?',
            component:Search,
            meta:{show:true}
        },
        {
            path:'/login',
            component:Login,
            meta:{show:false}
        },
        {
            path:'/register',
            component:Register,
            meta:{show:false}
        },
        {
            path:'*',
            redirect:'/home'
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return {y:0}
      }
})