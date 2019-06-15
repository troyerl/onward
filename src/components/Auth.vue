<template>
    <div id="auth">
        <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <div class="jumbotron">
                        <form @submit.prevent v-if="showLoginForm">
                            <h1 class="text-center mb-4">Login</h1>
                            <div class="form-group">
                                <input v-model="formLogin.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <input v-model="formLogin.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                            </div>
                            <button type="submit" @click="login" class="btn btn-primary">Submit</button>
                        </form>
                        <form @submit.prevent v-else>
                            <h1 class="text-center mb-4">Sign Up</h1>
                            <div class="form-group">
                                <input v-model="formSignUp.first" type="text" class="form-control" id="first" placeholder="First Name">
                            </div>
                            <div class="form-group">
                                <input v-model="formSignUp.last" type="text" class="form-control" id="last" placeholder="Last Name">
                            </div>
                            <div class="form-group">
                                <input v-model="formSignUp.email" type="email" class="form-control" id="email" placeholder="Email (email@domain.com)">
                            </div>
                            <div class="form-group">
                                <input v-model="formSignUp.password" type="password" class="form-control" id="password" placeholder="Password">
                            </div>
                            <div class="form-group">
                                <input v-model="formSignUp.confirmPassword" type="password" class="form-control" id="confirmPassword" placeholder="Confirm Password">
                            </div>
                            <button @click="signup" type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const fb = require('../fb')

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
                    email: '',
                    dob: ''
                },
                showLoginForm: false,
                showForgotPassword: false,
                passwordResetSuccess: false,
                performRequest: false,
                errorMsg: ''
            }
        },
        methods: {
            login() {
                this.errorMsg = ''
                this.performRequest = true

                fb.auth.signInWithEmailAndPassword(this.formLogin.email, this.formLogin.password).then(user => {
                    this.$store.commit('setCurrentUser', user.user)
                    this.$store.dispatch('fetchUserProfile')
                    this.$router.push('/dashboard')
                }).catch(err => {
                    console.log(err)
                    this.performRequest = false
                    this.errorMsg = err.message
                })
            },
            signup() {
                this.performRequest = true

                fb.auth.createUserWithEmailAndPassword(this.formSignUp.email, this.formSignUp.password).then(res => {
                    this.$store.commit('setCurrentUser', res.user)

                    // create user obj
                    fb.usersCollection.doc(res.user.uid).set({
                        first: this.formSignUp.name,
                        last: this.formSignUp.last,
                        dob: this.formSignUp.dob
                    }).then(() => {
                        this.$store.dispatch('fetchUserProfile')
                        this.$router.push('/dashboard')
                    }).catch(err => {
                        console.log(err)
                    })
                }).catch(err => {
                    console.log(err)
                })
            },
            toggleForm(){

            }
        }
    }
</script>

<style scoped>

</style>