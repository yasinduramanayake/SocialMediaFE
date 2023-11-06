<template>
  <div>
    <b-card>
      <b-container class="order_services_paddings">
        <div class="row no-gutters">
          <b-col sm="2" cols="3">
            <b-avatar
              variant="none"
              size="sm"
              src="https://buysocialmediamarketing.com/img/inst-user.svg"
            ></b-avatar>
          </b-col>
          <b-col sm="8" cols="6">
            <div class="font-weight-bold">1000 Followers</div>
          </b-col>

          <b-col sm="8" cols="6">
            <div
              data-v-5e9d276a=""
              data-v-53e947c8=""
              data-select=""
              class="custom-select functioned"
              style="
                display: inline-flex;
                flex-direction: column;
                vertical-align: middle;
              "
            >
              <!---->
              <button
                data-v-5e9d276a=""
                type="button"
                data-select-btn=""
                class="custom-select__btn functioned btn--options"
              >
                <span data-v-5e9d276a="" data-select-current="" class="sp">
                  Real
                </span>
                <span data-v-5e9d276a="" class="product-title-btn-icon"
                  ><svg
                    data-v-5e9d276a=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      data-v-5e9d276a=""
                      d="M11.8891 7.5533C12.78 7.5533 13.2262 8.63044 12.5962 9.26041L9.70711 12.1495C9.31658 12.54 8.68342 12.54 8.29289 12.1495L5.40381 9.26041C4.77384 8.63044 5.22001 7.5533 6.11091 7.5533L11.8891 7.5533Z"
                      fill="#04a5da"
                      fill-opacity="1"
                    ></path></svg
                ></span>
              </button>
              <div
                data-v-5e9d276a=""
                data-select-drop=""
                class="custom-select__dropdown"
                style="min-width: fit-content; padding-right: 0px"
              >
                <ul data-v-5e9d276a="" class="custom-select__list">
                  <li data-v-5e9d276a="" class="custom-select__item">
                    <a
                      data-v-5e9d276a=""
                      data-select-option7=""
                      class=""
                      style="white-space: nowrap"
                    >
                      High Quality
                    </a>
                  </li>
                  <li data-v-5e9d276a="" class="custom-select__item">
                    <a
                      data-v-5e9d276a=""
                      data-select-option7=""
                      class="current"
                      style="white-space: nowrap"
                    >
                      Real
                    </a>
                  </li>
                </ul>
              </div>
            </div></b-col
          >
        </div>
      </b-container>
    </b-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
}
</script>
