<template>
  <div id="app">
    <b-nav tabs>
      <b-nav-item :to="{ path: 'login'}">Login</b-nav-item>
      <b-nav-item :to="{ path: 'counter'}">Counter</b-nav-item>
    </b-nav>
    <div class="hello">
    <img src="./assets/logo.png">
    <h1>{{ $route.name }}</h1>
    <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
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
