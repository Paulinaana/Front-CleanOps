
const routes = [
  {
    path: '/supervisor',
    component: () => import('layouts/SupervisorLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SupervisorIndex.vue') },
      { path: 'profile', component: () => import('pages/EditProfile.vue')},

      { path: 'users', component: () => import('pages/SupervisorUserManager.vue')},
      { path: 'users/edit', component: () => import('pages/SupervisorUserProfile.vue')},

      { path: 'areas', component: () => import('pages/SupervisorAreaManager.vue')},
      { path: 'areas/edit', component: () => import('pages/SupervisorAreaProfile.vue')},

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
