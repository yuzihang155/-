<template>
  <div>
    <h3>{{$store.state.user.username}}</h3>
    <button @click="$store.commit('user/setUser',{nickname:'小强'})">修改state数据</button>
  </div>
</template>
