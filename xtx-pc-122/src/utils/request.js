// 1，初始化axios实例
// 2，请求拦截器，带token
// 3，响应拦截器，拿出响应数据，拦截token失效
// 4，定义一个函数使用配置好的axios发请求
// 5，得到：请求工具函数

import axios from 'axios'
import store from '@/store'
import router from '@/router'

// 1.初始化实例
const instance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front.itheima.net/',
  timeout: 5000
})
// 2.请求拦截器
instance.interceptors.request.use(config => {
  // config是请求配置
  // 1，获取token
  const { token } = store.state.user.profile
  // 2，请求头设置token
  config.headers.Authorization = `Bearer ${token}`

  return config
},
e => Promise.reject(e))

// 响应拦截器
instance.interceptors.response.user(res => res.data, e => {
  // 当token未传，已失效，响应状态码401
  if (e.response && e.response.status === 401) {
    // 当你失败的时候，获取当前的路由地址（完整地址 hash地址 + ?传参）
    // router ===>$router  路径$router.path ===> router.currentRoute.fullPath
    const redirectUrl = router.currentRoute.fullPath
    // 跳转登录页面，并且传递当前的路由地址（目的是将来登录完毕后可以回跳）
    router.push({ path: '/login', query: { redirectUrl } })
  }
  return Promise.project(e)
})
