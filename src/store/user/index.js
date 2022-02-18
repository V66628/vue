import {sendCode,register,login, userInfo,loginOut} from '@/api'
const actions={
    async getCode({commit},phone){
        const result =await sendCode(phone)
        if(result.code==200){
            commit('GETCODE',result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('请求失败'))
        }
    },
    async signIn(_,data){ 
        const result = await register(data)
        if(result.code==200){
            return '注册成功'
        }else{
            return Promise.reject(new Error('注册失败'))
        }
    },
    async userLogin({commit},data){
        const result=await login(data)
        if(result.code==200){
            commit('USERLOGIN',result.data.token)
            localStorage.setItem('TOKEN',result.data.token)
            return '登录成功'
        }else{
            return Promise.reject(new Error('登录失败'))
        }
    },
    async getUserInfo({commit}){
      const result=  await userInfo()
      if(result.code=200){
            commit('GETUSERINFO',result.data)
          return '获取用户消息成功'
      }else{
          return Promise.reject(new Error('获取用户消息失败'))
      }
    },
    async reqLoginOut({state}){
            const result=await loginOut()
            if(result.code==200){
               state.token=''
               state.userInfo={}
                localStorage.removeItem('TOKEN')
                return 'ok'
            }else{
                return Promise.reject(new Error('退出失败'))
            }
    }
}
const mutations={
    GETCODE(state,value){
        state.code=value
    },
    USERLOGIN(state,value){
        state.token=value
    },
    GETUSERINFO(state,value){
        state.userInfo=value
    }
}
const state={
    code:'',
    token:localStorage.getItem('TOKEN'),
    userInfo:{}
}
export default{
    namespaced:true,
    actions,
    mutations,
    state
}