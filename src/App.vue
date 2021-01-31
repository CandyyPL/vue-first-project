<template>
  <div class="app">
    <div class="wrapper">
      <Claim />
      <SearchInput />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';
import Claim from '@/components/Claim.vue';
import SearchInput from '@/components/SearchInput.vue';

const API = 'https://images-api.nasa.gov/search';

export default {
  components: {
    Claim,
    SearchInput,
  },
  name: 'Search',
  data() {
    return {
      searchValue: '',
      results: [],
    };
  },
  methods: {
    // eslint-disable-next-line
    handleInput: debounce(function() {
      axios.get(`${API}?q=${this.searchValue}&media_type=image`)
        .then((res) => {
          this.results = res.data.collection.items;
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1000),
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;800&display=swap');

  *{
    box-sizing: border-box;
  }

  body{
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    margin: 0;
    border: 0;
  }

  .wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 30px;
    background-image: url('../assets/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
