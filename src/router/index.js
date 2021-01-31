import Vue from 'vue';
import VueRouter from 'vue-router';
import Claim from '../components/Claim.vue';
// import Search from '../views/Search.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Claim',
    component: Claim,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
