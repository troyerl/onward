<template>
    <div id="auth">
        <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <div class="jumbotron">
                        <form @submit.prevent>
                            <h1>Login</h1>
                            <form action="" @submit.prevent>
                                <input type="text" placeholder="Email" v-model="formLogin.email"/>
                                <input type="password" placeholder="Password" v-model="formLogin.password"/>
                                <button class="btn btn-primary" @click="login">Login</button>
                            </form>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                formLogin: {
                    email: '',
                    password: ''
                },
                formSignUp: {
                    password: '',
                    confirmPassword: '',
                    first: '',
                    last: '',
                    email: ''
                },
                showLoginForm: true,
                showForgotPassword: false,
                passwordResetSuccess: false,
                performRequest: false,
                errorMsg: ''
            }
        },
        methods: {
            login(){

            },
            signup(){

            },
            toggleForm(){

            }
        }
    }
</script>

<style scoped>

</style>