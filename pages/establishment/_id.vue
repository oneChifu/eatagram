<template>
  <b-container>
    <div class="h1">
      {{ establishment.title }}
    </div>

    <b-img :src="establishment.imgSrc" thumbnail />
  </b-container>
</template>

<script>
import { FETCH_ESTABLISHMENTS } from '@/store-types/actions.type'

export default {
  name: 'CityPage',

  async asyncData(ctx) {
    const establishments = await ctx.app.store.dispatch(
      `establishments/${FETCH_ESTABLISHMENTS}`
    )
    return { establishments }
  },

  data: () => ({
    establishmentsLoading: true,
    establishments: [],
  }),

  computed: {
    establishment() {
      return this.establishments.list
        .filter((item) => item.id === Number(this.$nuxt.$route.params.id))
        .map((item) => {
          item.imgSrc = require(`~/assets/img/establishments/${item.img}`)
          return item
        })[0]
    },
  },

  mounted() {},

  methods: {},
}
</script>
