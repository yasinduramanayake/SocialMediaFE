<template>
  <div>
    <b-container>
      <b-col lg="12" md="12" sm="12" cols="12" class="web_only_design">
        <b-card class="pl-3 pr-3" style="border: none">
          <div>
            <b-row class="text-muted mb-4">
              <b-col cols="6" lg="6" style="left: 16%">Product</b-col>
              <b-col cols="6" lg="6" style="left: 26%">Total</b-col>
            </b-row>
            <div v-for="order in cartOrders" :key="order.id">
              <b-row class="mb-4">
                <b-col>
                  <div class="shadow-lg p-4" style="border-radius: 12px">
                    <div class="d-flex mb-4">
                      <div
                        class="border-right text-center pr-3"
                        style="width: 10%"
                      >
                        <b-img
                          v-if="order.order_details.quality != 'Instant'"
                          width="90px"
                          :src="`${getBaseUrl}/storage/app/public/${order.order_details.categoryicon}`"
                        ></b-img>

                        <b-img
                          v-if="order.order_details.quality === 'Instant'"
                          width="90px"
                          :src="`${getBaseUrl}/storage/app/public/caegoryicons/${order.order_details.categoryicon}`"
                        ></b-img>
                      </div>
                      <div
                        class="pl-5"
                        style="display: flex; align-items: center; width: 25%"
                      >
                        <div>
                          <div style="font-weight: bold">
                            {{ order.order_details.quantity }} &nbsp;{{
                              order.order_details.subcategory
                            }}
                          </div>
                          <!-- <div class="text-muted" style="font-size: 12px">
                            Show order information
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              fill="currentColor"
                              class="bi bi-caret-down-fill"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                              />
                            </svg>
                          </div> -->
                        </div>
                      </div>
                      <div
                        class="pl-5"
                        style="display: flex; align-items: center; width: 40%"
                      >
                        <!-- <div
                         
                        >
                          <b-form-checkbox
                          id="checkbox-1"
                          v-model="status"
                          name="checkbox-1"
                          value="accepted"
                          unchecked-value="not_accepted"
                        >
                          <span>Add +500 followers for</span>
                          <span style="font-weight: bold">$4.87</span>
                          $6.50
                        </b-form-checkbox>
                        </div> -->
                      </div>
                      <div
                        class="pl-5 text-muted"
                        style="
                          font-size: 20px;
                          font-weight: bold;
                          display: flex;
                          align-items: center;
                          width: 15%;
                        "
                      >
                        {{ getPrice(order.order_details.price) }}
                      </div>
                      <div
                        class="text-muted pl-5"
                        style="
                          font-size: 20px;
                          font-weight: bold;
                          display: flex;
                          align-items: center;
                          width: 10%;
                        "
                      >
                        <b-button
                          size="lg"
                          @click="openDeleteModal(order.id)"
                          variant="light"
                        >
                          <b-img
                            width="auto"
                            src="@/assets/images/close-square.jpg"
                          ></b-img>
                        </b-button>
                      </div>
                    </div>
                    <div>
                      <!-- <div
                      class="d-flex justify-content-between border pl-3 pt-2 pb-2"
                      style="border-radius: 5px"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          class="bi bi-link"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"
                          />
                          <path
                            d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6z"
                          />
                        </svg>
                        URL: https://www.instagram.com/test
                      </div>
                      <div class="text-info">+1000 High Quality Followers</div>
                    </div> -->
                    </div>
                  </div>
                </b-col>
              </b-row>
            </div>
            <!-- <b-row class="mb-5">
              <b-col>
                <b-button
                  variant="outline-info"
                  class="border border-info p-2"
                  style="border-radius: 8px"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
                    />
                  </svg>
                  Add item
                </b-button>
              </b-col>
            </b-row> -->
            <div class="pt-5"></div>
            <b-row>
              <b-col sm="6">
                <b-button
                  variant="primary"
                  @click="openModal()"
                  class="pt-3 pb-3 pl-4 pr-4"
                  style="font-size: 16px"
                >
                  + Add Item</b-button
                >
              </b-col>
              <b-col sm="6">
                <div class="d-flex">
                  <div class="w-50">
                    <div class="text-muted">Total</div>
                    <div style="font-size: 25px; font-weight: bold">
                      {{ getPrice(countTotalCart) }}
                    </div>
                  </div>
                  <div class="w-50 text-end pt-2">
                    <b-button
                      variant="primary"
                      @click="checkoutCart()"
                      class="pt-3 pb-3 pl-4 pr-4"
                      style="font-weight: bold"
                      >Checkout</b-button
                    >
                  </div>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-card>
      </b-col>

      <b-card style="border: none" class="mobile_only_design">
        <div>
          <div v-for="order in cartOrders" :key="order.id">
            <div class="shadow-lg p-4" style="border-radius: 12px">
              <div>
                <b-row>
                  <b-col cols="3">
                    <div class="text-center">
                      <b-img
                        v-if="order.order_details.quality != 'Instant'"
                        width="50px"
                        :src="`${getBaseUrl}/storage/app/public/${order.order_details.categoryicon}`"
                      ></b-img>

                      <b-img
                        v-if="order.order_details.quality === 'Instant'"
                        width="30px"
                        :src="`${getBaseUrl}/storage/app/public/caegoryicons/${order.order_details.categoryicon}`"
                      ></b-img>
                    </div>
                  </b-col>

                  <b-col cols="6">
                    <div>
                      <div>
                        <div style="font-weight: bold; font-size: 15px">
                          {{ order.order_details.quantity }} &nbsp;{{
                            order.order_details.subcategory
                          }}
                        </div>
                        <!-- <div class="text-muted" style="font-size: 12px">
                            Show order information
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              fill="currentColor"
                              class="bi bi-caret-down-fill"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                              />
                            </svg>
                          </div> -->
                      </div>
                    </div>

                    <div
                      class="text-muted"
                      style="font-size: 15px; font-weight: bold"
                    >
                      {{ getPrice(order.order_details.price) }}
                    </div>
                  </b-col>

                  <b-col cols="3">
                    <div
                      class="text-muted"
                      style="
                        font-size: 15px;
                        font-weight: bold;
                        display: flex;
                        align-items: center;
                        width: auto;
                      "
                    >
                      <b-button
                        size="lg"
                        @click="openDeleteModal(order.id)"
                        variant="light"
                      >
                        <b-img
                          width="40px"
                          src="@/assets/images/close-square.jpg"
                        ></b-img>
                      </b-button>
                    </div>
                  </b-col>
                </b-row>
              </div>
              <div>
                <!-- <div
                      class="d-flex justify-content-between border pl-3 pt-2 pb-2"
                      style="border-radius: 5px"
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          class="bi bi-link"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"
                          />
                          <path
                            d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6z"
                          />
                        </svg>
                        URL: https://www.instagram.com/test
                      </div>
                      <div class="text-info">+1000 High Quality Followers</div>
                    </div> -->
              </div>
            </div>
            <br />
          </div>
          <!-- <b-row class="mb-5">
              <b-col>
                <b-button
                  variant="outline-info"
                  class="border border-info p-2"
                  style="border-radius: 8px"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"
                    />
                  </svg>
                  Add item
                </b-button>
              </b-col>
            </b-row> -->
          <br />
          <b-row class="">
            <b-col sm="6" cols="12">
              <b-button
                variant="primary"
                @click="openModal()"
                class="pt-3 pb-3 pl-4 pr-4"
                style="font-size: 16px"
              >
                + Add Item</b-button
              >
            </b-col>
            <b-col sm="6" cols="12">
              <div class="d-flex">
                <div class="w-50">
                  <div style="font-size: 25px; font-weight: bold" class="pt-3">
                    {{ getPrice(countTotalCart) }}
                  </div>
                </div>
                <div class="w-50 text-end pt-2">
                  <b-button
                    variant="primary"
                    @click="checkoutCart()"
                    class="pt-3 pb-3 pl-4 pr-4"
                    style="font-weight: bold"
                    >Checkout</b-button
                  >
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-card>
    </b-container>

    <b-modal
      body-bg-variant="light"
      ref="modallogin"
      scrollable
      hide-backdrop
      size="md"
      hide-footer
      dialog-class="modal-content"
      header-text-variant="dark"
      title-class="h4"
    >
      <LoginForm
        v-if="!forgotPassword && !resetPassword"
        @forgetStatus="forgetStatus"
        @signupStatus="signupStatus"
        :cartProp="fromCart"
      />

      <ForgetPassword
        v-else-if="forgotPassword && !resetPassword"
        @resetStatus="resetStatus"
      />

      <ResetPassword
        v-else-if="forgotPassword && resetPassword"
        @closeReset="closeReset"
      />
    </b-modal>

    <b-modal
      body-bg-variant="light"
      ref="modalservices"
      scrollable
      hide-backdrop
      size="xl"
      hide-footer
      header-bg-variant="dark"
      title="Our Services"
      header-text-variant="light"
      title-class="h4"
    >
      <OurServices :show="show" />
    </b-modal>

    <b-modal
      body-bg-variant="light"
      ref="modalregister"
      scrollable
      dialog-class="modal-content"
      hide-backdrop
      size="md"
      hide-footer
      header-text-variant="dark"
      title-class="h4"
    >
      <RegisterForm :cartProp="fromCart" />
    </b-modal>

    <b-modal
      body-bg-variant="light"
      ref="modaldelete"
      scrollable
      hide-backdrop
      centered
      size="md"
      hide-footer
      hide-header
    >
      <b-card class="shadow-lg border-0">
        <br />
        <h2 class="text-center h3 font-weight-bold" style="line-height: 1.5">
          Do you really want to <br />remove this item?
        </h2>

        <br />
        <b-row>
          <b-col lg="6">
            <b-button
              block
              variant="outline-danger"
              @click="deleteItem(selectedorderid)"
              class="pt-3 pb-3 pl-4 pr-4"
              style="font-weight: bold"
              >Remove</b-button
            >
          </b-col>
          <b-col lg="6">
            <b-button
              block
              variant="primary"
              @click="closedeletemodal()"
              class="pt-3 pb-3 pl-4 pr-4 login_button"
              style="font-weight: bold"
              >No</b-button
            >
          </b-col>
        </b-row>
        <br />
      </b-card>
    </b-modal>
  </div>
