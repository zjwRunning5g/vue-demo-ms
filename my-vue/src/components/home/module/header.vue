<template>
  <div>
    <h2>
      {{msg}}----{{fMsg}}   
    </h2>
    <button @click="sendMsg">子组件上的按钮</button>
    <button @click="zdf">子组件调用父组件上的方法</button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg:'我是Home组件的子组件',
      }
    },
    props:['fMsg'],//父向子传值：在父组件中定义的子组件上自定义事件名，后面值是父组件数据，然后子组件通过props接收一下，这样子组件里就可以直接使用父组件数据了。
    methods: {
      getHeader(msg){
        alert('我是子组件里面的方法'  + msg)
      },
      sendMsg(event){
        this.$emit('msgEvent',this.msg)
      },
      zdf(){
        this.$parent.fff()//子组件调用父组件上的方法：在子组件触发函数中通过this.$parent.父组件上的方法进行调用
      },
    },
  }
</script>
<style scoped>

</style>