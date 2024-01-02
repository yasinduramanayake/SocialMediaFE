<template>
  <div>
    <b-container>
      <div>
        <h2 class="h2 section-title">
          Our
          <span class="title-border title-border--primary">Top-selling</span>
          services!
        </h2>
        <div class="services_break"></div>
        <div class="cards-icons-wrpr mb-20">
          <div
            class="swiper slider-cards-index swiper-initialized swiper-horizontal swiper-pointer-events"
          >
            <div
              class="swiper-wrapper web_only_design"
              id="swiper-wrapper-3d4562f29556b7ba"
              aria-live="polite"
              style="transform: translate3d(0px, 0px, 0px)"
            >
              <b-row >
                <b-col lg="3">
                  <b-card
                    class="services_card_styles shadow-lg p-3 mb-5 bg-white"
                  >
                    <div class="card-icon">
                      <img
                        loading="lazy"
                        src="../assets/images.png"
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
                          <div class="promo-services-units">
                            {{ facebooklikes }}
                          </div>
                          <span>Facebook Post Likes</span>
                        </div>
                        <div
                          class="counter promo-services-triggers services-texts-cards"
                        >
                          <button
                            type="button"
                            class="counter__btn minus"
                            @click="facebookLikesMinus()"
                          >
                            <img
                              loading="lazy"
                              src="https://buysocialmediamarketing.com/img/icon-minuc.svg"
                              alt=""
                            />
                          </button>
                          <br /><br />
                          <input
                            type="text"
                            class="counter__input promo-services-current services-texts-cards"
                            v-model="facebooklikes"
                            readonly=""
                          />
                          <br /><br />
                          <button
                            type="button"
                            class="counter__btn plus"
                            @click="facebookLikesPlus()"
                          >
                            <img
                              loading="lazy"
                              src="https://buysocialmediamarketing.com/img/icon-pluse.svg"
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                      <div
                        class="card-body__item d-flex flex-column align-items-center"
                      >
                        <span class="card-price promo-services-price"
                          >${{ facebooklikesprice }}</span
                        >
                      </div>
                      <div
                        class="card-body__item d-flex flex-column align-items-center"
                      >
                        <b-button
                          variant="light"
                          @click="
                            directtochild(
                              'Facebook',
                              'Likes',
                              facebooklikes,
                              facebooklikesprice,
                              'facebook.png',
                              'images.jpeg'
                            )
                          "
                          class="btn btn--md btn--primary promo-services-link"
                        >
                          <span>Buy now</span>
                        </b-button>
                      </div>
                    </div>
                  </b-card>
                </b-col>
                <b-col lg="3">
                  <b-card
                    class="services_card_styles shadow-lg p-3 mb-5 bg-white"
                  >
                    <div class="card-icon">
                      <img
                        loading="lazy"
                        src="../assets/modern-badge-logo-instagram-icon_578229-124.avif"
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
                          <div class="promo-services-units">
                            {{ instagramlikes }}
                          </div>
                          <span>Instagram Post Likes</span>
                        </div>
                        <div
                          class="counter promo-services-triggers services-texts-cards"
                        >
                          <button
                            type="button"
                            class="counter__btn minus"
                            @click="instagramLikesMinus()"
                          >
                            <img
                              loading="lazy"
                              src="https://buysocialmediamarketing.com/img/icon-minuc.svg"
                              alt=""
                            />
                          </button>
                          <br /><br />
                          <input
                            type="text"
                            class="counter__input promo-services-current services-texts-cards"
                            v-model="instagramlikes"
                            readonly=""
                          />
                          <br /><br />
                          <button
                            type="button"
                            class="counter__btn plus"
                            @click="instagramLikesPlus()"
                          >
                            <img
                              loading="lazy"
                              src="https://buysocialmediamarketing.com/img/icon-pluse.svg"
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                      <div
                        class="card-body__item d-flex flex-column align-items-center"
                      >
                        <span class="card-price promo-services-price"
                          >${{ instagramlikesprice }}</span
                        >
                      </div>
                      <div
                        class="card-body__item d-flex flex-column align-items-center"
                      >
                        <b-button
                          variant="light"
                          @click="
                            directtochild(
                              'Instagram',
                              'Likes',
                              instagramlikes,
                              instagramlikesprice,
                              'instagram.svg',
                              'images.jpeg'
                            )
                          "
                          class="btn btn--md btn--primary promo-services-link"
                        >
                          <span>Buy now</span>
                        </b-button>
                      </div>
                    </div>
                  </b-card>
                </b-col>
                <b-col lg="3">
                  <b-card
                    class="services_card_styles-tiktok shadow-lg p-3 mb-5 bg-black"
                  >
                    <div class="card-icon">
                      <img
                        loading="lazy"
                        src="../assets/tik-tok-logo_578229-290.avif"
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
                          <div class="promo-services-units">
                            {{ tiktokviews }}
                          </div>
                          <span>TikTok Views</span>
                        </div>
                        <div
                          class="counter promo-services-triggers services-texts-cards"
                        >
                          <b-button
                            type="button"
                            class="counter__btn minus"
                            variant="light"
                            @click="tiktokviewsMinus()"
                          >
                            <img
                              loading="lazy"
                              src="https://buysocialmediamarketing.com/img/icon-minuc.svg"
                              alt=""
                            />
                          </b-button>
                          <br /><br />
                          <span class="text-light">{{ tiktokviews }}</span>
                          <br /><br />
                          <b-button
                            type="button"
                            class="counter__btn plus"
                            variant="light"
                            @click="tiktokviewsPlus()"
                          >
                            <img
                              loading="lazy"
                              src="https://buysocialmediamarketing.com/img/icon-pluse.svg"
                              alt=""
                            />
                          </b-button>
                        </div>
                      </div>
                      <div
                        class="card-body__item d-flex flex-column align-items-center"
                      >
                        <span class="card-price promo-services-price">
                          ${{ tiktokviewsprice }}
                        </span>
                      </div>
                      <div
                        class="card-body__item d-flex flex-column align-items-center"
                      >
                        <b-button
                          variant="light"
                          @click="
                            directtochild(
                              'TikTok',
                              'Views',
                              tiktokviews,
                              tiktokviewsprice,
                              'tiktok.png',
                              'ico-videotype.svg'
                            )
                          "
                          class="btn btn--md btn--primary promo-services-link"
                        >
                          <span>Buy now</span>
                        </b-button>
                      </div>
                    </div>
                  </b-card>
                </b-col>
                <b-col lg="3">
                  <b-card
                    class="services_card_styles shadow-lg p-3 mb-5 bg-white"
                  >
                    <div class="card-icon">
                      <img
                        loading="lazy"
                        src="../assets/youtube-logo-video-player-3d-design-video-media-player-interface_41204-12379.avif"
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
                          <div class="promo-services-units">
                            {{ youtubeviews }}
                          </div>
                          <span>Youtube Views</span>
                        </div>
                        <div
                          class="counter promo-services-triggers services-texts-cards"
                        >
                          <button
                            type="button"
                            class="counter__btn minus"
                            @click="youtubeviewsMinus()"
                          >
                            <img
                              loading="lazy"
                              src="https://buysocialmediamarketing.com/img/icon-minuc.svg"
                              alt=""
                            />
                          </button>
                          <br /><br />
                          <input
                            type="text"
                            class="counter__input promo-services-current services-texts-cards"
                            v-model="youtubeviews"
                            readonly=""
                          />
                          <br /><br />
                          <button
                            type="button"
                            class="counter__btn plus"
                            @click="youtubeviewsPlus()"
                          >
                            <img
                              loading="lazy"
                              src="https://buysocialmediamarketing.com/img/icon-pluse.svg"
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                      <div
                        class="card-body__item d-flex flex-column align-items-center"
                      >
                        <span class="card-price promo-services-price"
                          >${{ youtubeviewsprice }}</span
                        >
                      </div>
                      <div
                        class="card-body__item d-flex flex-column align-items-center"
                      >
                        <b-button
                          variant="light"
                          @click="
                            directtochild(
                              'Youtube',
                              'Views',
                              youtubeviews,
                              youtubeviewsprice,
                              'youtube.png',
                              'ico-videotype.svg'
                            )
                          "
                          class="btn btn--md btn--primary promo-services-link"
                        >
                          <span>Buy now</span>
                        </b-button>
                      </div>
                    </div>
                  </b-card>
                </b-col>
              </b-row>

            
            </div>
            <div
              class="swiper-wrapper mobile_only_design"
              id="swiper-wrapper-3d4562f29556b7ba"
              aria-live="polite"
              style="transform: translate3d(0px, 0px, 0px)"
            >
            <b-row >
                <b-col sm="12">
                  <b-container class="pl-3 pr-3 pt-5">
                    <b-card
                      class="services_card_styles shadow-lg p-3 mb-5 bg-white"
                    >
                      <div class="card-icon">
                        <img
                          loading="lazy"
                          src="../assets/images.png"
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
                            <div class="promo-services-units">
                              {{ facebooklikes }}
                            </div>
                            <span>Facebook Post Likes</span>
                          </div>
                          <div
                            class="counter promo-services-triggers services-texts-cards"
                          >
                            <button
                              type="button"
                              class="counter__btn minus"
                              @click="facebookLikesMinus()"
                            >
                              <img
                                loading="lazy"
                                src="https://buysocialmediamarketing.com/img/icon-minuc.svg"
                                alt=""
                              />
                            </button>
                            <br /><br />
                            <input
                              type="text"
                              class="counter__input promo-services-current services-texts-cards"
                              v-model="facebooklikes"
                              readonly=""
                            />
                            <br /><br />
                            <button
                              type="button"
                              class="counter__btn plus"
                              @click="facebookLikesPlus()"
                            >
                              <img
                                loading="lazy"
                                src="https://buysocialmediamarketing.com/img/icon-pluse.svg"
                                alt=""
                              />
                            </button>
                          </div>
                        </div>
                        <div
                          class="card-body__item d-flex flex-column align-items-center"
                        >
                          <span class="card-price promo-services-price"
                            >${{ facebooklikesprice }}</span
                          >
                        </div>
                        <div
                          class="card-body__item d-flex flex-column align-items-center"
                        >
                          <b-button
                            variant="light"
                            @click="
                              directtochild(
                                'Facebook',
                                'Likes',
                                facebooklikes,
                                facebooklikesprice,
                                'facebook.png',
                                'images.jpeg'
                              )
                            "
                            class="btn btn--md btn--primary promo-services-link"
                          >
                            <span>Buy now</span>
                          </b-button>
                        </div>
                      </div>
                    </b-card>
                  </b-container>
                </b-col>
                <b-col sm="12">
                  <b-container class="pl-3 pr-3 pt-5">
                    <b-card
                      class="services_card_styles shadow-lg p-3 mb-5 bg-white"
                    >
                      <div class="card-icon">
                        <img
                          loading="lazy"
                          src="../assets/modern-badge-logo-instagram-icon_578229-124.avif"
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
                            <div class="promo-services-units">
                              {{ instagramlikes }}
                            </div>
                            <span>Instagram Post Likes</span>
                          </div>
                          <div
                            class="counter promo-services-triggers services-texts-cards"
                          >
                            <button
                              type="button"
                              class="counter__btn minus"
                              @click="instagramLikesMinus()"
                            >
                              <img
                                loading="lazy"
                                src="https://buysocialmediamarketing.com/img/icon-minuc.svg"
                                alt=""
                              />
                            </button>
                            <br /><br />
                            <input
                              type="text"
                              class="counter__input promo-services-current services-texts-cards"
                              v-model="instagramlikes"
                              readonly=""
                            />
                            <br /><br />
                            <button
                              type="button"
                              class="counter__btn plus"
                              @click="instagramLikesPlus()"
                            >
                              <img
                                loading="lazy"
                                src="https://buysocialmediamarketing.com/img/icon-pluse.svg"
                                alt=""
                              />
                            </button>
                          </div>
                        </div>
                        <div
                          class="card-body__item d-flex flex-column align-items-center"
                        >
                          <span class="card-price promo-services-price"
                            >${{ instagramlikesprice }}</span
                          >
                        </div>
                        <div
                          class="card-body__item d-flex flex-column align-items-center"
                        >
                          <b-button
                            variant="light"
                            @click="
                              directtochild(
                                'Instagram',
                                'Likes',
                                instagramlikes,
                                instagramlikesprice,
                                'instagram.svg',
                                'images.jpeg'
                              )
                            "
                            class="btn btn--md btn--primary promo-services-link"
                          >
                            <span>Buy now</span>
                          </b-button>
                        </div>
                      </div>
                    </b-card>
                  </b-container>
                </b-col>
                <b-col sm="12">
                  <b-container class="pl-3 pr-3 pt-5">
                    <b-card
                      class="services_card_styles-tiktok shadow-lg p-3 mb-5 bg-black"
                    >
                      <div class="card-icon">
                        <img
                          loading="lazy"
                          src="../assets/tik-tok-logo_578229-290.avif"
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
                            <div class="promo-services-units">
                              {{ tiktokviews }}
                            </div>
                            <span>TikTok Views</span>
                          </div>
                          <div
                            class="counter promo-services-triggers services-texts-cards"
                          >
                            <b-button
                              type="button"
                              class="counter__btn minus"
                              variant="light"
                              @click="tiktokviewsMinus()"
                            >
                              <img
                                loading="lazy"
                                src="https://buysocialmediamarketing.com/img/icon-minuc.svg"
                                alt=""
                              />
                            </b-button>
                            <br /><br />
                            <span class="text-light">{{ tiktokviews }}</span>
                            <br /><br />
                            <b-button
                              type="button"
                              class="counter__btn plus"
                              variant="light"
                              @click="tiktokviewsPlus()"
                            >
                              <img
                                loading="lazy"
                                src="https://buysocialmediamarketing.com/img/icon-pluse.svg"
                                alt=""
                              />
                            </b-button>
                          </div>
                        </div>
                        <div
                          class="card-body__item d-flex flex-column align-items-center"
                        >
                          <span class="card-price promo-services-price">
                            ${{ tiktokviewsprice }}
                          </span>
                        </div>
                        <div
                          class="card-body__item d-flex flex-column align-items-center"
                        >
                          <b-button
                            variant="light"
                            @click="
                              directtochild(
                                'TikTok',
                                'Views',
                                tiktokviews,
                                tiktokviewsprice,
                                'tiktok.png',
                                'ico-videotype.svg'
                              )
                            "
                            class="btn btn--md btn--primary promo-services-link"
                          >
                            <span>Buy now</span>
                          </b-button>
                        </div>
                      </div>
                    </b-card>
                  </b-container>
                </b-col>
                <b-col sm="12">
                  <b-container class="pl-3 pr-3 pt-5">
                    <b-card
                      class="services_card_styles shadow-lg p-3 mb-5 bg-white"
                    >
                      <div class="card-icon">
                        <img
                          loading="lazy"
                          src="../assets/youtube-logo-video-player-3d-design-video-media-player-interface_41204-12379.avif"
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
                            <div class="promo-services-units">
                              {{ youtubeviews }}
                            </div>
                            <span>Youtube Views</span>
                          </div>
                          <div
                            class="counter promo-services-triggers services-texts-cards"
                          >
                            <button
                              type="button"
                              class="counter__btn minus"
                              @click="youtubeviewsMinus()"
                            >
                              <img
                                loading="lazy"
                                src="https://buysocialmediamarketing.com/img/icon-minuc.svg"
                                alt=""
                              />
                            </button>
                            <br /><br />
                            <input
                              type="text"
                              class="counter__input promo-services-current services-texts-cards"
                              v-model="youtubeviews"
                              readonly=""
                            />
                            <br /><br />
                            <button
                              type="button"
                              class="counter__btn plus"
                              @click="youtubeviewsPlus()"
                            >
                              <img
                                loading="lazy"
                                src="https://buysocialmediamarketing.com/img/icon-pluse.svg"
                                alt=""
                              />
                            </button>
                          </div>
                        </div>
                        <div
                          class="card-body__item d-flex flex-column align-items-center"
                        >
                          <span class="card-price promo-services-price"
                            >${{ youtubeviewsprice }}</span
                          >
                        </div>
                        <div
                          class="card-body__item d-flex flex-column align-items-center"
                        >
                          <b-button
                            variant="light"
                            @click="
                              directtochild(
                                'Youtube',
                                'Views',
                                youtubeviews,
                                youtubeviewsprice,
                                'youtube.png',
                                'ico-videotype.svg'
                              )
                            "
                            class="btn btn--md btn--primary promo-services-link"
                          >
                            <span>Buy now</span>
                          </b-button>
                        </div>
                      </div>
                    </b-card>
                  </b-container>
                </b-col>
              </b-row>

            
            </div>
         
            <span
              class="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
        </div>
      </div>

      <div class="web_only_design">
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
      </div>

      <div class="mobile_only_design">
        <div class="when-content-loaded active">
          <b-container class="pl-3 pr-3 pt-5">
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
                        Save more with three different discount codes only
                        today!
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
          </b-container>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  data() {
    return {
      facebooklikes: 50,
      facebooklikesprice: 1,

      instagramlikes: 50,
      instagramlikesprice: 1,

      tiktokviews: 50,
      tiktokviewsprice: 1,

      youtubeviews: 50,
      youtubeviewsprice: 1,
    }
  },
  methods: {
    facebookLikesPlus() {
      this.facebooklikes = this.facebooklikes + 50
      this.facebooklikesprice = this.facebooklikes * 0.01
    },
    facebookLikesMinus() {
      this.facebooklikes = this.facebooklikes - 50
      this.facebooklikesprice = this.facebooklikes * 0.01
    },

    instagramLikesMinus() {
      this.instagramlikes = this.instagramlikes - 50
      this.instagramlikesprice = this.instagramlikes * 0.01
    },

    instagramLikesPlus() {
      this.instagramlikes = this.instagramlikes + 50
      this.instagramlikesprice = this.instagramlikes * 0.01
    },

    tiktokviewsMinus() {
      this.tiktokviews = this.tiktokviews - 50
      this.tiktokviewsprice = this.tiktokviews * 0.01
    },

    tiktokviewsPlus() {
      this.tiktokviews = this.tiktokviews + 50
      this.tiktokviewsprice = this.tiktokviews * 0.01
    },

    youtubeviewsMinus() {
      this.youtubeviews = this.youtubeviews - 50
      this.youtubeviewsprice = this.youtubeviews * 0.01
    },

    youtubeviewsPlus() {
      this.youtubeviews = this.youtubeviews + 50
      this.youtubeviewsprice = this.youtubeviews * 0.01
    },

    directtochild(data1, data2, data3, data4, data5, data6) {
      this.$router.push({
        name: 'viewadditionalservice',
        params: {
          param1: data1,
          param2: data2,
          param3: data3,
          param4: data4,
          param5: data5,
          param6: data6,
        },
      })
    },
  },
}
</script>

<style lang="scss"></style>
