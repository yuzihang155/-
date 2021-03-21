// 管理用户信息的模块
export default {
  nameSpace: true,
  state: () => {
    return {
      // 用户信息
      profile: {
        id: '',
        nickname: '',
        avatar: '',
        mobile: '',
        token: ''
      }
    }
  },
  mutations: {
    // 将来登录成功会传入用户信息对象
    setUser (state, profile) {
      state.profile = profile
    }
  }
}
