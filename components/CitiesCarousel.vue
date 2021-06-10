<template>
  <div class="cities_carousel">
    <div class="cities_carousel__head">
      <div class="h3">Popular cities</div>
    </div>

    <div class="cities_carousel__list">
      <div class="cities_carousel__list_inner">
        <CardCity
          v-for="(item, index) in cities"
          :key="index"
          :data-card="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {
  GET_CURRENT_COUNTRY,
  GET_CITIES,
  GET_CURRENT_CITY,
} from '@/store-types/getters.type'

export default {
  components: {},

  data: () => ({}),

  computed: {
    ...mapGetters({
      currentCountry: GET_CURRENT_COUNTRY,
      cities: GET_CITIES,
      currentCity: GET_CURRENT_CITY,
    }),
  },

  mounted() {},

  methods: {},
}
</script>
