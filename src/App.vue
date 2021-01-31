<template>
  <div class="app">
    <div :class="[{ flexStart: step == 1 }, 'wrapper']">
      <transition name="slide">
        <span class="logo" v-if="step == 1">SPACER</span>
      </transition>
      <transition name="fade">
        <BackImage v-if="step == 0" />
      </transition>
      <Claim v-if="step == 0" />
      <SearchInput
        v-model="searchValue"
        @input="handleInput"
        :dark="step == 1"
      />
      <div class="results" v-if="results && !loading && step == 1">
        <Item v-for="item in results" :item="item" :key="item.data[0].nasa_id" />
      </div>
    </div>
  </div>
</template>

<script>
import Claim from '@/components/Claim.vue';
import SearchInput from '@/components/SearchInput.vue';
import BackImage from '@/components/BackImage.vue';
import Item from '@/components/Item.vue';
import axios from 'axios';
import debounce from 'lodash.debounce';

const API = 'https://images-api.nasa.gov/search';

export default {
  components: {
    Claim,
    SearchInput,
    BackImage,
    Item,
  },
  name: 'App',
  data() {
    return {
      searchValue: '',
      results: [],
      loading: false,
      step: 0,
    };
  },
  methods: {
    // eslint-disable-next-line
    handleInput: debounce(function() {
      this.loading = true;
      axios.get(`${API}?q=${this.searchValue}&media_type=image`)
        .then((res) => {
          this.loading = false;
          this.step = 1;
          this.results = res.data.collection.items;
          console.log(res.data.collection.items);
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

  .fade-enter-active, .fade-leave-active{
    transition: opacity .2s;
  }

  .fade-enter, .fade-leave-to{
    opacity: 0;
  }

  .slide-enter-active, .slide-leave-active{
    transition: margin-top .4s ease;
  }

  .slide-enter, .slide-leave-to{
    margin-top: -50px;
  }

  .wrapper{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    margin: 0;
    padding: 30px;

    .logo{
      position: absolute;
      top: 30px;
      width: 100px;
      text-align: center;
      color: black;
      font-size: 20px;
      font-weight: 800;
    }

    &.flexStart{
      justify-content: flex-start;
    }

    .results{
      margin-top: 100px;
      width: fit-content;
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 30px;
      row-gap: 30px;
      // transform: translateX(-60px);

      @media (min-width: 768px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }
    }
  }
</style>
