const routes = [
  {
    title: '消费者端',
    path: '/consumer/:id/',
    component: () => import('../../components/consumer'),
  },
];

export default routes;