</template>
<script>
import Vue from 'vue'
import paymentApi from '@/Api/Modules/payment'
import cartApi from '@/Api/Modules/order'
import notification from '@/ApiConstance/toast'
export default {
  data() {
    return {
      cartOrders: [],
      fromCart: '',
      selectedorderid: '',
      forgotPassword: false,
      resetPassword: false,
      isSignedup: false,
    }
  },
  async mounted() {
    await this.getCart()
  },
  computed: {
    getBaseUrl() {
      return Vue.prototype.$app_url
    },
    countTotalCart() {
      if (this.cartOrders != null) {
        let sum = 0
        this.cartOrders.forEach((value) => {
          sum = sum + parseInt(value.order_details.price)
        })
        return sum
      } else {
        return 0
      }
    },
  },
  methods: {
    signupStatus(data) {
      this.isSignedup = data
      this.$refs.modallogin.hide()
      this.$refs.modalregister.show()
    },

    forgetStatus(data) {
      this.forgotPassword = data
    },
    resetStatus(data) {
      console.log(data)
      this.resetPassword = data
    },
    closeReset(data) {
      if (data === 'resetted') {
        this.$refs.modallogin.hide()
      }
    },
    openModal() {
      this.$refs.modalservices.show()
      this.show = true
    },
    openDeleteModal(id) {
      this.$refs.modaldelete.show()
      this.selectedorderid = id
    },
    closedeletemodal() {
      this.$refs.modaldelete.hide()
    },
    async getCart() {
      this.cartOrders = []
      const payload = {
        tempory_cart_id: localStorage.getItem('randomcart'),
      }
      await this.$vs.loading({
        scale: 0.8,
      })
      await cartApi
        .CartOrders(payload)
        .then((res) => {
          this.cartOrders = res.data.data

          this.$vs.loading.close()
        })
        .catch(() => {
          this.$vs.loading.close()
        })
    },

    async checkoutCart() {
      if (!localStorage.token) {
        notification.toast('Please Login Before Proceed!', 'error')

        this.forgotPassword = false
        this.resetPassword = false
        this.$refs.modallogin.show()
        this.fromCart = 'fromCart'
      } else {
        await this.$vs.loading({
          scale: 0.8,
        })
        const payload = {
          price: this.countTotalCart,
          tempory_cart_id: localStorage.getItem('randomcart'),
        }
        await paymentApi.AddPayment(payload).then((res) => {
          this.$vs.loading.close()
          if (localStorage.getItem('randomcart')) {
            localStorage.removeItem('randomcart')
          }
          window.open(res.data.data.original.data)
        })
      }
    },

    async deleteItem(id) {
      await this.$vs.loading({
        scale: 0.8,
      })
      await cartApi
        .DeleteOrder(id)
        .then((res) => {
          this.$vs.loading.close()
        })
        .catch(() => {
          this.$vs.loading.close()
        })
    },
  },
}
</script>
