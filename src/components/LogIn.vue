<template>
    <div id="login">
        <div class="container">
            <div class="row">
                <div class="mx-auto my-auto box text-center">

                    <div class="form-floating mb-5">
                        <input type="username" class="form-control" id="floatingInput" placeholder="name@example.com"
                            v-model="username">
                        <label for="floatingInput">用户名</label>
                    </div>
                    <div class="form-floating mb-5">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                            v-model="password">
                        <label for="floatingPassword">密码</label>
                    </div>

                    <button type="button" class="btn btn-primary col-12" @click="to('home')">登入</button>
                    <div class="alert alert-danger fixed-bottom mx-auto " role="alert" v-show="danger1">
                        账户名密码错误
                    </div>
                    <div class="alert alert-danger fixed-bottom mx-auto " role="alert" v-show="danger2">
                        账户名密码不能为空
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { _push } from "@/scripts/page";
export default {
    name: 'LogIn',
    data() {
        return {
            danger1:false,
            danger2: false,
            username: '',
            password: '',
        }
    },
    methods: {
        to(id) {
            if(this.username==''||this.password==''){
                this.danger2=true
            }else{
                _push(window, id)
            }

        }
    },
    watch:{
        danger1(val){
            if(val==true){
                setTimeout(()=>this.danger1=false,1000)
            }
        },
        danger2(val){
            if(val==true){
                setTimeout(()=>this.danger2=false,1000)
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login {
    min-height: 100vh;
    background-color: #ffffff;
}

.row {
    min-height: 100vh;
}

.box {
    width: 270px;

}

.form-control {
    background-color: #f2f2f2;
    border: none;
}

.form-control:hover {
    background-color: #e6e6e6;
}

.form-control:focus {
    box-shadow: none;
    border: 2px solid #1976d2
}

.form-control:focus~label {
    opacity: 1;
    color: #1976d2;
}

.alert {
    width: 200px;

}
</style>