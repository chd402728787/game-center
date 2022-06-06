<template>
  <!-- 顶部安全区 -->
  <div class="van-safe-area-top"></div>
  <!--主界面-->
  <div class="index">
    <van-row >
      <van-col offset="6" span="12" ><h1>2 0<br>4 8</h1></van-col>
    </van-row>
    <van-button type="primary" to="/choose">开始游戏</van-button><br /><br /><br />
    <van-button type="primary" to="/about">游戏介绍</van-button><br /><br /><br />
    <van-button type="primary" to="/Login">制作人员</van-button>
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

}
</script>

<style scoped>
h1{
  font-size: 96px;
  color:#1C86EE;
}
</style>
