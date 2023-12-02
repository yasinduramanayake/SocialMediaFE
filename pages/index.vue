<template>
  <div class="faq_background">
    <Header />

    <Banner />
    <br /><br /><br />
    <Services />
    <br /><br /><br />
    <SilkCarousel />
    <br /><br /><br />
    <Advantages />

    <br /><br /><br />
    <BuyServices />
    <br /><br /><br />
    <OurServices />
    <br /><br /><br />
    <Freetrail />
    <br /><br /><br />
    <br /><br /><br />
    <br class="br_tab_view"/><br class="br_tab_view" /><br class="br_tab_view"/>
    <br class="br_tab_view"/><br class="br_tab_view" /><br class="br_tab_view"/>
    <br class="br_tab_view"/><br class="br_tab_view" /><br class="br_tab_view"/>
    <br class="br_tab_view"/><br class="br_tab_view" /><br class="br_tab_view"/>
    <div class="banner">
      <FooterComponent />
      <b-card class="card-container border-0 bg-footer-image">
        <b-row>
          <b-col lg="5" md="12" sm="12">
            <b-card-text class="pt-4 ml-5 text-white h2 card_text">
              Get Started <br />
              Now!
            </b-card-text>
          </b-col>
          <b-col lg="7" md="12" sm="12">
            <div class="pt-3 mr-4">
              <SocailMediaComponent  />
            </div>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
import Advantages from '~/components/Advantages.vue'
import BuyServices from '~/components/BuyServices.vue'
import Freetrail from '~/components/Freetrail.vue'
import OurServices from '~/components/OurServices.vue'

export default {
  name: 'IndexPage',
  components: { BuyServices, Advantages, Freetrail, OurServices },
}
</script>
<style></style>
