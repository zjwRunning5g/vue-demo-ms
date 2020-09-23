<template>
  <div>
    <h1>{{msg}}</h1>
    <button @click="btn">我是b组件上的按钮</button>
  </div>
</template>
<script>
import bus from "../../../common/bus";
 import pubsub from 'pubsub-js'
  export default {
    name: 'Bmsg',
    data () {
      return {
        msg:'我是b组件数据'
      }
    },
    methods: {
      btn(){
        PubSub.publish('asd',this.msg)
      }
    },
    created() {
      bus.$on('clear',msg=>{
        this.msg = msg
      })
    },
  }
</script>
<style scoped>

</style>