<template>
  <div>
   

    <br /><br /><br />

    <FaqComponent />

    <br class="br_tab_view"/><br class="br_tab_view" /><br class="br_tab_view"/>
    <br class="br_tab_view"/><br class="br_tab_view" /><br class="br_tab_view"/>
    <br class="br_tab_view"/><br class="br_tab_view" /><br class="br_tab_view"/>
    <br class="br_tab_view"/><br class="br_tab_view" /><br class="br_tab_view"/>
    <div>
      <FooterComponent />
    </div>
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
