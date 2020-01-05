export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', component: '../pages/index' },
      { path: '/demo', component: '../pages/demo/demo' },
      { path: '/example', component: '../pages/example/example' },
      {
        component: './404',
      },
    ]
  },
  {
    component: './404',
  },
]