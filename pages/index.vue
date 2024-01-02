<template>
  <div class="faq_background">
    <Banner />
    <br /><br /><br />
    <Services />

    <br /><br /><br />
    <br /><br /><br />
    <SilkCarousel class="web_only_carousal" />
    <br /><br /><br />
    <br /><br /><br />
    <Advantages />

    <br />
    <BuyServices />
    <br /><br /><br /><br />
    <OurServices />
    <br /><br /><br />

    <div>
      <b-container>
        <b-row no-gutters>
          <b-col md="6" lg="10">
            <h1 class="h1 title_reviews">
              Customers <span class="text-primary"> reviews</span>
            </h1>
          </b-col>
          <b-col md="6" lg="2">
            <div
              class="stars-rating"
              style="
                margin-left: 0px;
                padding: 10px 20px;
                border-radius: var(--radius);
              "
            >
              <span class="rating-value">4.89</span>
              <ul class="rating-list">
                <li class="review-star" style="width: 22px; height: 22px"></li>
                <li class="review-star" style="width: 22px; height: 22px"></li>
                <li class="review-star" style="width: 22px; height: 22px"></li>
                <li class="review-star" style="width: 22px; height: 22px"></li>
                <li class="review-star" style="width: 22px; height: 22px"></li>
              </ul>
            </div>
          </b-col>
        </b-row>

        <div class="reviews_break_small"></div>

        <div class="padding_reiews">
          <b-card class="rating-cards-reviews">
            <div class="review-item">
              <div class="review-headline">
                <div class="author-info">
                  <div class="author-avatar">
                    <img loading="lazy" alt="" />
                  </div>
                  <div class="author-creds">
                    <div class="author-name">@Yasindu Ramanayake</div>
                    <div class="author-bought">
                      
                      <span class="text-primary">• Verified Purchase</span>
                    </div>
                  </div>
                </div>
              </div>
              <ul class="rating-list review-rating">
                <li>
                  <b-form-rating
                    class="input_review_rating"
                    ref="ratingInput"
                    variant="warning"
                    v-model="rating1"
                  ></b-form-rating>
                </li>
              </ul>

              <br />
              <span class="sub-title-ratings">"This service is awesome!"</span>
            </div>
          </b-card>
        </div>
        <br />
        <br />
        <br />
        <div class="d-flex justify-content-center">
          <b-button
            size="lg"
            class="login_button"
            type=""
            @click="$router.push('reviews')"
            >See More</b-button
          >
        </div>
      </b-container>
    </div>
    <br /><br /><br />
    <!-- <Freetrail /> -->
    <br /><br /><br />
    <br /><br /><br />

    <b-container>
      <h2 class="h2 faq_header text-center">Common Questions</h2>
      <br />

      <div class="web_only_design">
        <b-card class="card_faq_styles shadow-lg">
          <div class="accordion" role="tablist">
            <div @click="genaralAcormendation1focus()">
              <b-card no-body class="mb-1 acordian-border">
                <b-card-header
                  header-tag="header"
                  class="p-1 bg-white"
                  role="tab"
                >
                  <b-container class="tabpane_allign" v-b-toggle.accordion-1>
                    <b-row>
                      <b-col cols="11" lg="8"
                        >What payment methods do you accept?</b-col
                      >
                      <b-col cols="1" lg="4" class="d-flex justify-content-end">
                        <div class="acormendationpaddingbutton">
                          <div v-if="genaralAcormendation1 === 1">
                            <b-button
                              variant="outline-light"
                              class="dropicons-faq"
                              ><b-img
                                style="opacity: 0.7"
                                src="../assets/9024889_plus_light_icon.svg"
                                width="30%"
                              ></b-img
                            ></b-button>
                          </div>
                          <div v-if="genaralAcormendation1 === 0">
                            <b-button
                              variant="outline-light"
                              class="dropicons-faq"
                              ><b-img
                                style="opacity: 0.7"
                                src="../assets/9024684_minus_light_icon.svg"
                                width="30%"
                              ></b-img
                            ></b-button>
                          </div>
                        </div>
                      </b-col>
                    </b-row>
                  </b-container>
                </b-card-header>
                <b-collapse
                  id="accordion-1"
                  visible
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text class="faq_answer">{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>

            <div @click="genaralAcormendation2focus()">
              <b-card no-body class="mb-1 acordian-border">
                <b-card-header
                  header-tag="header"
                  class="p-1 bg-white"
                  role="tab"
                >
                  <b-container class="tabpane_allign" v-b-toggle.accordion-2>
                    <b-row>
                      <b-col lg="8" cols="11"
                        >Why should I choose BuySocialMediaMarketing?</b-col
                      >
                      <b-col lg="4" cols="1" class="d-flex justify-content-end">
                        <div class="acormendationpaddingbutton">
                          <div v-if="genaralAcormendation2 === 1">
                            <b-button
                              variant="outline-light"
                              class="dropicons-faq"
                              ><b-img
                                style="opacity: 0.7"
                                src="../assets/9024889_plus_light_icon.svg"
                                width="30%"
                              ></b-img
                            ></b-button>
                          </div>
                          <div v-if="genaralAcormendation2 === 0">
                            <b-button
                              variant="outline-light"
                              class="dropicons-faq"
                              ><b-img
                                style="opacity: 0.7"
                                src="../assets/9024684_minus_light_icon.svg"
                                width="30%"
                              ></b-img
                            ></b-button>
                          </div>
                        </div>
                      </b-col>
                    </b-row>
                  </b-container>
                </b-card-header>
                <b-collapse
                  id="accordion-2"
                  visible
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text class="faq_answer">{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>

            <div @click="genaralAcormendation3focus()">
              <b-card no-body class="mb-1 acordian-border">
                <b-card-header
                  header-tag="header"
                  class="p-1 bg-white"
                  role="tab"
                >
                  <b-container class="tabpane_allign" v-b-toggle.accordion-3>
                    <b-row>
                      <b-col lg="8" cols="11"
                        >How long does the delivery take?</b-col
                      >
                      <b-col lg="4" cols="1" class="d-flex justify-content-end">
                        <div class="acormendationpaddingbutton">
                          <div v-if="genaralAcormendation3 === 1">
                            <b-button
                              variant="outline-light"
                              class="dropicons-faq"
                              ><b-img
                                style="opacity: 0.7"
                                src="../assets/9024889_plus_light_icon.svg"
                                width="30%"
                              ></b-img
                            ></b-button>
                          </div>
                          <div v-if="genaralAcormendation3 === 0">
                            <b-button
                              variant="outline-light"
                              class="dropicons-faq"
                              ><b-img
                                style="opacity: 0.7"
                                src="../assets/9024684_minus_light_icon.svg"
                                width="30%"
                              ></b-img
                            ></b-button>
                          </div>
                        </div>
                      </b-col>
                    </b-row>
                  </b-container>
                </b-card-header>
                <b-collapse
                  id="accordion-3"
                  visible
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text class="faq_answer">{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>

            <div @click="genaralAcormendation4focus()">
              <b-card no-body class="mb-1 acordian-border">
                <b-card-header
                  header-tag="header"
                  class="p-1 bg-white"
                  role="tab"
                >
                  <b-container class="tabpane_allign" v-b-toggle.accordion-4>
                    <b-row>
                      <b-col lg="8" cols="11"
                        >My order has not started. What should I do?</b-col
                      >
                      <b-col lg="4" cols="1" class="d-flex justify-content-end">
                        <div class="acormendationpaddingbutton">
                          <div v-if="genaralAcormendation4 === 1">
                            <b-button
                              variant="outline-light"
                              class="dropicons-faq"
                              ><b-img
                                style="opacity: 0.7"
                                src="../assets/9024889_plus_light_icon.svg"
                                width="30%"
                              ></b-img
                            ></b-button>
                          </div>
                          <div v-if="genaralAcormendation4 === 0">
                            <b-button
                              variant="outline-light"
                              class="dropicons-faq"
                              ><b-img
                                style="opacity: 0.7"
                                src="../assets/9024684_minus_light_icon.svg"
                                width="30%"
                              ></b-img
                            ></b-button>
                          </div>
                        </div>
                      </b-col>
                    </b-row>
                  </b-container>
                </b-card-header>
                <b-collapse
                  id="accordion-4"
                  visible
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text class="faq_answer">{{ text }}</b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </div>
        </b-card>
      </div>

      <div class="mobile_only_design">
        <div class="pl-3 pr-3 pt-5">
          <b-card class="card_faq_styles shadow-lg">
            <div class="accordion" role="tablist">
              <div @click="genaralAcormendation1focus()">
                <b-card no-body class="mb-1 acordian-border">
                  <b-card-header
                    header-tag="header"
                    class="p-1 bg-white"
                    role="tab"
                  >
                    <b-container class="tabpane_allign" v-b-toggle.accordion-1>
                      <b-row>
                        <b-col cols="11" lg="8"
                          >What payment methods do you accept?</b-col
                        >
                        <b-col
                          cols="1"
                          lg="4"
                          class="d-flex justify-content-end"
                        >
                          <div class="acormendationpaddingbutton">
                            <div v-if="genaralAcormendation1 === 1">
                              <b-button
                                variant="outline-light"
                                class="dropicons-faq"
                                ><b-img
                                  style="opacity: 0.7"
                                  src="../assets/9024889_plus_light_icon.svg"
                                  width="30%"
                                ></b-img
                              ></b-button>
                            </div>
                            <div v-if="genaralAcormendation1 === 0">
                              <b-button
                                variant="outline-light"
                                class="dropicons-faq"
                                ><b-img
                                  style="opacity: 0.7"
                                  src="../assets/9024684_minus_light_icon.svg"
                                  width="30%"
                                ></b-img
                              ></b-button>
                            </div>
                          </div>
                        </b-col>
                      </b-row>
                    </b-container>
                  </b-card-header>
                  <b-collapse
                    id="accordion-1"
                    visible
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text class="faq_answer">{{ text }}</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>

              <div @click="genaralAcormendation2focus()">
                <b-card no-body class="mb-1 acordian-border">
                  <b-card-header
                    header-tag="header"
                    class="p-1 bg-white"
                    role="tab"
                  >
                    <b-container class="tabpane_allign" v-b-toggle.accordion-2>
                      <b-row>
                        <b-col lg="8" cols="11"
                          >Why should I choose BuySocialMediaMarketing?</b-col
                        >
                        <b-col
                          lg="4"
                          cols="1"
                          class="d-flex justify-content-end"
                        >
                          <div class="acormendationpaddingbutton">
                            <div v-if="genaralAcormendation2 === 1">
                              <b-button
                                variant="outline-light"
                                class="dropicons-faq"
                                ><b-img
                                  style="opacity: 0.7"
                                  src="../assets/9024889_plus_light_icon.svg"
                                  width="30%"
                                ></b-img
                              ></b-button>
                            </div>
                            <div v-if="genaralAcormendation2 === 0">
                              <b-button
                                variant="outline-light"
                                class="dropicons-faq"
                                ><b-img
                                  style="opacity: 0.7"
                                  src="../assets/9024684_minus_light_icon.svg"
                                  width="30%"
                                ></b-img
                              ></b-button>
                            </div>
                          </div>
                        </b-col>
                      </b-row>
                    </b-container>
                  </b-card-header>
                  <b-collapse
                    id="accordion-2"
                    visible
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text class="faq_answer">{{ text }}</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>

              <div @click="genaralAcormendation3focus()">
                <b-card no-body class="mb-1 acordian-border">
                  <b-card-header
                    header-tag="header"
                    class="p-1 bg-white"
                    role="tab"
                  >
                    <b-container class="tabpane_allign" v-b-toggle.accordion-3>
                      <b-row>
                        <b-col lg="8" cols="11"
                          >How long does the delivery take?</b-col
                        >
                        <b-col
                          lg="4"
                          cols="1"
                          class="d-flex justify-content-end"
                        >
                          <div class="acormendationpaddingbutton">
                            <div v-if="genaralAcormendation3 === 1">
                              <b-button
                                variant="outline-light"
                                class="dropicons-faq"
                                ><b-img
                                  style="opacity: 0.7"
                                  src="../assets/9024889_plus_light_icon.svg"
                                  width="30%"
                                ></b-img
                              ></b-button>
                            </div>
                            <div v-if="genaralAcormendation3 === 0">
                              <b-button
                                variant="outline-light"
                                class="dropicons-faq"
                                ><b-img
                                  style="opacity: 0.7"
                                  src="../assets/9024684_minus_light_icon.svg"
                                  width="30%"
                                ></b-img
                              ></b-button>
                            </div>
                          </div>
                        </b-col>
                      </b-row>
                    </b-container>
                  </b-card-header>
                  <b-collapse
                    id="accordion-3"
                    visible
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text class="faq_answer">{{ text }}</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>

              <div @click="genaralAcormendation4focus()">
                <b-card no-body class="mb-1 acordian-border">
                  <b-card-header
                    header-tag="header"
                    class="p-1 bg-white"
                    role="tab"
                  >
                    <b-container class="tabpane_allign" v-b-toggle.accordion-4>
                      <b-row>
                        <b-col lg="8" cols="11"
                          >My order has not started. What should I do?</b-col
                        >
                        <b-col
                          lg="4"
                          cols="1"
                          class="d-flex justify-content-end"
                        >
                          <div class="acormendationpaddingbutton">
                            <div v-if="genaralAcormendation4 === 1">
                              <b-button
                                variant="outline-light"
                                class="dropicons-faq"
                                ><b-img
                                  style="opacity: 0.7"
                                  src="../assets/9024889_plus_light_icon.svg"
                                  width="30%"
                                ></b-img
                              ></b-button>
                            </div>
                            <div v-if="genaralAcormendation4 === 0">
                              <b-button
                                variant="outline-light"
                                class="dropicons-faq"
                                ><b-img
                                  style="opacity: 0.7"
                                  src="../assets/9024684_minus_light_icon.svg"
                                  width="30%"
                                ></b-img
                              ></b-button>
                            </div>
                          </div>
                        </b-col>
                      </b-row>
                    </b-container>
                  </b-card-header>
                  <b-collapse
                    id="accordion-4"
                    visible
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text class="faq_answer">{{ text }}</b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            </div>
          </b-card>
        </div>
      </div>

      <br />
      <div class="d-flex justify-content-center">
        <b-button size="lg" class="login_button" @click="$router.push('faq')"
          >See More</b-button
        >
      </div>
    </b-container>
    <br /><br class="br_tab_view" /><br class="br_tab_view" />
    <br class="br_tab_view" /><br class="br_tab_view" /><br
      class="br_tab_view"
    />
    <br class="br_tab_view" /><br class="br_tab_view" /><br
      class="br_tab_view"
    />
    <br class="br_tab_view" /><br class="br_tab_view" /><br
      class="br_tab_view"
    />
    <div class="banner">
      <FooterComponent />
      <b-card class="card-container border-0 bg-footer-image">
        <b-row>
          <b-col lg="5" md="12" sm="12" cols="12">
            <b-card-text class="pt-4 ml-5 text-white h2 card_text">
              Get Started <br />
              Now!
            </b-card-text>
          </b-col>
          <b-col lg="7" md="12" sm="12" cols="12" class="pt-3">
            <div>
              <SocailMediaComponent />
            </div>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'IndexPage',
  data() {
    return {
      rating1: 5,

      genaralAcormendation1: 0,
      genaralAcormendation2: 1,
      genaralAcormendation3: 1,
      genaralAcormendation4: 1,

      // Affiliate

      affiliateAcormendation1: 1,
      affiliateAcormendation2: 1,
      affiliateAcormendation3: 1,
      affiliateAcormendation4: 1,

      text: `
			We accept credit/debit cards and the following cryptocurrencies: BTC, Ether, USDT, USDC, Litecoin, Dash, Ripple, Monero.

You may also use your account's balance to pay for orders on BuySocialMediaMarketing. You can increase your balance by funding it with the mentioned payment methods, we offer 5% bonus on top ups of $100 or more. You also get 2 or 3% cashback for every order that you place with us..
		  `,
    }
  },

  methods: {
    genaralAcormendation1focus() {
      if (this.genaralAcormendation1 === 0) {
        this.genaralAcormendation1 = 1
      } else if (this.genaralAcormendation1 === 1) {
        this.genaralAcormendation1 = 0
      }
    },
    // genaralAcormendation1minus() {
    //   this.genaralAcormendation1 = 1
    // },

    genaralAcormendation2focus() {
      if (this.genaralAcormendation2 === 1) {
        this.genaralAcormendation2 = 0
      } else if (this.genaralAcormendation2 === 0) {
        this.genaralAcormendation2 = 1
      }
    },
    genaralAcormendation3focus() {
      if (this.genaralAcormendation3 === 1) {
        this.genaralAcormendation3 = 0
      } else if (this.genaralAcormendation3 === 0) {
        this.genaralAcormendation3 = 1
      }
    },
    genaralAcormendation4focus() {
      if (this.genaralAcormendation4 === 1) {
        this.genaralAcormendation4 = 0
      } else if (this.genaralAcormendation4 === 0) {
        this.genaralAcormendation4 = 1
      }
    },

    affiliateAcormendation1focus() {
      if (this.affiliateAcormendation1 === 1) {
        this.affiliateAcormendation1 = 0
      } else if (this.affiliateAcormendation1 === 0) {
        this.affiliateAcormendation1 = 1
      }
    },
    affiliateAcormendation2focus() {
      if (this.affiliateAcormendation2 === 1) {
        this.affiliateAcormendation2 = 0
      } else if (this.affiliateAcormendation2 === 0) {
        this.affiliateAcormendation2 = 1
      }
    },
    affiliateAcormendation3focus() {
      if (this.affiliateAcormendation3 === 1) {
        this.affiliateAcormendation3 = 0
      } else if (this.affiliateAcormendation3 === 0) {
        this.affiliateAcormendation3 = 1
      }
    },
    affiliateAcormendation4focus() {
      if (this.affiliateAcormendation4 === 1) {
        this.affiliateAcormendation4 = 0
      } else if (this.affiliateAcormendation4 === 0) {
        this.affiliateAcormendation4 = 1
      }
    },
  },
  head() {
    return {
      title: Vue.prototype.$appName + ' - ' + 'Home',
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
<style></style>
