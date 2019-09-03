import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getter'
import * as actions from './action'
import * as mutations from './mutation'

Vue.use(Vuex)

const state = {
  count: 0,
  history: []
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

if (module.hot) {
  module.hot.accept([
    './getter',
    './action',
    './mutation'
  ], () => {
    store.hotUpdate({
      getters: require('./getter'),
      actions: require('./action'),
      mutations: require('./mutation')
    })
  })
}

export default store