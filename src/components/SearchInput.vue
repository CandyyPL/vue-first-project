<template>
  <div class="searchWrapper">
    <input
      id="search"
      name="search"
      v-model="searchValue"
      @input="handleInput"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
};
</script>

<style lang='scss'>
  .searchWrapper{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    width: 300px;

    input{
      display: flex;
      align-content: center;
      height: 30px;
      border: 0;
      border-bottom: 1px solid white;
      font-size: 22px;
      text-align: center;
      background: none;
    }
  }
</style>
