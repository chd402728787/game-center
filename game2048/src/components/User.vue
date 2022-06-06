<template>

    <!-- 顶部安全区 -->
    <div class="van-safe-area-top"></div>
   
    <div id="user">
        <van-image width="5rem" height="5rem" fit="cover" position="left" round :src="require('@/assets/头像.jpg')" />

        <van-cell-group>
           
            <van-cell title="用户名" ><h3>{{form.userName}}</h3></van-cell>
            <van-cell title="游戏次数" value="内容"><h3>{{form.count}}</h3></van-cell>
            <van-cell title="游戏总分" value="内容" />
            <van-cell title="游戏最高分" value="内容" />
            
        </van-cell-group>

    </div>
    <!-- 底部安全区 -->
    <div class="van-safe-area-bottom"></div>
</template>

<script>
import { Button } from 'vant'
import { Image } from 'vant'
import { Col, Row } from 'vant'
import { ConfigProvider } from 'vant';
import { Cell, CellGroup } from 'vant';
export default {
    name: 'User',
    components: {
        [Button.name]: Button,
        [Image.name]: Image,
        [Col.name]: Col,
        [Row.name]: Row,
        [Cell.name]: Cell,
        [CellGroup.name]: CellGroup,
        [ConfigProvider.name]:ConfigProvider,
    },
    data() {
        return {
            form: {
                userName: this.$store.state.name,
                passWord: "",
                count:this.$store.state.count
            }
        }
    }
    ,
    props: {
        msg: String,
      
    },

}
</script>
<style>

</style>

