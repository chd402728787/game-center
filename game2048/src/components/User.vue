<template>
  <!-- 顶部安全区 -->
  <div class="van-safe-area-top"></div>

  <div id="user">
    <van-image
      width="4rem"
      height="4rem"
      fit="cover"
      position="left"
      round
      :src="require('@/assets/头像.jpg')"
    />
    <van-cell-group>
      <van-cell title="用户名" size="large">{{ form.userName }}</van-cell>
      <van-cell-group>
        <van-cell title="游戏次数" value="" size="large"></van-cell>
        <van-cell title="2048" value="内容">{{ form.count2048 }}</van-cell>
        <van-cell title="贪吃蛇" value="内容">{{ form.countSnake }}</van-cell>
      </van-cell-group>

      <van-cell-group>
        <van-cell title="游戏总分" value="" size="large" />
        <van-cell title="2048" value="内容">{{ form.scoreAll2048 }}</van-cell>
        <van-cell title="贪吃蛇" value="内容">{{ form.scoreSnake }}</van-cell>
      </van-cell-group>

      <van-cell-group>
        <van-cell title="游戏最高分" value="" size="large" />
        <van-cell title="2048" value="内容">{{ form.scoreMax2048 }}</van-cell>
        <van-cell title="贪吃蛇" value="内容">{{ form.scoreMaxSnake }}</van-cell>
      </van-cell-group>
    </van-cell-group>
  </div>
  <!-- 底部安全区 -->
  <div class="van-safe-area-bottom"></div>
</template>

<script>
import { Button } from "vant";
import { Image } from "vant";
import { Col, Row } from "vant";
import { ConfigProvider } from "vant";
import { Cell, CellGroup } from "vant";
export default {
  name: "User",
  components: {
    [Button.name]: Button,
    [Image.name]: Image,
    [Col.name]: Col,
    [Row.name]: Row,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [ConfigProvider.name]: ConfigProvider,
  },
  data() {
    return {
      form: {
        userName: this.$store.state.name,
        passWord: "",
        count2048: this.$store.state.count2048,
        countSnake: this.$store.state.countSnake,
        scoreAll2048: this.$store.state.scoreAll2048,
        scoreSnake: this.$store.state.scoreSnake,
        scoreMax2048: this.$store.state.scoreMax2048,
        scoreMaxSnake: this.$store.state.scoreMaxSnake,
      },
    };
  },
  props: {
    msg: String,
  },
};
</script>
<style>
</style>

