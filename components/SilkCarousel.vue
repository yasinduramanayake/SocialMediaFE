<template>
  <b-container>
    <VueSlickCarousel v-bind="settings">
      <div>
        <b-img src="@/assets/images/carousal1.JPG"></b-img>
      </div>
      <div>
        <b-img src="@/assets/images/carousal2.JPG"></b-img>
      </div>
      <div>
        <b-img src="@/assets/images/carousal3.JPG"></b-img>
      </div>
      <div>
        <b-img src="@/assets/images/carousal4.JPG"></b-img>
      </div>
      <div>
        <b-img src="@/assets/images/carousal1.JPG"></b-img>
      </div>
      <div>
        <b-img src="@/assets/images/carousal2.JPG"></b-img>
      </div>
      <div>
        <b-img src="@/assets/images/carousal3.JPG"></b-img>
      </div>
      <div>
        <b-img src="@/assets/images/carousal4.JPG"></b-img>
      </div>

      <div>
        <b-img src="@/assets/images/carousal1.JPG"></b-img>
      </div>
      <div>
        <b-img src="@/assets/images/carousal2.JPG"></b-img>
      </div>
      <div>
        <b-img src="@/assets/images/carousal3.JPG"></b-img>
      </div>
      <div>
        <b-img src="@/assets/images/carousal4.JPG"></b-img>
      </div>
      <div>
        <b-img src="@/assets/images/carousal1.JPG"></b-img>
      </div>
      <div>
        <b-img src="@/assets/images/carousal2.JPG"></b-img>
      </div>
      <div>
        <b-img src="@/assets/images/carousal3.JPG"></b-img>
      </div>
      <div>
        <b-img src="@/assets/images/carousal4.JPG"></b-img>
      </div>
    </VueSlickCarousel>
  </b-container>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
        slidesToShow: 5,
        swipeToSlide: true,
        centerPadding: '15px',
        speed:2000,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        autoplay: true,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 8,
              slidesToScroll: 8,
              initialSlide: 8,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 8,
              slidesToScroll: 5,
            },
          },
        ],
      },
    }
  },

  components: { VueSlickCarousel },
}
</script>
