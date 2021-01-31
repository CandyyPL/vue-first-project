<template>
  <input
    id="search"
    name="search"
    autocomplete="off"
    placeholder="e.g. moon"
    :class="{ dark }"
    :value="value"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    value: {
      type: String,
      required: true,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value);
    },
  },
};
</script>

<style lang='scss'>
  input{
    display: flex;
    align-content: center;
    height: 30px;
    margin-top: 80px;
    border: 0;
    border-bottom: 1px solid white;
    font-size: 24px;
    text-align: center;
    background: none;
    color: white;
    transition: box-shadow .4s;

    &:focus{
      outline: none;
      box-shadow: 0 12px 20px -8px rgba(255, 255, 255, .6);

      &::placeholder{
        color: transparent;
      }
    }

    &::placeholder{
      color: #ddd;
    }
  }

  .dark{
    border-bottom-color: #333;
    color: #111;

    &:focus{
      box-shadow: 0 12px 20px -8px rgba(0, 0, 0, .6);

      &::placeholder{
        color: transparent;
      }
    }
  }
</style>
