<template>
  <div class="wrapper">
    <div class="search">
      <label for="search">Search</label>
      <input
        id="search"
        name="search"
        v-model="searchValue"
        @input="handleInput"
      />
      <ul>
         <li v-for="elm in results" :key="elm.data[0].nasa_id">
           <p>{{ elm.data[0].description }}</p>
         </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';

const API = 'https://images-api.nasa.gov/search';

export default {
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

<style lang='scss' scoped>
  .wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 30px;
  }
  .search{
    display: flex;
    flex-direction: column;
    width: 300px;

    label{
      font-family: 'Montserrat', sans-serif;
    }

    input{
      display: flex;
      align-content: center;
      height: 30px;
      border: 0;
      border-bottom: 1px solid black;
      font-size: 22px;
      text-align: center;
    }
  }
</style>
