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
  name: 'CountryPage',

  asyncData(ctx) {},
}
</script>
