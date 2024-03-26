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
    props:{
      name:'SettingsProfile',
      title:'Личные данные'
    }
  },
  {
    path: '/SettingsInterface',
    name: 'SettingsInterface',
    component: () => import("../pages/SettingsInterface"),
    props:{
      name:'SettingsProfile',
      title:'Настройки'
    }
  },
  {
    path: '/new/:name',
    name: 'common',
    component: () => import("../pages/client/Common"),
    props: true
  }
]
