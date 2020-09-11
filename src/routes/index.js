const routes = [
  {
    title: '欢迎页',
    path: '/',
    component: () => import('../components/login'),
  },
  // {
  //   title: '欢迎页',
  //   path: '/welcome',
  //   component: () => import('../components/welcome')
  // },
  // {
  //   title: '关于我们-资质荣誉',
  //   path: '/about-us/honor',
  //   models: () => [import('./models/honor')], // models可多个
  //   component: () => import('../components/about-us/honor')
  // }
];

export default routes;
