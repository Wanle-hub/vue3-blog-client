import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Wanle的个人博客',
    },
  },
  {
    path: '/:id',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/home/_id.vue'),
    meta: {
      title: '文章',
    },
  },
  {
    path: '/categories/:name',
    name: 'Categories',
    component: () => import(/* webpackChunkName: "about" */ '../views/category/_name.vue'),
    meta: {
      title: '分类',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: '关于',
    },
  }
]

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (typeof (to.meta?.title) === 'string') {
    document.title = to.meta?.title;
  }
  next()
})

export default router
