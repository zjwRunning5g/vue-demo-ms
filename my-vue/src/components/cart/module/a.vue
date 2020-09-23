<template>
  <div>
    <h1>{{msg}}</h1>
    <button @click="btn">我是a组件按钮</button>
  </div>
</template>
<script>
import bus from "../../../common/bus";
import pubsub from 'pubsub-js'
  export default {
    name: 'Amsg',
    data () {
      return {
        msg:'我是a组件数据'
      }
    },
    methods: {
      btn(){
        bus.$emit('clear',this.msg)
      }
    },
    created() {
      // 非父子组件间的传值通过pubsub：发送消息组件通过pubsub.publish('事件名',传递的参数)，接收消息组件通过pubsub.subscribe('事件名',回调函数，接收两个参数)
      // bus总线传递参数，发送消息组件通过bus.$emit('事件名'，传递的参数)，接收消息的组件通过bus.$on('事件名'，回调函数接收)
      PubSub.subscribe('asd',(msg,data)=>{
        this.msg = data
      })
    },
  }
</script>
<style scoped>

</style>