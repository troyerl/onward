<template>
    <div id="auth">
        <transition name="fade">
            <div v-if="performRequest" class="loading">
                <p>Loading...</p>
            </div>
            <section>
                <form v-if="showLoginForm" @submit.prevent>
                    <h1>Login</h1>
                    <input type="text" placeholder="Email" id="email1" v-model.trim="formLogin.email"/>
                    <input type="password" placeholder="Password" id="password1" v-model.trim="formLogin.password" />

                    <button class="button" @click="login">Log In</button>

                    <div class="extras">
                        <a @click="togglePasswordRest">Forgot Password</a>
                        <a @click="toggleForm">Create an Account</a>
                    </div>
                </form>
                <form v-else-if="!showLoginForm && !showForgotPassword" @submit.prevent>
                    <h1>Sign Up</h1>

                    <input v-model.trim="formSignUp.first" type="text" placeholder="First Name" id="name" required/>

                    <input v-model.trim="formSignUp.last" type="text" placeholder="Company" id="title" />

                    <input v-model.trim="formSignUp.email" type="text" placeholder="Email" id="email2" />

                    <input v-model.trim="formSignUp.password" type="password" placeholder="Password (min 6 characters)" id="password" />

                    <input v-model.trim="formSignUp.confirmPassword" type="password" placeholder="Confirm Password" id="confirmPass"/>

                    <button @click="signup" class="button">Sign Up</button>

                    <div class="extras">
                        <a @click="toggleForm">Back to Log In</a>
                    </div>
                </form>
            </section>

    </div>
    <div class="signup">

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