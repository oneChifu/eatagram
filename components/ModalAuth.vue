<template>
  <div>
    <b-modal
      ref="modal_login"
      :visible="show == 'login'"
      centered
      hide-footer
      @hidden="show != 'login', $emit('hidden', '')"
    >
      <div class="h5">Log In form</div>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: String,
      default: '',
    },
  },

  data: () => ({
    test: true,
  }),
}
</script>
