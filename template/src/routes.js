import Login from './Login.vue'
import MainPage from './pages/MainPage.vue'
import ApiPage from './pages/apipage/ApiPage.vue'

let routes = [
  {
    path: '/login',
    component: Login,
    name: '登录'
  },
  {
    path: '/mainpage',
    component: MainPage,
    name: '主页',
    children: [
      {
        path: '/api',
        component: ApiPage,
        name: '主页'
      }
    ]
  }
]
export default routes
