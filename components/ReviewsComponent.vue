<template>
  <div>
    <div class="faq_background">
      <div class="reviews_break"></div>

      <div>
        <b-container>
          <b-row no-gutters>
            <b-col lg="6" md="8" sm="8" >
              <h1 class="h1 title_reviews">
                Customers <span class="text-primary"> reviews</span>
              </h1>
            </b-col>
            <b-col lg="6" md="4" sm="4">
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

          <b-row no-gutters class="d-flex justify-content-between" >
            <b-col lg="7" cols="12" md="8" sm="12">
              <div class="reviews_break_small"></div>

              <div
                class="padding_reiews"
                v-for="review in reviews"
                :key="review.id"
              >
                <b-card class="rating-cards-reviews">
                  <div class="review-item">
                    <div class="review-headline">
                      <div class="author-info">
                        <div class="author-avatar">
                          <img loading="lazy" alt="" />
                        </div>
                        <div class="author-creds">
                          <div class="author-name">
                            @{{ review.first_name }} {{ review.last_name }}
                          </div>
                          <div class="author-bought">
                           
                            <span class="text-primary"
                              >• Verified Purchase</span
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul class="rating-list review-rating">
                      <li class="">
                        <b-form-rating
                          class="input_review_rating"
                          ref="ratingInput"
                          v-model="review.rate"
                          variant="warning"
                        ></b-form-rating>
                      </li>
                    </ul>

                    <br />
                    <span class="sub-title-ratings">"{{ review.review }}"</span>
                  </div>
                </b-card>
              </div>
              <br />
            </b-col>
            
            <b-col lg="4" cols="12" md="4" sm="12">
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
                          ><span class="coll_reviews">{{
                            reviews.length
                          }}</span>
                          reviews
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
                                :style="{
                                  width: reviewCount.fivestarcount,
                                }"
                              ></div>
                            </div>
                            <span class="progress-percent star-text-normal">
                              {{ reviewCount.fivestarcount }}</span
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
                                :style="{
                                  width: reviewCount.fourstarcount,
                                }"
                              ></div>
                            </div>
                            <span class="progress-percent star-text-normal">
                              {{ reviewCount.fourstarcount }}</span
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
                                :style="{
                                  width: reviewCount.threestarcount,
                                }"
                              ></div>
                            </div>
                            <span class="progress-percent star-text-normal">
                              {{ reviewCount.threestarcount }}</span
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
                                :style="{
                                  width: reviewCount.twostarcount,
                                }"
                              ></div>
                            </div>
                            <span class="progress-percent star-text-normal">
                              {{ reviewCount.twostarcount }}</span
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
                                :style="{
                                  width: reviewCount.onestarcount,
                                }"
                              ></div>
                            </div>
                            <span class="progress-percent star-text-normal">
                              {{ reviewCount.onestarcount }}</span
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
import reviewApi from '@/Api/Modules/reviews'
export default {
  data() {
    return {
      reviews: [],
    }
  },
  async created() {
    await this.addReview()
  },
  computed: {
    reviewCount() {
      const countobject = {}
      let fivestarcount = 0
      let fourstarcount = 0
      let threestarcount = 0
      let twostarcount = 0
      let onestarcount = 0
      let final_fivestarcount = 0
      let final_fourstarcount = 0
      let final_threestarcount = 0
      let final_twostarcount = 0
      let final_onestarcount = 0
      this.reviews.forEach((value) => {
        if (parseInt(value.rate) === 5) {
          fivestarcount = fivestarcount + 1
        } else if (parseInt(value.rate) === 4) {
          fourstarcount = fourstarcount + 1
        } else if (parseInt(value.rate) === 3) {
          threestarcount = threestarcount + 1
        } else if (parseInt(value.rate) === 2) {
          twostarcount = twostarcount + 1
        } else if (parseInt(value.rate) === 1) {
          onestarcount = onestarcount + 1
        }
      })

      final_fivestarcount = Math.round(
        (fivestarcount / this.reviews.length) * 100
      )

      final_fourstarcount = Math.round(
        (fourstarcount / this.reviews.length) * 100
      )

      final_threestarcount = Math.round(
        (threestarcount / this.reviews.length) * 100
      )
      final_twostarcount = Math.round(
        (twostarcount / this.reviews.length) * 100
      )
      final_onestarcount = Math.round(
        (onestarcount / this.reviews.length) * 100
      )

      countobject.fivestarcount = final_fivestarcount + '%'
      countobject.fourstarcount = final_fourstarcount + '%'
      countobject.threestarcount = final_threestarcount + '%'
      countobject.twostarcount = final_twostarcount + '%'
      countobject.onestarcount = final_onestarcount + '%'

      return countobject
    },
  },
  methods: {
    openReviewModal() {
      this.$refs.modalreview.show()
    },
    async addReview() {
      await this.$vs.loading({
        scale: 0.8,
      })
      const res = await reviewApi.AllReviews()
      this.reviews = res.data.data
      this.$vs.loading.close()
    },
  },
}
</script>
