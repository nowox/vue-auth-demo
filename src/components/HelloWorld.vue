<template>
  <div class="hello">
    <h2>My Counter is <b-badge color="red">{{ counter }}</b-badge></h2>

<div>
  <b-button>Increment</b-button>
  <b-button>Decrement</b-button>
  <b-button>Clear</b-button>
</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Auth Counter Example',
      counter: '0'
    }
  }
}
</script>
