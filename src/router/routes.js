const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/payment', component: () => import('pages/Payment/PaymentIndex.vue') },
      { path: '/verification', component: () => import('pages/Verification/VerificationIndex.vue') },
      { path: '/data', component: () => import('pages/Data/DataIndex.vue') },
      { path: '/question', component: () => import('pages/Question/QuestionIndex.vue') },
      { path: '/finalresult', component: () => import('pages/Result/ResultIndex.vue') },
    ]
  },
  {
    path: '/Auth',
    component: () => import('src/pages/Auth/TempAuth.vue'),
    children: [
      {  path: '/login', name: 'LoginPage', component: () => import('pages/Auth/LoginPage.vue') },
      {  path: '/register', component: () => import('pages/Auth/RegisterPage.vue') },
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
