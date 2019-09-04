import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getter'
import * as actions from './action'
import * as mutations from './mutation'

Vue.use(Vuex)

const state = {
  count: 0,
  mode: 'light',
  history: []
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store