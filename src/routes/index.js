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
  {
    path: '/Registration',
    name: 'Registration',
    component: () => import("../pages/Registration")
  },
  {
    path: '/SearchSpecialist',
    name: 'SearchSpecialist',
    component: () => import("../pages/client/SearchSpecialist")
  },
  {
    path: '/MySpecialists',
    name: 'MySpecialists',
    component: () => import("../pages/client/MySpecialists")
  },
]
