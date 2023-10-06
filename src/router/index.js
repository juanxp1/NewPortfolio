// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/project',
        name: 'Project',
        component: () => import('@/components/Proyectos.vue')
      },
      {
        path: '/skill',
        name: 'Skill',
        component: () => import('@/components/Skill.vue')
      },
      {
        path: '/education',
        name: 'Education',
        component: () => import('@/components/Education.vue')
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/components/Contact.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/components/About.vue')
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
