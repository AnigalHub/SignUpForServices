import informationDatabase from '../../../public/informationDatabase.json'
import { searchEntries } from '../../../public/searchDatabase'

export  default  {
  namespaced: true,
  state: {
    title: 'Карты лояльности',
    items: []
  },
  actions:{
    getData(ctx){
      ctx.state.items = searchEntries('22',informationDatabase.specialists,informationDatabase.entries)
    }
  }
}
