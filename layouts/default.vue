<template>
  <div class="content">
    <Header />

    <main>
      <router-view></router-view>
    </main>

    <Footer />
  </div>
</template>

<script>
export default {
  layout(context) {
    return 'main'
  },
}
</script>
