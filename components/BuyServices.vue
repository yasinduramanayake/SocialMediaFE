<template>
  <div class="buyservices">
    <div class="main_text">
      <h2>
        How <span class="title-border title-border--primary">to buy</span> a
        service
      </h2>
    </div>
    <p class="service_p">It's easy in 3 simple steps:</p>
    <b-card-group deck>
      <b-row>
        <b-col md="4">
          <b-card
            no-body
            style="max-width: 20rem"
            img-src="https://buysocialmediamarketing.com/img/how-to-1.svg"
            img-alt="Image"
            img-top
          >
            <center>
              <b-card-title class="bcard_text"
                >Choose<br />a package</b-card-title
              >
            </center>
          </b-card>
        </b-col>
        <b-col md="4" class="bcard123">
          <b-card
            no-body
            style="max-width: 20rem"
            img-src="https://buysocialmediamarketing.com/img/how-to-2.svg"
            img-alt="Image"
            img-top
          >
            <center>
              <b-card-title class="bcard_text"
                >Enter<br />
                order details</b-card-title
              >
            </center>
          </b-card>
        </b-col>
        <b-col md="4">
          <b-card
            no-body
            style="max-width: 20rem"
            img-src="https://buysocialmediamarketing.com/img/how-to-3.svg"
            img-alt="Image"
            img-top
          >
            <center>
              <b-card-title class="bcard_text"
                >Checkout with<br />
                card or crypto</b-card-title
              >
            </center>
          </b-card>
        </b-col>
      </b-row>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: 'BuyServices',
}
</script>

<style></style>
