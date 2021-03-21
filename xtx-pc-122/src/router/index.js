import { createRouter, createWebHashHistory } from 'vue-router'
// vue3.0中createWebHashHistory来创建路由实例，createWebHashHistory代表使用hash模式的路由

const routes = [

]

const router = createRouter({
  // 使用hash方式实现路由
  history: createWebHashHistory(),
  // 配置路由规则
  routes
})

export default router
