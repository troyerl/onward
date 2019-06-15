<template>
    <div id="milestoneForm">
        <div class="jumbotron text-center">
            <h1 class="display-4 text-center">Milestone</h1>
            <hr>
            <div class="form-group">
                <input v-model="formSignUp.first" type="text" class="form-group" id="first" placeholder="Milestone Name">
            </div>
            <router-link class="btn btn-primary btn-lg" :to="{name: 'Auth'}" role="button">Add Task</router-link>
            <router-link class="btn btn-primary btn-lg" :to="{name: 'Milestone'}" role="button">Add Milestone</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MilestonesForm"
    }
</script>

<style scoped>

</style>