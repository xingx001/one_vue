<template>
  <div id="app">
   <!--  <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

#app {
  font-family: '微软雅黑';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
.one-img-container img{
  width: 100%;
}
.mint-spinner-fading-circle{
 left: 44%;
}

</style>
