<template>
  <div id="milestones">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="display-4 text-center mt-5">Milestones</h1>
          <div class="mt-4 mb-4 text-center">
            <router-link class="btn btn-primary btn-lg" :to="{name: 'MilestoneForm'}" role="button">Add Milestone
            </router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="jumbotron jumbo-example">
            <h1 class="text-center mb-4">Example: Get a Job</h1>
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
  import fb from '../fb'

  export default {
    name: "Milestones",
    data() {
      return {
        title: 'Test Milestone',
        tasks: [
          {
            title: ''
          }
        ]
      }
    },
    created() {
      fb.db.collection('milestones').where('')
    }
  }
</script>

<style scoped>

</style>