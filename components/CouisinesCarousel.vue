<template>
  <div class="couisines_carousel">
    <div class="couisines_carousel__head">
      <div class="h3">
        {{ cities.find((e) => e.id === cityId).title }}: by type of cuisine
      </div>
    </div>

    <div class="couisines_carousel__list">
      <div class="couisines_carousel__list_inner">
        <CardCouisine
          v-for="(item, index) in couisines"
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
  props: {
    cityId: {
      type: Number,
      default: null,
    },
  },

  data: () => ({
    couisines: [
      {
        id: 1,
        title: 'Cafe',
        img: 'cafe.jpg',
      },
      {
        id: 2,
        title: 'Sushi',
        img: 'sushi.jpg',
      },
      {
        id: 3,
        title: 'Steak',
        img: 'steak.jpg',
      },
      {
        id: 4,
        title: 'Coffee',
        img: 'coffee.jpg',
      },
      {
        id: 5,
        title: 'Italian',
        img: 'italian.jpg',
      },
    ],
  }),

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
