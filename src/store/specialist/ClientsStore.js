import informationDatabase from '../../../public/informationDatabase.json';

export default {
  namespaced: true,
  state: {
    title: 'Мои клиенты',
    items: [],
  },
  actions: {
    getData(ctx) {
      ctx.state.items = informationDatabase.clients;
    },
  },
};
