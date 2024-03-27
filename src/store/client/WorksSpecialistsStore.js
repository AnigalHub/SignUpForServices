import informationDatabase from '../../../public/informationDatabase.json'

export  default  {
  namespaced: true,
  state: {
    title: 'Работы мастеров',
    items: []
  },
  actions:{
    getData(ctx){
      ctx.state.items = informationDatabase.my_specialists
    }
  }
}
