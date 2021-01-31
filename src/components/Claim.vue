<template>
  <div class='claimWrapper'>
    <h1 class='claim'>SPACER</h1>
    <p class='subclaim'>
      Begin your journey through our amazing galaxy,
      and discover places you never even heard of.
    </p>
    <p class='subclaim'>
      Type anything space-related to start.
    </p>
  </div>
</template>

<script>
export default {

};
</script>

<style lang='scss' scoped>
  .claimWrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 20vh;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .claim{
      margin: 0;
      font-size: 75px;

      @media (min-width: 768px){
          font-size: 100px;
      }

      @media (min-width: 1024px){
          letter-spacing: 2px;
      }
  }

  .subclaim{
      margin: 20px 0 0 0;
      font-size: 13px;
      font-weight: 400;

      @media (min-width: 768px){
          font-size: 18px;
          line-height: 1.5;
          letter-spacing: 1px;
          width: 500px;
      }
  }
</style>
