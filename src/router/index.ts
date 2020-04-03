import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import Introduction from '../../example/introduction.vue';
import Main from '../../example/Index.vue';
import Button from '../../example/docs/Button.md';
import Checkbox from '../../example/docs/Checkbox.md';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Main,
    redirect: '/introduction',
    children: [
      {
        path: 'button',
        name: 'button',
        component: Button
      },
      {
        path: 'introduction',
        name: 'introduction',
        component: Introduction
      },
      {
        path: 'checkbox',
        name: 'checkbox',
        component: Checkbox
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
