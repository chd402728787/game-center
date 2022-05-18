<template>
    <div class="m-login">
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field v-model="form.username" name="用户名" label="用户名" placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field v-model="form.password" type="password" name="密码" label="密码" placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]" />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>

    </div>
</template>
<script>
import { ref } from 'vue';
import { Form, Field, CellGroup, Button } from 'vant';
export default {
    components: {
        [Form.name]: Form,
        [Field.name]: Field,
        [CellGroup.name]: CellGroup,
        [Button.name]: Button
    },
    data() {
        return {
            form: {
                userName: "",
                passWord: ""
            }
        }
    },
    methods: {
        onSubmit(e) {

            console.log(this.form.password)
            if (this.form.password == "123" && this.form.username == "admin") {
                console.log("成功")
                this.$route.push({
                    path: '/user'
                })
            }
        }

    }

}

</script>