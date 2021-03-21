import { createStore } from 'vuex'
// vue3.0的createStore来创建vuex实例
import createPersistedstate from 'vuex-persistedstate'

import user from './modules/user'
import cart from './modules/cart'

// 创建vuex仓库并导出
export default createStore({
  state: {
    // 数据
  },
  mutations: {
    // 改数据函数
  },
  actions: {
    // 请求数据函数
  },
  modules: {
    // 分模块
    user,
    cart
  },
  getters: {
    // vuex计算属性
  },
  plugins: [
    // 插件默认存储的地方localStorage
    createPersistedstate({
      key: 'xtx-pc-122',
      path: ['user', 'cart']
    })
  ]
})
