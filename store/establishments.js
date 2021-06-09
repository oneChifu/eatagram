import { establishmentsService } from '@/api/establishments.service'

import { FETCH_ESTABLISHMENTS } from '@/store-types/actions.type'

export const state = () => ({})

export const mutations = {}

export const getters = {}

export const actions = {
  [FETCH_ESTABLISHMENTS]({ state, commit }, data) {
    console.log('STATE', state)
    return establishmentsService.get(data).then((res) => {
      return res
    })
  },
}
