<template>
  <div>
    <div class="faq_background">
      <div class="reviews_break"></div>

      <div>
        <b-container>
          <b-row>
            <b-col md="6">
              <h1 class="h1 title_reviews">
                Customers <span class="text-primary"> reviews</span>
              </h1>
            </b-col>
            <b-col md="6">
              <div class="button_create_reviews">
                <b-button
                  @click="openReviewModal()"
                  variant="primary"
                  class="button_styles_reviews"
                  ><span>write-in-review</span></b-button
                >
              </div>
            </b-col>
          </b-row>

          <b-row>
            <b-col md="7">
              <div class="reviews_break_small"></div>

              <div class="padding_reiews">
                <b-card class="rating-cards-reviews">
                  <div class="review-item">
                    <div class="review-headline">
                      <div class="author-info">
                        <div class="author-avatar">
                          <img
                            loading="lazy"
                            src="https://yt3.ggpht.com/vBIlFwuX3PWh_xU2DhNjhMrDEZOwbtOGq3zL9eEmG-zmrW5vlfOiaDrd02s6FsSbmNmifd4P0g=s88-c-k-c0x00ffffff-no-rj"
                            alt=""
                          />
                        </div>
                        <div class="author-creds">
                          <div class="author-name">@Flips With Jeremy</div>
                          <div class="author-bought">
                            Ordered Youtube Free 100 Views
                            <span class="text-primary"
                              >• Verified Purchase</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul class="rating-list review-rating">
                      <li class="review-star"></li>
                      <li class="review-star"></li>
                      <li class="review-star"></li>
                      <li class="review-star"></li>
                      <li class="review-star" style="opacity: 0.3"></li>
                    </ul>

                    <br />
                    <span class="sub-title-ratings"
                      >"Very good, helped me get views."</span
                    >
                  </div>
                </b-card>
              </div>
              <br />
              <div class="padding_reiews">
                <b-card class="rating-cards-reviews">
                  <div class="review-item">
                    <div class="review-headline">
                      <div class="author-info">
                        <div class="author-avatar">
                          <img
                            loading="lazy"
                            src="https://yt3.ggpht.com/vBIlFwuX3PWh_xU2DhNjhMrDEZOwbtOGq3zL9eEmG-zmrW5vlfOiaDrd02s6FsSbmNmifd4P0g=s88-c-k-c0x00ffffff-no-rj"
                            alt=""
                          />
                        </div>
                        <div class="author-creds">
                          <div class="author-name">@Flips With Jeremy</div>
                          <div class="author-bought">
                            Ordered Youtube Free 100 Views
                            <span class="text-primary"
                              >• Verified Purchase</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul class="rating-list review-rating">
                      <li class="review-star"></li>
                      <li class="review-star"></li>
                      <li class="review-star"></li>
                      <li class="review-star"></li>
                      <li class="review-star" style="opacity: 0.3"></li>
                    </ul>

                    <br />
                    <span class="sub-title-ratings"
                      >"Very good, helped me get views."</span
                    >
                  </div>
                </b-card>
              </div>
              <br />
              <div class="padding_reiews1">
                <b-card class="rating-cards-reviews">
                  <div class="review-item">
                    <div class="review-headline">
                      <div class="author-info">
                        <div class="author-avatar">
                          <img
                            loading="lazy"
                            src="https://yt3.ggpht.com/vBIlFwuX3PWh_xU2DhNjhMrDEZOwbtOGq3zL9eEmG-zmrW5vlfOiaDrd02s6FsSbmNmifd4P0g=s88-c-k-c0x00ffffff-no-rj"
                            alt=""
                          />
                        </div>
                        <div class="author-creds">
                          <div class="author-name">@Flips With Jeremy</div>
                          <div class="author-bought">
                            Ordered Youtube Free 100 Views
                            <span class="text-primary"
                              >• Verified Purchase</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul class="rating-list review-rating">
                      <li class="review-star"></li>
                      <li class="review-star"></li>
                      <li class="review-star"></li>
                      <li class="review-star"></li>
                      <li class="review-star" style="opacity: 0.3"></li>
                    </ul>

                    <br />
                    <span class="sub-title-ratings"
                      >"Very good, helped me get views."</span
                    >
                  </div>
                </b-card>
              </div>
            </b-col>
            <b-col md="5">
              <div>
                <div class="reviews_break_small"></div>
                <div class="reviews_break_extrasmall"></div>
                <b-card class="rating-cards-reviews">
                  <div class="star-block block-right">
                    <div class="block-item">
                      <div class="block-right-head">
                        <span class="star-text-bold"
                          ><span>4.89</span> out of 5 stars
                        </span>
                        <span class="star-text-normal"
                          ><span class="coll_reviews">2455</span> reviews
                        </span>
                      </div>
                      <div class="block-right-body">
                        <div class="progress-blocks">
                          <div class="progress-block">
                            <div class="star">
                              <span class="star-text-normal">5</span>
                              <span
                                ><svg
                                  width="20"
                                  height="19"
                                  viewBox="0 0 20 19"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.52447 1.08156C9.67415 0.620903 10.3259 0.620905 10.4755 1.08156L11.9941 5.75532C12.1949 6.37336 12.7709 6.7918 13.4207 6.7918H18.335C18.8194 6.7918 19.0207 7.4116 18.6289 7.6963L14.6531 10.5848C14.1274 10.9668 13.9074 11.6439 14.1082 12.2619L15.6268 16.9357C15.7765 17.3963 15.2493 17.7794 14.8574 17.4947L10.8817 14.6061C10.3559 14.2242 9.64405 14.2242 9.11832 14.6061L5.14258 17.4947C4.75073 17.7794 4.22349 17.3963 4.37316 16.9357L5.89176 12.2619C6.09257 11.6439 5.87258 10.9668 5.34685 10.5848L1.37111 7.6963C0.979257 7.4116 1.18064 6.7918 1.66501 6.7918H6.57929C7.22913 6.7918 7.80506 6.37336 8.00587 5.75532L9.52447 1.08156Z"
                                    stroke="currentColor"
                                    stroke-opacity="0.5"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                            <div class="progress">
                              <div
                                class="progress-line"
                                style="width: 91.73%"
                              ></div>
                            </div>
                            <span class="progress-percent star-text-normal">
                              91.73<span>%</span></span
                            >
                          </div>
                          <div class="progress-block">
                            <div class="star">
                              <span class="star-text-normal">4</span>
                              <span
                                ><svg
                                  width="20"
                                  height="19"
                                  viewBox="0 0 20 19"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.52447 1.08156C9.67415 0.620903 10.3259 0.620905 10.4755 1.08156L11.9941 5.75532C12.1949 6.37336 12.7709 6.7918 13.4207 6.7918H18.335C18.8194 6.7918 19.0207 7.4116 18.6289 7.6963L14.6531 10.5848C14.1274 10.9668 13.9074 11.6439 14.1082 12.2619L15.6268 16.9357C15.7765 17.3963 15.2493 17.7794 14.8574 17.4947L10.8817 14.6061C10.3559 14.2242 9.64405 14.2242 9.11832 14.6061L5.14258 17.4947C4.75073 17.7794 4.22349 17.3963 4.37316 16.9357L5.89176 12.2619C6.09257 11.6439 5.87258 10.9668 5.34685 10.5848L1.37111 7.6963C0.979257 7.4116 1.18064 6.7918 1.66501 6.7918H6.57929C7.22913 6.7918 7.80506 6.37336 8.00587 5.75532L9.52447 1.08156Z"
                                    stroke="currentColor"
                                    stroke-opacity="0.5"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                            <div class="progress">
                              <div
                                class="progress-line"
                                style="width: 5.42%"
                              ></div>
                            </div>
                            <span class="progress-percent star-text-normal">
                              5.42<span>%</span></span
                            >
                          </div>
                          <div class="progress-block">
                            <div class="star">
                              <span class="star-text-normal">3</span>
                              <span
                                ><svg
                                  width="20"
                                  height="19"
                                  viewBox="0 0 20 19"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.52447 1.08156C9.67415 0.620903 10.3259 0.620905 10.4755 1.08156L11.9941 5.75532C12.1949 6.37336 12.7709 6.7918 13.4207 6.7918H18.335C18.8194 6.7918 19.0207 7.4116 18.6289 7.6963L14.6531 10.5848C14.1274 10.9668 13.9074 11.6439 14.1082 12.2619L15.6268 16.9357C15.7765 17.3963 15.2493 17.7794 14.8574 17.4947L10.8817 14.6061C10.3559 14.2242 9.64405 14.2242 9.11832 14.6061L5.14258 17.4947C4.75073 17.7794 4.22349 17.3963 4.37316 16.9357L5.89176 12.2619C6.09257 11.6439 5.87258 10.9668 5.34685 10.5848L1.37111 7.6963C0.979257 7.4116 1.18064 6.7918 1.66501 6.7918H6.57929C7.22913 6.7918 7.80506 6.37336 8.00587 5.75532L9.52447 1.08156Z"
                                    stroke="currentColor"
                                    stroke-opacity="0.5"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                            <div class="progress">
                              <div
                                class="progress-line"
                                style="width: 2.65%"
                              ></div>
                            </div>
                            <span class="progress-percent star-text-normal">
                              2.65<span>%</span></span
                            >
                          </div>
                          <div class="progress-block">
                            <div class="star">
                              <span class="star-text-normal">2</span>
                              <span
                                ><svg
                                  width="20"
                                  height="19"
                                  viewBox="0 0 20 19"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.52447 1.08156C9.67415 0.620903 10.3259 0.620905 10.4755 1.08156L11.9941 5.75532C12.1949 6.37336 12.7709 6.7918 13.4207 6.7918H18.335C18.8194 6.7918 19.0207 7.4116 18.6289 7.6963L14.6531 10.5848C14.1274 10.9668 13.9074 11.6439 14.1082 12.2619L15.6268 16.9357C15.7765 17.3963 15.2493 17.7794 14.8574 17.4947L10.8817 14.6061C10.3559 14.2242 9.64405 14.2242 9.11832 14.6061L5.14258 17.4947C4.75073 17.7794 4.22349 17.3963 4.37316 16.9357L5.89176 12.2619C6.09257 11.6439 5.87258 10.9668 5.34685 10.5848L1.37111 7.6963C0.979257 7.4116 1.18064 6.7918 1.66501 6.7918H6.57929C7.22913 6.7918 7.80506 6.37336 8.00587 5.75532L9.52447 1.08156Z"
                                    stroke="currentColor"
                                    stroke-opacity="0.5"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                            <div class="progress">
                              <div
                                class="progress-line"
                                style="width: 0.2%"
                              ></div>
                            </div>
                            <span class="progress-percent star-text-normal">
                              0.2<span>%</span></span
                            >
                          </div>
                          <div class="progress-block">
                            <div class="star">
                              <span class="star-text-normal">1</span>
                              <span
                                ><svg
                                  width="20"
                                  height="19"
                                  viewBox="0 0 20 19"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.52447 1.08156C9.67415 0.620903 10.3259 0.620905 10.4755 1.08156L11.9941 5.75532C12.1949 6.37336 12.7709 6.7918 13.4207 6.7918H18.335C18.8194 6.7918 19.0207 7.4116 18.6289 7.6963L14.6531 10.5848C14.1274 10.9668 13.9074 11.6439 14.1082 12.2619L15.6268 16.9357C15.7765 17.3963 15.2493 17.7794 14.8574 17.4947L10.8817 14.6061C10.3559 14.2242 9.64405 14.2242 9.11832 14.6061L5.14258 17.4947C4.75073 17.7794 4.22349 17.3963 4.37316 16.9357L5.89176 12.2619C6.09257 11.6439 5.87258 10.9668 5.34685 10.5848L1.37111 7.6963C0.979257 7.4116 1.18064 6.7918 1.66501 6.7918H6.57929C7.22913 6.7918 7.80506 6.37336 8.00587 5.75532L9.52447 1.08156Z"
                                    stroke="currentColor"
                                    stroke-opacity="0.5"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                            <div class="progress">
                              <div
                                class="progress-line"
                                style="width: 0%"
                              ></div>
                            </div>
                            <span class="progress-percent star-text-normal">
                              0<span>%</span></span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-card>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <br /><br /><br />
      
    </div>
    <b-modal
      header-bg-variant="dark"
      header-text-variant="light"
      title="Leave a review"
      title-class="font-weight-bold"
      id="bv-modal-example"
      ref="modalreview"
      hide-backdrop
      hide-footer
      centered
      size="lg"
    >
      <b-card class="card_modal_createreview">
        <CreateReview />
      </b-card>
    </b-modal>
    <!-- <b-modal ref="modalreview" size="md" title="jhgfd"
      >hbgvfdsmjnhgfhgb<br />ngbfvdcsc v nghfdcfdsx</b-modal
    > -->
  </div>
</template>

<script>
export default {
  // directives: {
  //   'b-modal': VBModal,
  // },
  methods: {
    openReviewModal() {
      this.$refs.modalreview.show()
    },
  },
}
</script>
