<template>
  <div>
    <h1>{{msg}}</h1>
    <Amsg></Amsg>
    <Bmsg></Bmsg>
  </div>
</template>
<script>
import Amsg from './module/a'
import Bmsg from './module/b'
  export default {
    name: 'Cart',
    components:{Amsg,Bmsg},
    data () {
      return {
        msg:'我是Cart组件数据'
      }
    },
    methods: {

    },
  }
</script>
<style scoped>

</style>