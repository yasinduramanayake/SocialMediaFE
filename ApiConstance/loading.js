export default {
  start: function startLoading() {
    this.$vs.loading({
      scale: 0.45,
    })
  },

  end: function endLoading() {
    this.$vs.loading.close()
  },
}
