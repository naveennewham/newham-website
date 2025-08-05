import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { title: 'Home' }
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/ProductView.vue'),
      meta: { title: 'Deepcost - AI-Powered Estimation' }
    },
    {
      path: '/deeptrack',
      name: 'deeptrack',
      component: () => import('../views/DeepTrackView.vue'),
      meta: { title: 'DeepTrack - Intelligent Project Management' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { title: 'About Us' }
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue'),
      meta: { title: 'Services' }
    },
    {
      path: '/industries',
      name: 'industries',
      component: () => import('../views/IndustriesView.vue'),
      meta: { title: 'Industries' }
    },
    {
      path: '/case-studies',
      name: 'case-studies',
      component: () => import('../views/CaseStudiesView.vue'),
      meta: { title: 'Case Studies' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: { title: 'Contact Us' }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update page title based on route meta
router.beforeEach((to, from, next) => {
  document.title = to.meta.title 
    ? `${to.meta.title} | Newham - Construction Technology & Software Solutions` 
    : 'Newham - Construction Technology & Software Solutions'
  next()
})

export default router
