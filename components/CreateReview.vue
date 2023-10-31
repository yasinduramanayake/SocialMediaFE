<template>
  <div>
    <div v-if="!clicked">
      <b-form-group
        label="Which promotion used : "
        label-class="font-weight-bold"
      >
        <br />
        <v-select v-model="selected" :options="option" style="font-size: 17px">
          <template #option="{ title, icon, color }">
            <i :class="icon" :style="{ color: color }"></i>
            <span> {{ title }}</span>
          </template>
          <template slot="selected-option" slot-scope="option">
            <div class="selected d-center">
              <span class="mr-2">
                <i :class="option.icon" :style="{ color: option.color }"></i
              ></span>
              <span>{{ option.title }}</span>
            </div>
          </template>
        </v-select>
      </b-form-group>
      <br />
      <div class="d-flex justify-content-center">
        <b-button
          variant="primary"
          size="lg"
          class="button_styles_reviews"
          @click="next()"
          >continue &nbsp; <span> <i class="bi bi-arrow-right"></i></span
        ></b-button>
        <br /><br />
      </div>
    </div>

    <div v-if="clicked">
      <b-form @submit.prevent>
        <b-row>
          <b-col md="6">
            <b-form-group
              label="Enter your Fist name"
              label-for="mc-first-name"
            >
              <b-form-input
                class="input_review"
                id="mc-first-name"
                placeholder="Fist name"
              />
            </b-form-group>
          </b-col>

          <b-col md="6">
            <b-form-group label="Enter Your Last Name" label-for="mc-Last-name">
              <b-form-input
                class="input_review"
                id="mc-Last-name"
                placeholder="Last Name"
              />
            </b-form-group>
          </b-col>

          <b-col md="12">
            <b-form-group label="Enter Your Email" label-for="mc-Email">
              <b-form-input
                class="input_review"
                id="mc-Email"
                placeholder="Email"
              />
            </b-form-group>
          </b-col>

          <b-col md="12">
            <b-form-group label-for="mc-Rate">
              <b-input-group>
                <b-form-input
                  disabled
                  class="input_review_rating_blankinput"
                  id="mc-Email"
                  placeholder="Rate This Service"
                >
                </b-form-input>
                <b-input-group-append>
                  <b-form-rating
                    class="input_review_rating"
                    ref="ratingInput"
                    v-model="rating"
                    variant="warning"
                  ></b-form-rating>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-col>

          <b-col md="12">
            <b-form-group label="Your Review" label-for="mc-Review">
              <b-form-textarea
                rows="5"
                class="input_review_textarea"
                id="mc-Review"
                placeholder="Review"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </b-form>
      <br />
      <div class="d-flex justify-content-center">
        <b-button
          variant="primary"
          size="lg"
          class="button_styles_reviews"
          @click="next()"
          >Submit</b-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import vSelect from 'vue-select'

export default {
  name: 'CreateReview',
  components: {
    vSelect,
  },
  data() {
    return {
      rating: 5,
      clicked: false,
      selected: { title: 'Instargram', icon: 'bi bi-instagram', color: 'red' },
      option: [
        {
          title: 'Instargram',
          icon: 'bi bi-instagram',
          color: 'red',
        },
        {
          title: 'Twiter',
          icon: 'bi bi-twitter',
          color: 'blue',
        },
        {
          title: 'Facebook',
          icon: 'bi bi-facebook',
          color: 'blue',
        },
        {
          title: 'You Yube',
          icon: 'bi bi-youtube',
          color: 'red',
        },
        {
          title: 'Sound Cloud',
          icon: 'bi bi-cloud-download',
          color: 'yellow',
        },
      ],
    }
  },
  directives: {
    'v-select': vSelect,
  },
  methods: {
    next() {
      if (!this.clicked) {
        this.clicked = true
      } else {
        this.clicked = false
      }
    },
  },
}
</script>

<style scoped>
@import 'vue-select/dist/vue-select.css';
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css');
</style>
