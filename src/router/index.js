//在这个文件里编写路由规则
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import addShopCar from '@/pages/addShopCar'
import store from '@/store/index'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'
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
const router= new VueRouter({
    routes:[
        {
            path:'/shopCar',
            //路由懒加载
            component:()=>import('@/pages/shopCar'),
            meta:{show:true}
        },
        {
            path:'/center',
            component:Center,
            meta:{show:true},
            redirect:'/center/myOrder',
            children:[
               {
                path:'myOrder',
                component:MyOrder
               },
               {
                path:'groupOrder',
                component:GroupOrder,
               }
            ]
        },
        {
            path:'/paySuccess',
            component:PaySuccess,
            meta:{show:true}
        },
        {
            path:'/pay',
            component:Pay,
            meta:{show:true}
        },
        {
            path:'/trade',
            component:Trade,
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
//全局前置路由守卫
router.beforeEach(async (to,from,next)=>{
       const token=store.state.user.token
       const userInfo=store.state.user.userInfo
       if(token){
           if(to.path=='/login'){
               next('/home')
           }else{
               //已经登录，但是下一跳不是login，需要判断userInfo是否有数据，若有，直接放行，若没有，则请求用户信息
               if(userInfo){
                   next()
               }else{
                 try {
                    await store.dispatch('user/getUserInfo')
                    next()
                 } catch (error) {
                     //若报错，是因为token过期，因此要清除用户消息跟token
                     await  store.dispatch('user/reqLoginOut')
                        next('/login')
                 }

               }
           }
       }else{
           console.log(111)
           next()
       }
})
export default  router