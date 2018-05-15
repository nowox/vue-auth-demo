<template>
  <div>
    <h2>My Counter is <b-badge variant="primary">{{ counter }}</b-badge></h2>
    <div>
      <b-button variant="success">Increment</b-button>
      <b-button variant="secondary">Decrement</b-button>
      <b-button variant="danger">Clear</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data () {
    return {
      counter: 0
    }
  }
}
</script>
