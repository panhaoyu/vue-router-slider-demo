<template>
  <router-page id="page">
    <p>This is a page.</p>
    <p>You can add anything you want here.</p>
  </router-page>
</template>

<script>
  export default {
    name: "Page",
    methods: {
      home: function () {
        this.$router.push('/');
      },
      back: function () {
        this.$router.back();
      }
    }
  }
</script>

<style scoped>
  #page {
    background: lightblue;
  }
</style>
