<template>
<div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
</div>
</template>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/Footer'
import {reqCategoryList} from '@/api/index'
import store from '@/store'
export default {
  name: 'App',
  store,
  components: {
        Header,
        Footer
  },
  mounted(){
    //派发一个actions，由于在app组件，所以请求只发一次就存到store中，因此在切换TypeNav组件的时候，就不会每次都发送请求，提高了浏览器的性能。
      this.$store.dispatch('home/category')
  }
}
</script>

<style>
</style>
