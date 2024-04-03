import informationDatabase from '../../../public/informationDatabase.json'

export  default  {
  namespaced: true,
  state: {
    title: 'Настройки',
    items: []
  },
  actions:{
    getData(ctx){
      ctx.state.items = informationDatabase.themes
    }
  }
}
