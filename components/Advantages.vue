<template>
  <div>
    <b-container>
      <b-row>
        <b-col md="12" cols="12" sm="12" lg="4">
          <div>
            <b-card
              class="services_card_styles shadow-md p-3 mb-5 bg-white text-left  border-0"
            >
              <div class="card-icon">
                <img
                  loading="lazy"
                  src="../assets/ico-lock.svg"
                  alt=""
                  width="36"
                  height="36"
                />
              </div>
              <div class="card-body">
                <h2 class="ad_h1">Safe and security service</h2>

                <span class="advantages-texts">
                  <span style="color: blue"> • </span>We do NOT require and will
                  never ask for your password or account access
                </span>

                <br />

                <span class="advantages-texts">
                  <span style="color: blue"> • </span> Our website is PCI DSS
                  Compliant
                </span>

                <br />

                <span class="advantages-texts">
                  <span style="color: blue"> • </span>We offer Money Back
                  Guarantee.</span
                >
              </div>
            </b-card>
          </div>
        </b-col>

        <b-col md="12" cols="12" sm="12"  lg="4">
          <b-card
            class="services_card_styles shadow-md p-3 mb-5 bg-white text-left  border-0"
          >
            <div class="card-icon">
              <img
                loading="lazy"
                src="../assets/ico-support.svg"
                alt=""
                width="36"
                height="36"
              />
            </div>
            <div class="card-body">
              <h2 class="ad_h1">Great customer support</h2>

              <span class="advantages-texts">
                <span style="color: blue"> • </span>Most of the services will be
                delivered within minutes after your
              </span>

              <br />

              <span class="advantages-texts">
                <span style="color: blue"> • </span> Guaranteed results within
                24 hours for every service
              </span>
            </div>
          </b-card>
        </b-col>

        <b-col md="12" cols="12" sm="12"  lg="4">
          <b-card
            class="services_card_styles shadow-md p-3 mb-5 bg-white text-left border-0"
          >
            <div class="card-icon">
              <img
                loading="lazy"
                src="../assets/ico-delivery.svg"
                alt=""
                width="36"
                height="36"
              />
            </div>
            <div class="card-body">
              <h2 class="ad_h1">Fastest delivery online</h2>

              <span class="advantages-texts">
                <span style="color: blue"> • </span>Most of the services will be
                delivered within minutes after your
              </span>

              <br />

              <span class="advantages-texts">
                <span style="color: blue"> • </span> Guaranteed results within
                24 hours for every service.
              </span>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'AdvantagesPage',
}
</script>

<style></style>
