// import Home from '../pages/Home/Home.vue'
const Home = () => import('../pages/Home/Home.vue')
// import Class from '../pages/Class/Class.vue'
const Class = () => import('../pages/Class/Class.vue')
// import Dis from '../pages/Dis/Dis.vue'
const Dis = () => import('../pages/Dis/Dis.vue')
// import Cart from '../pages/Cart/Cart.vue'
const Cart = () => import('../pages/Cart/Cart.vue')
// import Search from '../pages/Search/Search.vue'
const Search = () => import('../pages/Search/Search.vue')
// import Login from '../pages/Login/Login.vue'
const Login = () => import('../pages/Login/Login.vue')
// import ClassDetail from '../pages/ClassDetail/ClassDetail.vue'
const ClassDetail = () => import('../pages/ClassDetail/ClassDetail.vue')
// import DisTab from '../pages/DisTab/DisTab.vue'
const DisTab = () => import('../pages/DisTab/DisTab.vue')



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
    },
    children:[
      {
        path:'/class/classDetail:id',
        component:ClassDetail,
        meta:{
          isShowFooter:true
        },
      }
    ]
  },
  {
    path:'/dis',
    component:Dis,
    redirect:'/dis/tab0',
    meta:{
      isShowFooter:true
    },
    children:[
      {
        path:'/dis/tab:id',
        component:DisTab,
        meta:{
          isShowFooter:true
        },
      },
    ]
  },
  {
    path:'/cart',
    component:Cart,
    meta:{
      isShowFooter:true
    }
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/',
    redirect:'/home'
  }
]
