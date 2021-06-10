<template>
  <div class="card_est">
    <nuxt-link :to="`/establishment/${filteredCard.id}`">
      <div class="card_est__top">
        <div class="card_est__img">
          <b-img :src="filteredCard.imgSrc" />
        </div>

        <div class="card_est__rating">
          <b-icon variant="warning" icon="star-fill"></b-icon>
          4.31
        </div>
      </div>

      <div class="card_est__title">{{ filteredCard.title }}</div>

      <div class="card_est__info">
        <div class="card_est__info_check">$$</div>
        <div class="card_est__info_kitchen">Asian, Europen, Italian</div>
        <div class="card_est__info_address">
          <b-icon icon="pin" variant="primary"></b-icon>
          <div>32 Kosmon...</div>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {},

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
      card.imgSrc = require(`~/assets/img/establishments/${card.img}`)
      return card
    },
  },

  methods: {},
}
</script>
