export default[
  {
    path: '/',
    name: 'Home',
    component: () => import("../pages/Authentication")
  },
  {
    path: '/LoginUp',
    name: 'LoginUp',
    component: () => import("../pages/LoginUp")
  },
]
