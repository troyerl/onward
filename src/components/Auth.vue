<template>
    <div id="auth">
        <form @submit.prevent>
            <h1>Login</h1>

        </form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                formLogin: {
                    username: '',
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