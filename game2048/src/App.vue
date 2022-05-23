<template>
  <div id="index">
    <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft" v-if="this.$route.meta.keepAlive">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>

    <router-view />
    
    <van-tabbar route  v-if="this.$route.meta.keepAlive">
      <van-tabbar-item replace icon="wap-home-o" to="/">主页</van-tabbar-item>
      <van-tabbar-item replace icon="fire-o" to="/about" >介绍</van-tabbar-item>
      <van-tabbar-item replace icon="contact" to="/user" >用户</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss">
#index {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
import { Tabbar,TabbarItem } from "vant";
import { NavBar } from "vant";
import { Icon } from "vant";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [NavBar.name]:NavBar,
    [Icon.name]:Icon
  },
  method:{
    onClickLeft() {
      Toast('返回');
      console.log(this.$route)
    },
  }
}
</script>
