import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home'
import Cart from '../components/cart/cart'
import My from '../components/my/my'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',redirect:'/home',component: Home },
    { path: '/home',name: 'Home',component: Home },
    { path: '/cart',name: 'Cart',component: Cart },
    { path: '/my',name: 'My',component: My },
  ],
  linkActiveClass:"",  //给路由点击添加class类名
})
