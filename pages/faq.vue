<template>
  <div>
    <Header />

    <br /><br /><br />

    <FaqComponent />
  </div>
</template>
<script>
import Vue from 'vue';
export default {
  head() {
    return {
      title: Vue.prototype.$appName  + ' - ' + 'FAQ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home page description',
        },
      ],
    }
  },
}
</script>
