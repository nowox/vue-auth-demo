<template>
  <div v-if="!loggedIn">  
    <b-form class="form-row flex-row-reverse" @submit="onSubmit">
        <div class="col-2">
          <b-button type="submit" variant="outline-success">Login</b-button>
        </div>      
        <div class="col-3">
        <b-form-input id="pass" :state="!$v.form.pass.$invalid" type="password" v-model="form.pass" required placeholder="Password"/>
        </div>        
        <div class="col-3">
        <b-form-input id="email" :state="!$v.form.email.$invalid" type="text" v-model="form.email" required placeholder="Login"/>
        </div>
    </b-form>
  </div>
  <div v-else>
    <b-form @submit="onLogout">
      <b-button type="submit" variant="danger">Logout</b-button>
    </b-form>
  </div>
</template>

<script>
import auth from '../auth'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'Login',
  data () {
    return { 
      form: {}, 
      loggedIn: auth.loggedIn() 
    }
  },
  validations: {
    form: {
      email: {
        required,
        minLength: minLength(4)
      },  
      pass: {
        required,
        minLength: minLength(4)
      },       
    }
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
  },
}
</script>
