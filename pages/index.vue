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
    <br /><br /><br />
    <FooterComponent />
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
