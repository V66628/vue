import { deleteGoods,checkedGoods } from "@/api"
const state={}
const actions={
  async  delete(_,value){
     const result=await deleteGoods(value)
     if(result.code==200){
         return 'ok'
     }else{
         return Promise.reject(new Error('faile'))
     }
  },
  async checked(_,{skuId,isChecked}){
     const result=await checkedGoods(skuId,isChecked)
     if(result.code==200){
         return 'ok'
     }else{
         return Promise.reject(new Error('faile'))
     }
  }
}
const mutations={}
export default {
    namespaced:true,
    state,
    actions,
    mutations
}