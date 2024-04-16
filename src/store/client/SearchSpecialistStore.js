import informationDatabase from '../../../public/informationDatabase.json';

export default {
  namespaced: true,
  state: {
    title: 'Поиск специалистов',
    items: [],
    search:'Кристина'
  },
  actions: {
    getData(ctx) {
      let newArray = [];
      const search = ctx.state.search;
      informationDatabase.specialists.forEach((el)=>{
        if (el.name === search || el.name.toLowerCase() === search) newArray.push(el);
      })
      ctx.state.items = newArray;
    },
  },
};
