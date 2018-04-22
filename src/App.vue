<template>
  <div id="app">
    <nav class="nav">
      <div @click="$router.back()">Back</div>
      <div @click="$router.push('/')">Home</div>
      <div @click="$router.push('/menu/')">Menu</div>
    </nav>
    <router-slider class="router">
      <router-view></router-view>
    </router-slider>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style scoped>
  .nav {
    width: 100%;
    line-height: 2rem;
  }

  .nav > div {
    text-align: center;
    float: left;
    background: #4a97e6;
  }

  .nav > div:nth-child(1),
  .nav > div:nth-child(3) {
    width: 25%;
  }

  .nav > div:nth-child(2) {
    width: 50%;
  }

  .router {
    position: absolute;
    top: 2rem;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
