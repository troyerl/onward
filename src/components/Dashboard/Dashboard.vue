<template>
    <div id="dashboard">
        <p class="test">Dashboard</p>
        <div>
            <p>Level {{level}}</p>
            <div class="levelBar">

            </div>
            <p>Level {{level + 1}}</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Dashboard",
        data(){
            return {
                xp: 0,
                level: 1
            }
        }
    }
</script>

<style scoped>

</style>