<template>
  <b-container>
    <EstablishmentsCarousel :type="'top'" />

    <EstablishmentsCarousel :type="'new'" />

    <!-- <EstablishmentsCarousel :type="'top'" :city="1" /> -->

    <!-- <EstablishmentsCarousel :type="'top'" :city="2" /> -->
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
