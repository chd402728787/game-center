<template>
  <div class="game">
    <Game></Game>
  </div>
    <van-row >
      <van-col offset="6" span="12" ><h1>游戏<br>选择</h1></van-col>
    </van-row>
    <van-button type="primary" to="/game2048">2 0 4 8</van-button><br /><br /><br />
    <van-button type="primary" to="/snake">贪吃蛇</van-button><br /><br /><br />
 
</template>

<script>
// @ is an alias to /src


import { Tabbar,TabbarItem } from "vant";
import { NavBar } from "vant";
import { Icon } from "vant";
import { Form, Field, CellGroup, Button } from 'vant';
export default {
    components: {
        [Form.name]: Form,
        [Field.name]: Field,
        [CellGroup.name]: CellGroup,
        [Button.name]: Button,
         [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
        [NavBar.name]:NavBar,
        [Icon.name]:Icon,
        [Image.name]:Image
    }
}
</script>
<style scoped>
h1{
  font-size: 96px;
  color:#1C86EE;
}
</style>
