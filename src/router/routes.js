import Home from '../pages/Home/Home.vue'
import Class from '../pages/Class/Class.vue'
import Dis from '../pages/Dis/Dis.vue'
import Cart from '../pages/Cart/Cart.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

export default [
  {
    path:'/home',
    component:Home,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/class',
    component:Class,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/dis',
    component:Dis,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/cart',
    component:Cart,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/',
    redirect:'/home'
  }
]
