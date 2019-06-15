<template>
    <div id="milestones">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="display-4 text-center mt-5">Milestones</h1>
                    <div class="mt-4 mb-4 text-center">
                        <router-link class="btn btn-primary btn-lg" :to="{name: 'MilestoneForm'}" role="button">Add Milestone</router-link>
                    </div>
                </div>
            </div>
                <h4 class=" mb-4">Milestone Title</h4>
                <div style="display: inline;">
                    <p>Task</p>
                    <input type="checkbox" name="test" value="test" @click="disabled"/>
                </div>
                <hr>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Milestones",
      data (){
        return {
            title: 'Test Milestone',
            tasks: [
                {
                    title: ''
                }
            ],
            disable: []
        }
      },
      methods: {
        disableCheck (e) {
            this.disable.unshift(e.target.target)
        },
        check (e) {
            let test = this.disable.filter(test => test === e.target.target)
            console.log(test)
        }
      }
  }
</script>

<style scoped>

</style>