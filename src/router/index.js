import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: {
      template: "<div>home</div>"
    }
  },
  {
    path: '/about',
    component: {
      template: "<div>about</div>"
    }
  }
];

const router = new Router({ routes });

export default router;