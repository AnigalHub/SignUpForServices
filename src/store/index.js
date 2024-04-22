import Vue from 'vue';
import Vuex from 'vuex';

import SearchSpecialist from './client/SearchSpecialistStore';
import MySpecialists from './client/MySpecialistsStore';
import MyEntries from './client/MyEntriesStore';
import MyCards from './client/MyCardsStore';
import WorksSpecialists from './client/WorksSpecialistsStore';
import Entry from './client/EntryStore';
import DateTime from './client/DateTimeStore';
import Prices from './client/PricesStore';
import Portfolio from './client/PortfolioStore';
import Works from './client/WorksStore';

import SettingsInterface from './common/SettingsInterfaceStore';
import SettingsProfile from './common/SettingsProfileStore';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    SearchSpecialist,
    MySpecialists,
    MyCards,
    MyEntries,
    WorksSpecialists,
    Entry,
    DateTime,
    Prices,
    Portfolio,
    Works,

    SettingsInterface,
    SettingsProfile,
  },
});
