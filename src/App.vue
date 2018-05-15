<template>
  <div id="app">
    <b-nav tabs>
      <b-nav-item :to="{ path: 'login'}">Login</b-nav-item>
      <b-nav-item v-if="loggedIn" :to="{ path: 'counter'}">Counter</b-nav-item>
    </b-nav>
    <div class="hello">
    <img src="./assets/logo.png">
    <h1>{{ $route.name }}</h1>
    <router-view/>
    </div>
  </div>
</template>

<script>
import auth from './auth'
export default {
  name: 'App',
  data() {
    return {
      loggedIn: auth.loggedIn()
    }
  },
  create() {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
    }
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
