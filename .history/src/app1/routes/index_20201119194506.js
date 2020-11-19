const routes = [
  {
    title: '消费者端',
    path: '/consumer/:id/',
    component: () => import('../../components/consumer'),
  },
  {
    title: '首页',
    path: '/:id/:shopType?',
    component: () => import('../../components/consumer'),
  },
];

export default routes;
