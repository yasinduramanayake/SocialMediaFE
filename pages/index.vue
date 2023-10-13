<template>
  <div>
    <Header />

    <Banner />
    <br /><br /><br />
    <SilkCarousel />
    <br /><br /><br />
    <BuyServices/>
    <br><br><br>
    <Advantages/>
  </div>
</template>

<script>
import Advantages from '~/components/Advantages.vue';
import BuyServices from '~/components/BuyServices.vue';

export default {
    name: 'IndexPage',
    components: { BuyServices, Advantages }
}
</script>
<style>
@import 'vue-select/dist/vue-select.css';
</style>
