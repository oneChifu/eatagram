<template>
  <div class="est_carousel">
    <div class="est_carousel__head">
      <div class="h3">
        {{ types[type] }} establishments in {{ currentCountry.name }}
      </div>

      <nuxt-link :to="{ path: `/filter?country=${currentCountry.id}` }"
        >See all</nuxt-link
      >
    </div>

    <div class="est_carousel__list">
      <div class="est_carousel__list_inner">
        <CardEstablishment
          v-for="item in establishments"
          :key="item.id"
          :card="item"
        />

        <nuxt-link to="/" class="card_est card_est-seeall">
          <div>See all</div>
          <div>(100)</div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import {
  GET_CURRENT_COUNTRY,
  GET_CURRENT_CITY,
} from '@/store-types/getters.type'
import { FETCH_ESTABLISHMENTS } from '@/store-types/actions.type'

export default {
  components: {},

  props: {
    type: {
      type: String,
      default: '',
    },

    city: {
      type: Number,
      default: null,
    },
  },

  data: () => ({
    types: {
      top: 'Top',
      new: 'New',
    },

    establishments: {},
  }),

  computed: {
    ...mapGetters({
      currentCountry: GET_CURRENT_COUNTRY,
      currentCity: GET_CURRENT_CITY,
    }),
  },

  mounted() {
    this.getEstablishments()
  },

  methods: {
    ...mapActions('establishments', [FETCH_ESTABLISHMENTS]),

    getEstablishments() {
      this[FETCH_ESTABLISHMENTS]().then((res) => {
        this.establishments = res
      })
    },
  },
}
</script>
