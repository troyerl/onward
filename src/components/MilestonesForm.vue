<template>
    <div id="milestoneForm">
        <button @click="createMilestone">Test Add Milestone</button>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "MilestonesForm",
        methods: {
            createMilestone() {
                this.addMilestone({
                    title: 'Milestone 1',
                    tasks: [
                        {
                            title: 'task 1',
                        },
                        {
                            title: 'task 2',
                        },
                        {
                            title: 'task 3',
                        },
                    ],
                    dueDate: Date.now(),
                })
            },
            ...mapActions('milestones', [
                'addMilestone'
            ])
        }
    }
</script>