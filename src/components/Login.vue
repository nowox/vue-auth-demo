<template>
  <div v-if="!loggedIn">
    <b-container fluid>
      <b-form @submit="onSubmit">
        <b-form-group id="auth" label="Login:" label-for="login">
          <b-form-input id="email" type="text" v-model="form.email" required placeholder="Login"/>
          <b-form-input id="pass" type="password" v-model="form.pass" required placeholder="Password"/>
        </b-form-group>
        <b-button type="submit" variant="primary">Login</b-button>
      </b-form>
    </b-container>
  </div>
  <div v-else>
    <b-form @submit="onLogout">
      <b-button type="submit" variant="danger">Logout</b-button>
    </b-form>
  </div>
</template>

<script>
import auth from '../auth'
export default {
  name: 'Login',
  data () {
    return { form: {}, loggedIn: auth.loggedIn() }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      auth.login(this.form.email, this.form.pass, loggedIn => {
        if (!loggedIn) {
          this.error = true
        } else {
          this.$router.replace(this.$route.query.redirect || '/counter')
        }
      })
    },
    onLogout (evt) {
      evt.preventDefault();
      auth.logout()
      this.loggedIn = auth.loggedIn()
    }    
  }
}
</script>
