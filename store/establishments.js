import { establishmentsApi } from '@/api/establishments.api'

import { FETCH_ESTABLISHMENTS } from '@/store-types/actions.type'

export const state = () => ({})

export const mutations = {}

export const getters = {}

export const actions = {
  [FETCH_ESTABLISHMENTS]({ rootState, state, commit }, data) {
    if (data && data.countryId) {
      return establishmentsApi.getByCountry(data.countryId).then((res) => {
        return { list: res.slice(0, 10), totalAmount: res.length }
      })
    } else if (data && data.cityId) {
      return establishmentsApi.getByCity(data.cityId).then((res) => {
        return { list: res.slice(0, 10), totalAmount: res.length }
      })
    } else {
      return establishmentsApi.getAll(data).then((res) => {
        return { list: res, totalAmount: res.length }
      })
    }
  },
}
