<template>
  <b-container>
    <EstablishmentsCarousel :type="'top'" :city-id="Number($route.params.id)" />

    <EstablishmentsCarousel :type="'new'" :city-id="Number($route.params.id)" />

    <CouisinesCarousel :city-id="Number($route.params.id)" />
  </b-container>
</template>

<script>
export default {
  name: 'CityPage',

  asyncData(ctx) {},

  computed: {},
}
</script>
