<template>
  <div>
    <h1 v-html="page.title"></h1>
    <div v-html="page.html"></div>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  data () {
    return {
      page: this.$store.getters.pages.filter(p => p.id === 'registration')[0]
    }
  }
}
</script>
