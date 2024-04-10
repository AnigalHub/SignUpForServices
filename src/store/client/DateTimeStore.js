import informationDatabase from '../../../public/informationDatabase.json';
import { searchClient } from '../../../public/searchDatabase'

export default {
  namespaced: true,
  state: {
    title: 'Выбор даты и времени',
    items: [],
  },
  actions: {
    getData(ctx) {
      ctx.state.items = searchClient('1', informationDatabase.my_specialists);
    },
  },
};
