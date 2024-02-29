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
    component: () => import("../pages/client/MenuClientArea"),
    props:{
      name:'SearchSpecialist',
      title:'Поиск специалиста'
    }
  },
  {
    path: '/MySpecialists',
    name: 'MySpecialists',
    component: () => import("../pages/client/MenuClientArea"),
    props:{
      name:'MySpecialists',
      title:'Мои специалисты'
    }
  },
  {
    path: '/MyEntries',
    name: 'MyEntries',
    component: () => import("../pages/client/MenuClientArea"),
    props:{
      name:'MyEntries',
      title:'Мои записи'
    }
  },
  {
    path: '/MyCards',
    name: 'MyCards',
    component: () => import("../pages/client/MenuClientArea"),
    props:{
      name:'MyCards',
      title:'Карты лояльности'
    }
  },
  {
    path: '/WorksSpecialists',
    name: 'WorksSpecialists',
    component: () => import("../pages/client/MenuClientArea"),
    props:{
      name:'WorksSpecialists',
      title:'Работы мастеров'
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
]
