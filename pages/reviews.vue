<template>
    <div>
      <Header />
  
      <br /><br /><br />
  
    <ReviewsComponent/>
    </div>
  </template>
  <script>
  import Vue from 'vue';
  export default {
    head() {
    return {
      title: Vue.prototype.$appName  + ' - ' + 'Reviews',
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