<template>
  <div>
    <b-card>
      <div
        class="pt-3"
        style="
          border-left: 1px solid rgb(220, 220, 220);
          height: 50px;
          float: right;
        "
      >
        <span class="ml-2 font-weight-bold"> $12.99</span>
      </div>

      <b-container class="order_services_paddings">
        <b-row no-gutters>
          <b-col
            sm="7"
            md="9"
            cols="12"
            class="d-flex justify-content-start pt-2"
          >
            <b-avatar
              variant="none"
              size="sm"
              src="https://buysocialmediamarketing.com/img/inst-user.svg"
            ></b-avatar>
            &nbsp;
            <div class="font-weight-bold">1000 Followers</div>
          </b-col>

          <b-col sm="5" md="3" cols="6">
            <b-dropdown
              id="dropdown-1"
              class="m-md-2"
              variant="primary"
              :text="quality"
            >
              <b-dropdown-item @click="qualityChange1()"
                >High Quality</b-dropdown-item
              >
              <b-dropdown-item @click="qualityChange2()">Real</b-dropdown-item>
            </b-dropdown>
          </b-col>

          <b-col md="12" cols="12" class="d-flex justify-content-start pt-2">
            <b-button
              variant="outline-light"
              style="outline: auto; outline-color: rgb(220, 220, 220)"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
                /></svg
            ></b-button>

            <span class="ml-3 font-weight-bold">1000</span>
            <b-button
              class="ml-3"
              variant="outline-light"
              style="outline: auto; outline-color: rgb(220, 220, 220)"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                /></svg
            ></b-button>
          </b-col>
        </b-row>
      </b-container>

      <hr />

      <br />
      <b-card style="border-radius: 10px">
        <b-row class="d-flex justify-content-start">
          <b-avatar></b-avatar>

          <span class="font-weight-bold ml-4"> Name</span>
        </b-row>

        <b-row class="d-flex justify-content-start ml-5">
        <span class="font-weight-bold">657</span> &nbsp; Posts <span class="font-weight-bold ml-3">650 </span>  &nbsp;Following
        <span class="font-weight-bold ml-3">150 027</span>  &nbsp;Followers
      </b-row>
      </b-card>
    </b-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      quality: 'High Quality',
      selected: 'hq',
      options: [
        {
          text: 'High Quality',
          value: 'hq',
        },
        {
          text: 'Real',
          value: 'rl',
        },
      ],
    }
  },

  methods: {
    qualityChange1() {
      this.quality = 'High Quality'
    },
    qualityChange2() {
      this.quality = 'Real'
    },
  },
}
</script>
