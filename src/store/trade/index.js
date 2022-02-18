import {reqAddressInfo,reqOrderInfo} from '@/api'
const actions={
    async getAddressInfo({commit}){
     const result=await reqAddressInfo()
     if(result.code==200){
            commit('GETADDRESSINFO',result.data)
     }
    },
    async getOrderInfo({commit}){
      const result=await reqOrderInfo()
      if(result.code==200){
          commit('GETORDERINFO',result.data)
      }
    }
}
const mutations={
    GETADDRESSINFO(state,value){
        state.addressInfo=value
    },
    GETORDERINFO(state,value){
        state.orderInfo=value
    }
}
const state={
    addressInfo:[],
    orderInfo:{}
}
export default {
    namespaced:true,
    actions,
    mutations,
    state
}