import { locationsCountriesApi, locationsCitiesApi } from '@/api/locations.api'

import {
  SET_COUNTRIES,
  SET_CITIES,
  SET_CURRENT_COUNTRY,
  SET_CURRENT_CITY,
} from '@/store-types/mutations.type'

import {
  GET_COUNTRIES,
  GET_CITIES,
  GET_CURRENT_COUNTRY,
  GET_CURRENT_CITY,
} from '@/store-types/getters.type'

import { FETCH_COUNTRIES, FETCH_CITIES } from '@/store-types/actions.type'

export const state = () => ({
  countries: [],
  cities: [],
  currentCountry: {
    id: 1,
    title: 'England',
    code: 'uk',
    status: 1,
  },
  currentCity: {},
})

export const mutations = {
  [SET_COUNTRIES](state, data) {
    state.countries = data
  },

  [SET_CITIES](state, data) {
    state.cities = data
  },

  [SET_CURRENT_COUNTRY](state, data) {
    state.currentCountry = data
  },

  [SET_CURRENT_CITY](state, data) {
    state.currentCity = data
  },
}

export const getters = {
  [GET_COUNTRIES](state) {
    return state.countries
  },

  [GET_CITIES](state) {
    return state.cities
  },

  [GET_CURRENT_COUNTRY](state) {
    return state.currentCountry
  },

  [GET_CURRENT_CITY](state) {
    return state.currentCity
  },
}

export const actions = {
  async nuxtServerInit({ state, commit, dispatch, rootState }, { req }) {
    await dispatch(FETCH_COUNTRIES)
    await dispatch(FETCH_CITIES)
  },

  [FETCH_COUNTRIES]({ commit }) {
    return locationsCountriesApi.getAll().then((res) => {
      commit(SET_COUNTRIES, res)
    })
  },

  [FETCH_CITIES]({ state, commit }) {
    if (!state.currentCountry.id) return

    return locationsCitiesApi
      .getByCountry(state.currentCountry.id)
      .then((res) => {
        commit(SET_CITIES, res)
      })
  },
}
