<template>
    <div id="auth">
        <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <div class="jumbotron">
                        <form @submit.prevent>
                            <h1 class="text-center mb-4">Your Information</h1>
                            <div class="form-group">
                                <input v-model="userData.first" type="first" class="form-control" id="exampleInputFirstName1" placeholder="First Name">
                            </div>
                            <div class="form-group">
                                <input v-model="userData.last" type="last" class="form-control" id="exampleInputLastName1" placeholder="Last Name">
                            </div>
                            <div class="form-group">
                                <input v-model="userData.email" type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
                            </div>
                            <div class="form-group">
                                <input v-model="userData.password" type="text" class="form-control" id="exampleInputPassword1" placeholder="Password">
                            </div>
                            <div class="form-group">
                                <input v-model="userData.dob" type="dob" class="form-control" id="exampleInputDOB1" placeholder="Date of Birth">
                            </div>
                            <button type="submit" @click="save" class="btn btn-primary">Save Changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Profile",
        data(){
            return {
                userData:{
                    first: "Ehson",
                    last: "Umrani",
                    email: "123@live.com",
                    password: "password",
                    dob: "9-12-95"
                }
            }
        },
        methods: {
            save(){

            }
        }
    }
</script>

<style scoped>

</style>