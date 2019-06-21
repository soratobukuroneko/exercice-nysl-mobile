<template>
<div id="app">
  <div v-for="event in this.$store.getters.events" :key="uuid(event)">
    <h2>{{event.date}}</h2>
    <p>{{event.event}}</p>
  </div>
</div>
</template>

<script>
import uuidv1 from 'uuid/v1'

export default {
  name: 'Home',
  methods: {
    uuid: payload => uuidv1(payload)
  }
}
</script>

<style scoped>
p {
  text-indent: 1em
}
</style>
