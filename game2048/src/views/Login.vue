<template>
    <div class="m-login">
         <van-nav-bar title="登录" />
        
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field v-model="form.username" name="用户名" label="用户名" placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field v-model="form.password" type="password" name="密码" label="密码" placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]" />
            </van-cell-group>
             <div style="height:200px">

           </div>
            <div style="margin: 16px;">
                <van-button  block type="primary" to="" native-type="submit">
                    登入
                </van-button>
                <span style="height:30px">  &nbsp; &nbsp; &nbsp;   &nbsp;   &nbsp;     &nbsp;        </span>
                <van-button  block type="primary" to="/register" >
                    注册
                </van-button>
            </div>
        </van-form>
    </div>
</template>
<script>

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
    },
    data() {
        return {
            form: {
                userName: "",
                passWord: ""
            }
        }
    },
      setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft,
    };
  },
    methods: {
        onSubmit(e) {

            console.log(this.form.password)
            if (this.form.password == this.$store.state.pwd && this.form.username ==this.$store.state.name) {
                console.log("成功")
                this.$store.state.isLogin=true;
                this.$router.push({ path:'/'})
            }
            else{
                alert("登入失败！！！")
            }
        }
        

    }

}

</script>