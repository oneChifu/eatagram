<template>
  <header class="header">
    <div class="header__bg" :class="headerBgClass"></div>

    <b-container class="position-relative h-100">
      <b-navbar variant="faded" type="light">
        <div class="header__logo">
          <nuxt-link to="/"
            ><b-img src="@/assets/img/logo-white.svg" alt="Eatagram"
          /></nuxt-link>
        </div>

        <b-navbar-nav class="ml-auto">
          <b-dropdown text="EN" right size="sm" variant="dark" class="mr-3">
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">UA</b-dropdown-item>
          </b-dropdown>

          <b-button variant="dark" size="sm" @click="showAuth = 'login'"
            >Log in</b-button
          >
        </b-navbar-nav>
      </b-navbar>

      <div class="header__search">
        <div class="header__search_title">
          Find the best places and the most interesting events in your city
        </div>

        <div class="header__search_input">
          <b-form-input
            v-model="searchValue"
            placeholder="Search"
            trim
            @keydown.stop="search"
          ></b-form-input>

          <div class="header__search_icon">
            <b-icon
              v-if="!searchLoading"
              variant="primary"
              icon="search"
            ></b-icon>

            <b-spinner v-if="searchLoading" variant="primary" small></b-spinner>
          </div>

          <b-button
            v-if="cityId"
            variant="dark"
            class="header__search_city"
            size="lg"
            >{{ cities.find((e) => e.id === cityId).title }}</b-button
          >
        </div>
      </div>
    </b-container>

    <ModalAuth :show="showAuth" @hidden="showAuth = ''" />
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import { GET_CITIES } from '@/store-types/getters.type'

export default {
  components: {},

  data: () => ({
    headerBgShow: false,
    headerBgSrc: '',
    searchValue: '',
    searchTimeout: '',
    searchLoading: false,
    showAuth: '',
  }),

  computed: {
    ...mapGetters({
      cities: GET_CITIES,
    }),

    cityId() {
      const path = this.$route.path.split('/')

      return path[path.findIndex((e) => e === 'city') + 1] | null
    },

    headerBgClass() {
      if (!this.headerBg) {
        return 'header__bg-default'
      } else {
        return `header__bg-${this.$nuxt.$route.name}`
      }
    },
  },

  watch: {
    headerBg(val) {
      let timeout = ''

      if (!this.headerBgSrc) {
        this.headerBgSrc = val
        this.headerBgShow = true
      } else {
        this.headerBgShow = false

        clearTimeout(timeout)
        timeout = setTimeout(() => {
          this.headerBgSrc = val
          this.headerBgShow = true
        }, 500)
      }
    },
  },

  created() {},

  methods: {
    search() {
      clearTimeout(this.searchTimeout)

      this.searchLoading = true

      this.searchTimeout = setTimeout(() => {
        this.searchLoading = false
      }, 500)
    },
  },
}
</script>
