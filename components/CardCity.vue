<template>
  <div class="card_city">
    <nuxt-link
      :to="`/country/${filteredCard.countryId}/city/${filteredCard.id}`"
    >
      <div class="card_city__img">
        <b-img :src="filteredCard.imgSrc" thumbnail rounded="circle" />
      </div>

      <div class="card_city__title">{{ filteredCard.title }}</div>
      <div class="card_city__info">
        <div>1 345 Establisheds</div>
        <div>345 Events</div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    dataCard: {
      type: Object,
      default: () => {},
    },
  },

  data: () => ({}),

  computed: {
    ...mapGetters({}),

    filteredCard() {
      const card = this.dataCard
      card.imgSrc = require(`~/assets/img/cities/${card.img}`)
      return card
    },
  },

  methods: {},
}
</script>
