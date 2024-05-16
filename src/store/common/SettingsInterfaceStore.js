import informationDatabase from '../../../public/informationDatabase.json';

export default {
  namespaced: true,
  state: {
    title: 'Настройки',
    items: informationDatabase.themes,
    currentTheme: 'light',
    systemTheme: 'light',
  },
  actions: {
    getData(ctx) {
      ctx.state.items = informationDatabase.themes;
    },
    loadTheme(ctx){
      let setSystemTheme = () => {
        let systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        ctx.state.systemTheme = systemTheme;
       ctx.dispatch('setTheme', systemTheme)
      }
      window.matchMedia('(prefers-color-scheme: dark)').addListener(function () {
        setSystemTheme()
      });
      setSystemTheme()
    },
  },
  mutations: {
    selectTheme(state, payload){
      state.currentTheme = payload;
    },
  },
  getters: {
    CurrentTheme: (state) => state.currentTheme,
  },
};
