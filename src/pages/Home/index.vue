<template>
  <div>
     <TypeNav/>
     <ListContainer/>
     <Recommend/>
     <Rank/>
     <Like/>
     <Floor v-for="f in floor" :key="f.id" :list='f'/>
     <Brand/> 
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import {mapState} from 'vuex'
export default {
      components:{
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand
      },
      mounted(){
        this.$store.dispatch('home/floor')
      },
      methods:{
         
          
},
      computed:{
     ...mapState('home',['floor'])
       
      }
}  
</script>

<style scoped lang='less'>

</style>