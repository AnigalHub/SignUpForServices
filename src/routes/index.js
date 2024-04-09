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
    path: '/SettingsProfile',
    name: 'SettingsProfile',
    component: () => import("../pages/SettingsProfile"),
    props: true
  },
  {
    path: '/SettingsInterface',
    name: 'SettingsInterface',
    component: () => import("../pages/SettingsInterface"),
    props: true
  },
  {
    path: '/client/:name',
    name: 'common',
    component: () => import("../pages/ClientCommon"),
    props: true
  }
]
