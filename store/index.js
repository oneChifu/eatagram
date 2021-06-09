import {
  SET_CURRENT_COUNTRY,
  SET_CURRENT_CITY,
} from '@/store-types/mutations.type'

import {
  GET_CURRENT_COUNTRY,
  GET_CURRENT_CITY,
} from '@/store-types/getters.type'

export const state = () => ({
  currentCountry: {
    name: 'England',
    code: 'uk',
  },
  currentCity: {},
})

export const mutations = {
  [SET_CURRENT_COUNTRY](state, value) {
    state.currentCountry = value
  },

  [SET_CURRENT_CITY](state, value) {
    state.currentCity = value
  },
}

export const getters = {
  [GET_CURRENT_COUNTRY](state) {
    return state.currentCountry
  },

  [GET_CURRENT_CITY](state) {
    return state.currentCity
  },
}

export const actions = {}
