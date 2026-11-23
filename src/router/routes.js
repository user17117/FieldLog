const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('@/pages/HomePage.vue') },
      { path: 'prijava', component: () => import('@/pages/LoginPage.vue') },
      { path: 'registracija', component: () => import('@/pages/RegisterPage.vue') },
      { path: 'opazanja', component: () => import('@/pages/ObservationsPage.vue') },
      { path: 'novo-opazanje', component: () => import('@/pages/NewObservationPage.vue') },
      { path: 'opazanje/:id', component: () => import('@/pages/ObservationDetailsPage.vue') },
      { path: 'senzori', component: () => import('@/pages/SensorsPage.vue') },
      { path: 'profil', component: () => import('@/pages/ProfilePage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue')
  }
]

export default routes;
