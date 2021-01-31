<template>
  <div class="outerWrapper">
    <div class="innerWrapper">
      <div class="photo">
        <img src="https://images-assets.nasa.gov/image/PIA12235/PIA12235~thumb.jpg">
      </div>
      <div class="description">
        <h2 class="title">Lorem ipsum</h2>
        <p class="desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Aliquid, aperiam. Quidem doloribus dolorem facilis.
          Minus eos repudiandae in qui eaque? Velit perspiciatis ea
          sapiente sunt, itaque dolores minima praesentium, iusto,
          tempore ullam veritatis suscipit beatae.
        </p>
      </div>
    </div>
    <div class="close" @click='$emit("closeModal")'></div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
};
</script>

<style lang='scss' scoped>
  .outerWrapper{
    background-color: #f6f6f6;
    max-width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    border-radius: 5px;

    @media (min-width: 1024px){
      max-width: 70%;
      height: 60%;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      box-shadow: 0 30px 30px -10px rgba(0, 0, 0, .3);
    }
  }

  .close{
    position: absolute;
    width: 30px;
    height: 30px;
    padding: 30px;
    right: 0;
    top: 0;
    cursor: pointer;

    &::before,
    &::after{
      position: absolute;
      top: 30px;
      right: 20px;
      content: '';
      width: 20px;
      height: 2px;
      background: black;
      display: block;
    }

    &::before{
      transform: rotate(45deg);
    }

    &::after{
      transform: rotate(-45deg);
    }
  }

  .innerWrapper{
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 50px;
    justify-content: center;
    align-items: center;
    color: #111;

    @media (min-width: 1024px){
      flex-direction: row;

      .photo{
        min-width: 50%;
        margin-right: 20px;
      }
    }

    .photo{
      width: 100%;
      height: auto;

      img{
        width: 100%;
      }
    }
  }
</style>
