<script >
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain,
  }
}
</script>

<template>
  <div class="container">
    <AppHeader></AppHeader>
    <AppMain></AppMain>
  </div>
</template>

<style lang="scss">
@use './assets/general.scss';
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container{
  background-color: black;
  width: 100%;
  height: 100%;
}
</style>
