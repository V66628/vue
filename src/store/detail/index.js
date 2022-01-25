import {getDetailInfo,reqAddShopCar,shopCar} from '@/api'
import getUUID from '@/utils/uuid'
const state={
    detailInfo:{},
    //游客临时身份
    uuid_token:getUUID(),
    getShopCar:[]
}
const actions={
      async getGoodInfo({commit},skuid ){
      const result= await getDetailInfo(skuid)
      if(result.code==200){
          commit('GETGOODINFO',result.data)
      }
      },
      async addShopCar({commit},{skuid,skumNum}){
      const result=  await reqAddShopCar(skuid,skumNum)
        if(result.code==200){
            return 'ok'
        }else{
            console.log(result)
            return Promise.reject(new Error('faile111'))
        }
      },
      async getShopCar({commit}){
          const result=await shopCar()
          if(result.code==200){
              commit("GETSHOPCAR",result.data)
          }
      }
}
const mutations={
    GETGOODINFO(state,value){
            state.detailInfo=value
    },
    GETSHOPCAR(state,value){
        state.getShopCar=value
    }
}
const getters={
    cartInfoList(state){
        let shopCar=state.getShopCar[0] || {}
            return  shopCar.cartInfoList || []
    }
}
export default {
    namespaced:true,
    state,
    actions,
    mutations,
    getters
}