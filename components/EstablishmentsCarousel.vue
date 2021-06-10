<template>
  <div class="est_carousel">
    <div class="est_carousel__head">
      <div class="h3">
        {{ types[type || 'new'] }} establishments in
        {{
          cityId
            ? cities.find((e) => e.id === cityId).title
            : currentCountry.title
        }}
      </div>

      <nuxt-link v-if="!establishmentsLoading" :to="{ path: seeAllLink }"
        >See all</nuxt-link
      >
    </div>

    <div class="est_carousel__list">
      <div class="est_carousel__list_inner">
        <b-spinner v-if="establishmentsLoading" variant="primary"></b-spinner>

        <CardEstablishment
          v-for="(item, index) in establishments.list"
          :key="index"
          :data-card="item"
        />

        <nuxt-link
          v-if="
            !establishmentsLoading &&
            establishments.list &&
            establishments.list.length > 2
          "
          to="/"
          class="card_est card_est-seeall"
        >
          <div>See all</div>
          <div>({{ establishments.totalAmount }})</div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import {
  GET_CURRENT_COUNTRY,
  GET_CITIES,
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

    cityId: {
      type: Number,
      default: null,
    },
  },

  data: () => ({
    types: {
      top: 'Top',
      new: 'New',
    },

    establishmentsLoading: true,
    establishments: [],
  }),

  computed: {
    ...mapGetters({
      currentCountry: GET_CURRENT_COUNTRY,
      cities: GET_CITIES,
      currentCity: GET_CURRENT_CITY,
    }),

    seeAllLink() {
      const country = `/country/${this.currentCountry.id}`
      const city = this.cityId ? `/city/${this.cityId}` : ''
      return country + city
    },
  },

  mounted() {
    this.getEstablishments()
  },

  methods: {
    ...mapActions('establishments', [FETCH_ESTABLISHMENTS]),

    getEstablishments() {
      this[FETCH_ESTABLISHMENTS](
        this.cityId
          ? { cityId: this.cityId }
          : { countryId: this.currentCountry.id }
      ).then((res) => {
        this.establishmentsLoading = false
        this.establishments = res
      })
    },
  },
}
</script>
