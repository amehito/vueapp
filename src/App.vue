<template>
  <div id="app">
   
   <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <app-nav></app-nav>
    
  </div>
</template>

<script>

import nav from './components/Nav.vue'

export default {
  name: 'app',
  components: {
   'app-nav':nav,
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
