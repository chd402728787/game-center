<template>
    <div class="m-login">
         <van-nav-bar title="注册" left-text="返回" left-arrow @click-left="onClickLeft" route>
      
    </van-nav-bar>

        <van-form @submit="onSubmit">
            <van-cell-group inset>

                <van-field v-model="form.username" name="用户名" label="用户名" placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field v-model="form.password" type="password" name="密码" label="密码" placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]" />
            </van-cell-group>
            <div style="margin: 16px;  ">
           <div style="height:200px">

           </div>
                <van-button  block type="primary" to="" native-type="submit">
                    提交
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
           // console.log(this.form.password)
           this.$store.state.pwd=this.form.password;
           this.$store.state.name=this.form.username;
        console.log(this.$store.state.name);
        alert("注册成功！！！")
                this.$router.push({ path: '/login' })
            
        }

    }

}

</script>
<style>
.van-button--primary {
  color: var(--van-button-primary-color);
  background-color: var(--van-button-primary-background-color);
}
:root {
  --van-white: #fff;
  --van-blue: #1989fa;
  --van-button-primary-color: var(--van-white);
  --van-button-primary-background-color: var(--van-primary-color);
}

</style>