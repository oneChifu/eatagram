<template>
  <b-container>
    <EstablishmentsCarousel :type="'top'" />

    <EstablishmentsCarousel :type="'new'" />

    <CitiesCarousel />

    <EstablishmentsCarousel :type="'top'" :city-id="1" />

    <EstablishmentsCarousel :type="'top'" :city-id="2" />
  </b-container>
</template>

<script>
export default {
  name: 'HomePage',

  asyncData(ctx) {
    // console.log('asyncData', ctx)
  },

  // created() {
  //   this.$store.dispatch(HEADER_BG, true)
  // },
}
</script>
