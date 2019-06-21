<template>
  <div>
    <h1>{{page.title}}</h1>
    <div v-html="page.html"></div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      page: this.$store.getters.pages.filter(p => p.id === 'contact')[0]
    }
  }
}
</script>
