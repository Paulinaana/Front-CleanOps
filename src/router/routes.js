
const routes = [
  {
    path: '/Login',
    component: () => import('pages/Login.vue')
    /* children: [
      { path:'Login',name:'Login-register',component:()=>import('src/layouts/Login.vue')},
    ] */
  },
  {
    path: '/OperationCheif',name:'operationcheif',
    component: () => import('src/layouts/OperationCheif.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
