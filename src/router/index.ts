import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import Introduction from '../../example/introduction.vue';
import Main from '../../example/Index.vue';
import Button from '../../example/docs/Button.md';
import Checkbox from '../../example/docs/Checkbox.md';
import Menu from '../../example/docs/Menu.md';
import Table from '../../example/docs/Table.md';
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
      },
      {
        path: 'menu',
        name: 'menu',
        component: Menu
      },
      {
        path:'table',
        name:'table',
        component:Table,
      },
    ]
  },
  
  
];

const router = new VueRouter({
  
  routes
});

export default router;
