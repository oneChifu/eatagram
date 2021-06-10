<template>
  <div class="card_couisine">
    <div>
      <div class="card_couisine__img">
        <b-img :src="filteredCard.imgSrc" thumbnail rounded="circle" />
      </div>

      <div class="card_couisine__title">{{ filteredCard.title }}</div>
    </div>
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
      card.imgSrc = require(`~/assets/img/couisines/${card.img}`)
      return card
    },
  },

  methods: {},
}
</script>
