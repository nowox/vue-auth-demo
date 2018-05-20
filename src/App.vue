<template>
  <div id="app" class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Counter Example</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <b-nav-item :to="{ path: 'counter'}">Counter</b-nav-item>
          <b-nav-item :to="{ path: 'about'}">About</b-nav-item>
        </ul>
        <login/>
      </div>
    </nav>
    <div id="content" class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login";
import About from "@/components/About";

export default {
  name: "App",
  components: {
    Login,
    About
  }
};
</script>
