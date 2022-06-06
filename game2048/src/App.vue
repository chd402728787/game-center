<template>

  <div id="index" >
    <!--导航栏-->
    <van-nav-bar title="富强民组" left-text="返回" left-arrow @click-left="onClickLeft" route v-if="this.$route.meta.userinfo">
      <template  #right >
        <!--用户头像-->
        <van-image  round :src="require('@/assets/头像.jpg')" id="userHead" width="25px" @click="gotoUser"></van-image>
      </template>
    </van-nav-bar>
    <!-- 顶部安全区 -->
    <div class="van-safe-area-top"></div>
    <!-- 底部安全区 -->
    <div class="van-safe-area-bottom"></div>
    <router-view />
    
    <!--标签栏-->
    <van-tabbar route v-if="this.$route.meta.keepAlive">
      <van-tabbar-item replace icon="wap-home-o" to="/">主页</van-tabbar-item>
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
import { Image  } from 'vant'
import { Store } from "vuex";

export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [NavBar.name]:NavBar,
    [Icon.name]:Icon,
    [Image.name]:Image
  },
  setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft,
    };
  },
  created(){
    //在页面加载时读取localStorage里的状态信息
    localStorage.getItem("userMsg") && this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(localStorage.getItem("userMsg"))));
    
    //在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener("beforeunload",()=>{
        localStorage.setItem("userMsg",JSON.stringify(this.$store.state));
    })

    if(!this.$store.state.isLogin)
      this.$router.replace('/login');
  },
  methods:{
    //点击用户头像跳转到用户界面
    gotoUser(){
      this.$router.replace('/user');
      localStorage.removeItem('userMsg');
    },
    

  }
}
</script>
