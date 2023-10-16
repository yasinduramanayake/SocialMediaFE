<template>
  <div>
    <Header />

    <Banner />
    <br /><br /><br />
    <Services/>
    <br><br><br>
    <SilkCarousel />
    <br><br><br>
    <Advantages/>
    <br /><br /><br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br />
    <BuyServices/>

    <br><br><br>
    <Freetrail/>
  </div>
</template>

<script>
import Advantages from '~/components/Advantages.vue';
import BuyServices from '~/components/BuyServices.vue';
import Freetrail from '~/components/Freetrail.vue';

export default {
    name: 'IndexPage',
    components: { BuyServices, Advantages, Freetrail }
}
</script>

