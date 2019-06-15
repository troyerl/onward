<template>
    <div id="milestones">
        <div class="jumbotron text-center">
            <h1 class="display-4 text-center">Milestones</h1>
            <hr>
            <router-link class="btn btn-primary btn-lg" :to="{name: 'MilestoneForm'}" role="button">Add Milestone</router-link>
        </div>

        <div class="container mt-5">
            <div class="row">
                <div class="col">
                    <div class="jumbotron jumbo-example">
                        <h1 class="text-center mb-4 text-white-50">Example: Get a Job</h1>
                        <hr>
                        <div class="example-group">
                            <div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Milestones"
  }
</script>

<style scoped>

</style>