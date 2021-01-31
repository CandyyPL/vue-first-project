<template>
  <div class="backImage"></div>
</template>

<script>
export default {

};
</script>

<style lang='scss'>
  .backImage{
    position: fixed;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    background-image: url('../assets/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 0%;

    &::after{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.2);
    }
  }
</style>
