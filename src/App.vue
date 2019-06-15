<template>
  <div id="app">
    <Navigation></Navigation>
    <div class="p-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Navigation from './components/Navigation'

  export default {
    components: {Navigation,}
  }

</script>
