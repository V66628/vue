import {getBanner, reqCategoryList,getFloor} from '@/api'
const actions={
  async category(context){
            const result=await reqCategoryList()
            if(result.code==200){
                context.commit('CATEGORY',result.data)
            }
    },
  async BannerList(context){
            const result=await getBanner()
            if(result.code==200){
                context.commit('BANNERLIST',result.data)
            }
    },
    async floor(context){
        const result=await getFloor()
        if(result.code==200){
            context.commit('FLOOR',result.data)
        }
}
}    
const mutations={
    CATEGORY(state,value){
        state.cateGoryList=value
    },
    BANNERLIST(state,value){
        state.bannerList=value
    },
    FLOOR(state,value){
        state.floor=value
    }
}
const state={
    cateGoryList:[],
    bannerList:[],
    floor:[]
}
export default {
    //开启命名空间
    namespaced:true,
    actions,
    mutations,
    state
}