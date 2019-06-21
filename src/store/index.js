import Vue from 'vue'
import Vuex from 'vuex'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pages: [],
    events: [],
    games: []
  },
  strict: debug,
  getters: {
    pages: state => state.pages,
    events: state => state.events,
    games: state => state.games
  },
  mutations: {
    loadedData (state, payload) {
      state.pages = payload.data.pages
      state.events = payload.data.events
      state.games = payload.data.games
    }
  },
  actions: {
    fetchData (context) {
      fetch('https://api.myjson.com/bins/12wy45').then(response => {
        return response.json()
      }).then(data => {
        context.commit({
          type: 'loadedData',
          data
        })
      })
    }
  }
})
