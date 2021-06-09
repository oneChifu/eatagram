<template>
  <footer class="footer">
    <div class="footer__appbanner">
      <b-container>
        <div class="footer__appbanner_title">
          Learn about the best establishment in town
        </div>

        <div class="footer__appbanner_links">
          <div>Download the APP</div>

          <a href="#" target="_blank">
            <b-img src="@/assets/img/app-googleplay.png" />
          </a>
          <a href="#" target="_blank">
            <b-img src="@/assets/img/app-appstore.png" />
          </a>
        </div>
      </b-container>

      <div class="footer__appbanner_images">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>

    <b-container>
      <div class="footer__top">
        <div class="footer__logo">
          <nuxt-link to="/"
            ><b-img src="@/assets/img/logo-dark.svg" alt="Eatagram"
          /></nuxt-link>
        </div>

        <div class="footer__nav">
          <nav>
            <div class="h6">About Eatagram</div>
            <ul>
              <li><nuxt-link to="/about">About Us</nuxt-link></li>
              <li><nuxt-link to="/faq">FAQ</nuxt-link></li>
              <li><nuxt-link to="/terms-of-use">Terms of Use</nuxt-link></li>
              <li>
                <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>
              </li>
            </ul>
          </nav>

          <nav>
            <div class="h6">Services</div>
            <ul>
              <li><nuxt-link to="/">List of establishments</nuxt-link></li>
              <li><nuxt-link to="/">List of events</nuxt-link></li>
              <li><nuxt-link to="/">Establishments on Map</nuxt-link></li>
              <li><nuxt-link to="/">Events on Map</nuxt-link></li>
            </ul>
          </nav>

          <nav>
            <div class="h6">Language</div>
            <ul>
              <li><nuxt-link to="/">English</nuxt-link></li>
              <li><nuxt-link to="/">German</nuxt-link></li>
              <li><nuxt-link to="/">Russian</nuxt-link></li>
              <li>
                <nuxt-link to="/" class="text-primary">See all</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>

        <div class="footer__app">
          <div>Download the APP</div>

          <a href="#" target="_blank">
            <b-img src="@/assets/img/app-googleplay.png" />
          </a>
          <a href="#" target="_blank">
            <b-img src="@/assets/img/app-appstore.png" />
          </a>
        </div>
      </div>

      <div class="footer__bottom">
        <div>Eatagram, 2020. All rights reserved</div>
      </div>
    </b-container>
  </footer>
</template>

<script>
export default {
  components: {},

  data: () => ({}),

  methods: {},
}
</script>
