<template>
    <div id="milestoneForm">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="display-4 text-center mt-5">Create Milestone</h1>
                    <div class="jumbotron text-center">
                        <div class="form-group">
                            <input type="text" class="form-control" id="title" v-model="title" placeholder="Milestone Name">
                        </div>
                        <div v-for="task in tasks" class="form-group">
                            <input type="text" class="form-control" id="" v-model="task.title" placeholder="New Task">
                        </div>
                        <button class="btn btn-primary btn-lg mr-4" @click="addTask" role="button">Add Task</button>
                        <button class="btn btn-primary btn-lg" @click="createMilestone" role="button">Create Milestone</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "MilestonesForm",
        data (){
            return{
                title: '',
                tasks: [{title: ""}]
            }
        },
        methods: {
            addTask(){
                this.tasks = this.tasks.concat([{ title: "" }])
            },
            createMilestone() {
                let today = new Date()
                let newDate = new Date()
                newDate.setDate(today.getDate()+7)

                this.addMilestone({
                    title: this.title,
                    tasks: this.tasks,
                    dueDate: newDate
                }).then(()=>{
                    this.$router.push({name: 'Milestone'})
                }).catch((err)=>{
                    console.log(err)
                })
            },
            ...mapActions('milestones', [
                'addMilestone'
            ]),
        }
    }
</script>