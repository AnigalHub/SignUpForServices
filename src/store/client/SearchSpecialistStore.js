import informationDatabase from '../../../public/informationDatabase.json'

export  default  {
  namespaced: true,
  state: {
    title: 'Поиск специалистов',
    items: []
  },
  actions:{
    getData(ctx){
      ctx.state.items = informationDatabase.specialists
    }
  }
}
