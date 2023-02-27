<template>
    <div id="login">
        <div class="container">
            <div class="row">
                <div class="mx-auto my-auto box text-center">

                    <div class="form-floating mb-5">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                        <label for="floatingInput">用户名</label>
                    </div>
                    <div class="form-floating mb-5">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                        <label for="floatingPassword">密码</label>
                    </div>
                    <button type="button" class="btn btn-primary col-12" @click="to('home')">登入</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { _push } from "@/scripts/page";
export default {
    name: 'LogIn',
    data(){
        return{

        }
    },
    methods: {
        to(id){
            _push(window, id)
        }
  },
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
.form-control{
    background-color: #f2f2f2;
    border: none;
}
.form-control:hover{
    background-color:#e6e6e6;
}
.form-control:focus{
    box-shadow:none;
    border:2px solid #1976d2
}
.form-control:focus ~ label{
    opacity: 1;
    color:#1976d2;
}
</style>