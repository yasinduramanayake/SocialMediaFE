<template>
  <div>
    <br /><br /><br />
    <b-container>
      <b-card class="border-0">
        <h2 class="h3 text-success text-center">Transaction Successfull</h2>
        <center>
          <b-img
            width="100%"
            src="@/assets/images/check-mark-1292787_1280.webp"
            top
          ></b-img>
          <br />
          <br />
          <b-button
            variant="success"
            class="login_button"
            @click="$router.push('/')"
            >Go Back</b-button
          >
        </center>
      </b-card>
    </b-container>
  </div>
</template>
<script>
import paymentApi from '@/Api/Modules/payment'
export default {
  async created() {
    await this.orderConfirmations()
  },
  methods: {
    async orderConfirmations() {
      await paymentApi.SuccessTransaction()
    },
  },
}
</script>
