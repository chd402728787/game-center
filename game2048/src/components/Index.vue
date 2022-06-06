<template>
  <!-- 顶部安全区 -->
  <div class="van-safe-area-top"></div>
  <!--主界面-->
  <div class="index">
    <van-row >
<<<<<<< HEAD
    

      <van-col offset="4" span="16" ><h1>富 强<br />民 组</h1></van-col>

=======
      <van-col offset="4" span="16" @click="deleteMsg()"><h1>富 强<br />民 组</h1></van-col>
>>>>>>> 111c9de (添加localstorage，改了个烂bug)
    </van-row>
    <van-button type="primary" to="/choose">开始游戏</van-button><br /><br /><br />
    <van-button type="primary" to="/about">游戏介绍</van-button><br /><br /><br />
    <van-button type="primary" to="/worker">制作人员</van-button>
  </div>

</template>

<script>
import { Button } from 'vant'
import { Image  } from 'vant'
import { Col,Row } from 'vant'
export default {
  name: 'Index',
  components:{
    [Button.name]:Button,
    [Image.name]:Image,
    [Col.name]:Col,
    [Row.name]:Row
  },
  props: {
    msg: String
  },
  methods:{
    deleteMsg(){
       localStorage.removeItem('userName');
       this.$store.state.isLogin=false;
    }
  }
}
</script>

<style scoped>
h1{

  font-size: 84px;

  color:#1C86EE;
}
</style>
