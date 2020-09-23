<template>
  <div>
    <h1>{{msg}}</h1>
    <button @click="homeBtn('1')">父组件调用子组件上的方法</button>
    <HomeTou :fMsg='msg' ref="childGet" @msgEvent='sendDate'></HomeTou>
  </div>
</template>
<script>
import HomeTou from './module/header'
  export default {
    name: 'Home',
    components:{HomeTou},
    data () {
      return {
        msg:'父组件的数据'
      }
    },
    methods: {
      homeBtn(data){
        this.$refs.childGet.getHeader(data)//父组件调用子组件上的方法：父组件上的子组件通过ref等于一个自定义事件名，在子组件中写好方法，在父组件触发事件函数中通过this.$refs.自定义事件名.子组件中写好的方法进行触发。
      },
      sendDate(value){
        console.log(value)
        // 子向父传值，子组件的触发事件函数中通过this.$emit('父组件中定义的事件名'，'传给父组件的参数')，父组件里的子组件上通过@自定义事件名绑定一个方法，通过这个方法函数里接收子组件传过来的参数。
      },
      fff(){
        alert('父组件上的方法')
      },
    },
  }
</script>
<style scoped>

</style>