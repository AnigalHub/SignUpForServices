import informationDatabase from '../../../public/informationDatabase.json';
import { searchClient } from '../../../public/searchDatabase';

export default {
  namespaced: true,
  state: {
    title: 'Личные данные',
    items: [],
  },
  actions: {
    getData(ctx) {
      ctx.state.items = searchClient('22', informationDatabase.clients);
    },
  },
};
