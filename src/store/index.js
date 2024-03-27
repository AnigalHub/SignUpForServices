import Vue from 'vue'
import Vuex from 'vuex'

import SearchSpecialist from './client/SearchSpecialistStore'
import MySpecialists from './client/MySpecialistsStore'
import MyEntries from './client/MyEntriesStore'
import MyCards from './client/MyCardsStore'
import WorksSpecialists from './client/WorksSpecialistsStore'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    SearchSpecialist,
    MySpecialists,
    MyCards,
    MyEntries,
    WorksSpecialists
  }
})
