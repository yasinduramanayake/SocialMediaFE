<template>
  <div>

    <br /><br /><br />
    <center>
      <div class="head">
        <b-container>
          <b-row no-gutters>
            <b-col md="6">
              <b-card-body title="">
                <b-card-text>
                  <div class="main_text" style="text-align: left">
                    <h2>
                      <b-img
                        width="30px"
                        :src="`${getBaseUrl}/storage/app/public/caegoryicons/${categoryimage}`"
                      ></b-img>
                      Buy {{ quantity }}
                      <span class="title-border title-border--primary">{{
                        category
                      }}</span
                      ><br />
                      Instant {{ subcategory }}
                    </h2>
                  </div>

                  <p style="text-align: left">
                    Start getting {{ category }} {{ subcategory }} without any
                    hassle! Enter your username start receiving
                    {{ subcategory }} today!
                  </p>
                </b-card-text>
              </b-card-body>
            </b-col>
            <b-col md="6">
              <div v-if="category === 'Instagram'">
                <b-card-img
                  src="https://buysocialmediamarketing.com/img/product-group-image-instagram.webp"
                  alt="Image"
                  class="pict11"
                ></b-card-img>
              </div>
              <div v-if="category === 'Facebook'">
                <b-card-img
                  src="https://buysocialmediamarketing.com/img/product-group-image-facebook.webp"
                  alt="Image"
                  class="pict11"
                ></b-card-img>
              </div>
              <div v-if="category === 'Twitter'">
                <b-card-img
                  src="https://buysocialmediamarketing.com/img/product-group-image-twitter.webp"
                  alt="Image"
                  class="pict11"
                ></b-card-img>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <br />
      <AdditionalSocialMediaComponent
        :category="category"
        :subcategoryname="subcategory"
        :quantity="quantity"
        :price="price"
        :categoryimage="categoryimage"
        :subcategoryimage="subcategoryimage"
      />

      <br /><br /><br />
      <BuyServices />
      <br /><br />

      <!-- <b-container>
          <div class="instantreallike">
            <br />
            <b-container>
              <b-row>
                <b-col md="3">
                  <b-card
                    class="services_card_styles shadow-lg p-3 mb-5 bg-white"
                  >
                    <div class="card-icon">
                      <img
                        loading="lazy"
                        :src="`http://localhost/SocialMediaBE/storage/app/public/${categoryicon}`"
                        alt=""
                        width="36"
                        height="36"
                      />
                    </div>
                    <div class="card-body">
                      <div
                        class="card-body__item d-flex flex-column align-items-center"
                      >
                        <div
                          class="servising-title d-flex flex-column align-items-center mb-20"
                        >
                          <div class="promo-services-units">50</div>
                          <span>{{ category }} {{ subcategory }}</span>
                        </div>
                        <div
                          class="counter promo-services-triggers services-texts-cards"
                        ></div>
                      </div>
                      <div
                        class="card-body__item d-flex flex-column align-items-center"
                      >
                        <span class="card-price promo-services-price">
                          $1.59
                        </span>
                      </div>
                      <div
                        class="card-body__item d-flex flex-column align-items-center"
                      >
                        <a
                          href="https://buysocialmediamarketing.com/buy-50-instagram-likes"
                          class="btn btn--md btn--primary promo-services-link"
                        >
                          <span>Order now</span>
                        </a>
                      </div>
                    </div>
                  </b-card>
                </b-col>
  
                <b-col md="3">
                  <b-card
                    class="services_card_styles shadow-lg p-3 mb-5 bg-white"
                  >
                    <div class="card-icon">
                      <img
                        loading="lazy"
                        :src="`http://localhost/SocialMediaBE/storage/app/public/${categoryicon}`"
                        alt=""
                        width="36"
                        height="36"
                      />
                    </div>
                    <div class="card-body">
                      <div
                        class="card-body__item d-flex flex-column align-items-center"
                      >
                        <div
                          class="servising-title d-flex flex-column align-items-center mb-20"
                        >
                          <div class="promo-services-units">100</div>
                          <span>{{ category }} {{ subcategory }}</span>
                        </div>
                      </div>
                      <div
                        class="card-body__item d-flex flex-column align-items-center"
                      >
                        <span class="card-price promo-services-price">
                          $2.99
                        </span>
                      </div>
                      <div
                        class="card-body__item d-flex flex-column align-items-center"
                      >
                        <a
                          href="https://buysocialmediamarketing.com/buy-50-instagram-likes"
                          class="btn btn--md btn--primary promo-services-link"
                        >
                          <span>Order now</span>
                        </a>
                      </div>
                    </div>
                  </b-card>
                </b-col>
                <b-col md="3">
                  <b-card
                    class="services_card_styles shadow-lg p-3 mb-5 bg-white"
                  >
                    <div class="card-icon">
                      <img
                        loading="lazy"
                        :src="`http://localhost/SocialMediaBE/storage/app/public/${categoryicon}`"
                        alt=""
                        width="36"
                        height="36"
                      />
                    </div>
                    <div class="card-body">
                      <div
                        class="card-body__item d-flex flex-column align-items-center"
                      >
                        <div
                          class="servising-title d-flex flex-column align-items-center mb-20"
                        >
                          <div class="promo-services-units">500</div>
                          <span>{{ category }} {{ subcategory }}</span>
                        </div>
                      </div>
                      <div
                        class="card-body__item d-flex flex-column align-items-center"
                      >
                        <span class="card-price promo-services-price">
                          $5.99
                        </span>
                      </div>
                      <div
                        class="card-body__item d-flex flex-column align-items-center"
                      >
                        <a
                          href="https://buysocialmediamarketing.com/buy-50-instagram-likes"
                          class="btn btn--md btn--primary promo-services-link"
                        >
                          <span>Order now</span>
                        </a>
                      </div>
                    </div>
                  </b-card>
                </b-col>
                <b-col md="3">
                  <b-card
                    class="services_card_styles shadow-lg p-3 mb-5 bg-white"
                  >
                    <div class="card-icon">
                      <img
                        loading="lazy"
                        :src="`http://localhost/SocialMediaBE/storage/app/public/${categoryicon}`"
                        alt=""
                        width="36"
                        height="36"
                      />
                    </div>
                    <div class="card-body">
                      <div
                        class="card-body__item d-flex flex-column align-items-center"
                      >
                        <div
                          class="servising-title d-flex flex-column align-items-center mb-20"
                        >
                          <div class="promo-services-units">1000</div>
                          <span>{{ category }} {{ subcategory }}</span>
                        </div>
                      </div>
                      <div
                        class="card-body__item d-flex flex-column align-items-center"
                      >
                        <span class="card-price promo-services-price">
                          $9.99
                        </span>
                      </div>
                      <div
                        class="card-body__item d-flex flex-column align-items-center"
                      >
                        <a
                          href="https://buysocialmediamarketing.com/buy-50-instagram-likes"
                          class="btn btn--md btn--primary promo-services-link"
                        >
                          <span>Order now</span>
                        </a>
                      </div>
                    </div>
                  </b-card>
                </b-col>
              </b-row>
            </b-container>
          </div>
          <br />
          <div class="when-content-loaded active">
            <b-card bg-color="#fff">
              <p>
                Instant and affordable {{ subcategory }} service from high quality
                Instagram users,<br />
                who have profile pictures and posts, but are not active.
              </p>
            </b-card>
          </div>
          <br />
          <br />
          <div class="when-content-loaded active">
            <b-card bg-variant="primary">
              <b-row>
                <b-col>
                  <div class="card-body d-flex align-items-center">
                    <div class="card-body__content flex-auto">
                      <h3
                        class="h3 discount-card-title uppercase mb-15 text-white"
                      >
                        GET THE BEST DEAL WITH
                        <span
                          class="h3 title-border color-secondary title-border--inner"
                        >
                          DISCOUNT CODES</span
                        >
                      </h3>
                      <p class="section-sub-title sub-title--sm">
                        Save more with three different discount codes only today!
                      </p>
                    </div>
                    <div></div>
                  </div>
                </b-col>
                <b-col>
                  <div style="float: right; padding-top: 50px">
                    <b-button size="lg" variant="light">Learn More</b-button>
                  </div>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </b-container> -->
      <br /><br />
      <b-container>
        <b-card-text>
          <div class="main_text">
            <h2>
              <span class="title-border title-border--primary">Why buy</span>
              {{ category }} {{ subcategory }} ?
            </h2>
          </div>
          <br />
        </b-card-text>
        <br />
        <div>
          <b-row>
            <b-col lg="6">
              <b-card
                no-body
                class="overflow-hidden border-0"
                style="max-width: 540px; height: 100%"
              >
                <b-row no-gutters>
                  <b-col md="6">
                    <b-card-img
                      src="https://buysocialmediamarketing.com/img/cup.svg"
                      alt="Image"
                      class="pict"
                    ></b-card-img>
                  </b-col>
                  <b-col md="6">
                    <b-card-body>
                      <b-card-text style="text-align: left"
                        >Lots of {{ subcategory }} can increase your social
                        status on
                        {{ category }}
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
            <b-col lg="6">
              <b-card
                no-body
                class="overflow-hidden border-0"
                style="max-width: 540px; height: 100%"
              >
                <b-row no-gutters>
                  <b-col md="6">
                    <b-card-img
                      src="https://buysocialmediamarketing.com/img/people.svg"
                      alt="Image"
                      class="pict"
                    ></b-card-img>
                  </b-col>
                  <b-col md="6">
                    <b-card-body>
                      <b-card-text style="text-align: left"
                        >Fast delivery of quality {{ subcategory }} will help
                        your page appear on users feed
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>

          <br /><br />
          <b-row>
            <b-col lg="6">
              <b-card
                no-body
                class="overflow-hidden border-0"
                style="max-width: 540px; height: 100%"
              >
                <b-row no-gutters>
                  <b-col md="6">
                    <b-card-img
                      src="https://buysocialmediamarketing.com/img/ranking.svg"
                      alt="Image"
                      class="pict"
                    ></b-card-img>
                  </b-col>
                  <b-col md="6">
                    <b-card-body>
                      <b-card-text style="text-align: left">
                        {{ subcategory }} can build a better looking and admired
                        image for your profile
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>

            <b-col lg="6">
              <b-card
                no-body
                class="overflow-hidden border-0"
                style="max-width: 540px; height: 100%"
              >
                <b-row no-gutters>
                  <b-col md="6">
                    <b-card-img
                      src="https://buysocialmediamarketing.com/img/status-up.svg"
                      alt="Image"
                      class="pict"
                    ></b-card-img>
                  </b-col>
                  <b-col md="6">
                    <b-card-body>
                      <b-card-text style="text-align: left"
                        >Buying real {{ subcategory }} is quick and easy process
                        with guaranteed results
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>
        </div>
      </b-container>
      <br /><br />
    </center>

    <br class="br_tab_view" /><br class="br_tab_view" /><br
      class="br_tab_view"
    />
    <br class="br_tab_view" /><br class="br_tab_view" /><br
      class="br_tab_view"
    />
    <br class="br_tab_view" /><br class="br_tab_view" /><br
      class="br_tab_view"
    />
    <br class="br_tab_view" /><br class="br_tab_view" /><br
      class="br_tab_view"
    />
    <div>
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'BuyInstagramLikes',
  computed: {
    getBaseUrl() {
      return Vue.prototype.$app_url
    },
  },
  data() {
    return {
      category: this.$route.params.param1,
      subcategory: this.$route.params.param2,
      quantity: this.$route.params.param3,
      price: this.$route.params.param4,
      categoryimage: this.$route.params.param5,
      subcategoryimage: this.$route.params.param6,
    }
  },
  // head() {
  //   return {
  //     title:
  //       Vue.prototype.$appName +
  //       ' - ' +
  //       this.$route.params.param1 +
  //       ' ' +
  //       this.$route.params.param2,
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content:
  //           this.$route.params.param1 +
  //           ' ' +
  //           this.$route.params.param2 +
  //           'page description',
  //       },
  //     ],
  //   }
  // },
}
</script>
