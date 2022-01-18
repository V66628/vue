import { getSearchInfo } from "@/api"
const actions={
  async  getSearchList({commit},params){
        const result = await getSearchInfo(params)
        const {code,data}=result
            if(code==200){
                commit('GETSEARCHLIST',data)
            }
  }
}
const mutations={
    GETSEARCHLIST(state,value){
        state.searchList=value
    }
}
const state={
    searchList:{}
}
export default {
    //开启命名空间
    namespaced:true,
    actions,
    mutations,
    state
}