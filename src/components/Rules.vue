<template>
  <div>
    <h1 v-html="page.title"></h1>
    <div v-html="page.html"></div>
  </div>
</template>

<script>
export default {
  name: 'Rules',
  data () {
    return {
      page: this.$store.getters.pages.filter(p => p.id === 'rules')[0]
    }
  }
}
</script>
