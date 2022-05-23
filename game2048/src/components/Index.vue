<template>
  <!-- 顶部安全区 -->
  <div class="van-safe-area-top"></div>
  <div class="index">
    <van-row>
      <van-col span="6">
        <!--用户头像-->
        <van-image round :src="require('@/assets/头像.jpg')" id="userHead" width="50px" height="50px"></van-image>
      </van-col>
      <van-col span="12"><label id="mainTitle">2048</label></van-col>
      <van-col span="6"></van-col>
    </van-row>
    <van-button type="primary" to="/about">开始游戏</van-button>
  </div>
  <!-- 底部安全区 -->
  <div class="van-safe-area-bottom"></div>
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

<style scoped lang="scss">
.mainTitle{
  font: 36px sans-serif;
}
</style>
