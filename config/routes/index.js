export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', component: '../pages/index' },
      { path: '/demo', component: '../pages/demo/demo' }
    ]
  },
  // {
  //   name: 'demo',
  //   path: '/demo',
  //   component: '../layouts/BasicLayout',
  //   routes: [
  //     {
  //       path: '/demo/demoone',
  //       name: 'demoone',
  //       component: '../pages/demo/demo',
  //     },
  //   ]
  // },
  // {
  //   name: 'example',
  //   path: '/example',
  //   component: '../layouts/BasicLayout',
  //   routes: [
  //     {
  //       path: '/example/exampleone',
  //       name: 'exampleone',
  //       component: '../pages/example/example',
  //     },
  //   ]
  // }
]