<template>
  <div>
    <b-container>
      <div class="slick">
        <VueSlickCarousel v-bind="settings">
          <span>
            <img
              src="../assets/ftcms_6d51c577-493a-40e6-a176-9f7df36d180f.avif"
            />
          </span>
          <span>
            <img
              src="../assets/ftcms_6d51c577-493a-40e6-a176-9f7df36d180f.avif"
            />
          </span>
          <span>
            <img
              src="../assets/ftcms_6d51c577-493a-40e6-a176-9f7df36d180f.avif"
            />
          </span>
          <span>
            <img
              src="../assets//ftcms_6d51c577-493a-40e6-a176-9f7df36d180f.avif"
            />
          </span>
          <span>
            <img
              src="../assets//ftcms_6d51c577-493a-40e6-a176-9f7df36d180f.avif"
            />
          </span>
          <span>
            <img
              src="../assets//ftcms_6d51c577-493a-40e6-a176-9f7df36d180f.avif"
            />
          </span>
        </VueSlickCarousel>
      </div>
    </b-container>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'SilkCarousel',
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        dots:true,
        slidesToShow: 3,
        swipeToSlide: true,
        centerPadding: '20px',
        speed: 500,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        
      },
    }
  },
}
</script>

<style lang="scss">
.slick span {
  display: block;
  background: #ffffff;
  color: #fff;
  font-size: 36px;
  height: 250px;
  line-height: 200px;
  position: relative;
  text-align: center;
  //border: solid 1px rgb(145, 195, 0);

  transform: translate(0, 0) scale(0.4);
  transition: all 0.4s ease;
  opacity: 0.5;
}

.slick-slide {
  border: none;
}

.slick-slide.lt2 span {
  transform: translate(10%, 0) scale(0.6);
}
.slick-slide.lt1 span {
  opacity: 0.7;
  transform: translate(5%, 0) scale(0.8);
}
.slick-slide.gt1 span {
  opacity: 0.7;
  transform: translate(-5%, 0) scale(0.8);
}
.slick-slide.gt2 span {
  transform: translate(-10%, 0) scale(0.6);
}
.slick-slide.slick-center span {
  z-index: 1;
  transform: scale(1);
  opacity: 1;
  color: #e67e22;
}
</style>
