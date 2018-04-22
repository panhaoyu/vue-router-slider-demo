<template>
  <router-page id="menu">
    <p>This is menu.</p>
    <p>You can put some links here.</p>
    <hr>
    <div @click="$router.push('/page/')">Go to a page.</div>
    <hr>
    <div @click="$router.push('/page/')">Go to a page.</div>
    <hr>
    <div @click="$router.push('/page/')">Go to a page.</div>
    <hr>
    <div @click="$router.push('/page/')">Go to a page.</div>
    <hr>
  </router-page>
</template>

<script>
  export default {
    name: "Menu",
    methods: {
      click: function () {
        this.$router.push('/page/');
      }
    }
  }
</script>

<style scoped>
  #menu {
    background: lightpink;
  }

  #menu > div {
    line-height: 2rem;
    float: left;
    width: 100%;
    text-align: center;
  }
</style>
