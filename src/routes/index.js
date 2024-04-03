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
    path: '/Entry',
    name: 'Entry',
    component: () => import("../pages/client/MenuClientArea"),
    props:{
      name:'Entry',
      title:'Запись'
    }
  },
  {
    path: '/Prices',
    name: 'Prices',
    component: () => import("../pages/client/MenuClientArea"),
    props:{
      name:'Prices',
      title:'Прайс услуг'
    }
  },
  {
    path: '/DateTime',
    name: 'DateTime',
    component: () => import("../pages/client/MenuClientArea"),
    props:{
      name:'DateTime',
      title:'Выбор даты и времени'
    }
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
    component: () => import("../pages/client/Common"),
    props: true
  }
]
