const routes = [
  {
    name: 'index',
    path: process.env.VUE_APP_BASE_URL || '/',
    redirect: {
      name: 'home'
    },
    component: () => import('@/views/Page.vue'),
    children: [
      {
        name: 'home',
        path: ''
      },
      {
        name: 'contacts',
        path: 'contacts'
      },
      {
        name: 'skills',
        path: 'skills'
      }
    ]
  },
  {
    path: '*',
    redirect: process.env.VUE_APP_BASE_URL || '/'
  }
]
export default routes
