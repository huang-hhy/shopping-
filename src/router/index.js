import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

import homelist1 from '../components/homelist1.vue'
import homelist2 from '../components/homelist2.vue'

//赖加载导入
// const Profile = () =>  import('../components/Profile')
const Home= ()=> import('../views/home/home')
const Categroy= ()=> import('../views/categroy/categroy')
const Cart= ()=> import('../views/cart/cart')
const Profile= ()=> import('../views/profile/profile')
const Detail= ()=> import('../views/detail/Detail')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path:'/categroy',
    component:Categroy
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    name:'Detail',
    component:Detail
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
