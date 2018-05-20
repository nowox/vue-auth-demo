<template>
  <div id="app">
    <login/>
    <b-nav tabs>
      <b-nav-item :to="{ path: 'counter'}">Counter</b-nav-item>
      <b-nav-item :to="{ path: 'about'}">About</b-nav-item>
    </b-nav>
    <div>
      <h1>{{ $route.name }}</h1>
      <router-view/>
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login'
import About from '@/components/About'

export default {
  name: 'App',
  components: {
    Login,
    About
  }
}
</script>
