<template>
  <div>
    <b-card class="card_social_media">
      <b-row>
        <b-col md="6">
          <b-form-group>
            <b-input-group>
              <b-input-group-prepend>
                <b-img
                  width="50px"
                  :src="`${getBaseUrl}/storage/app/public/${getSelectedCategoryIcon}`"
                ></b-img>
              </b-input-group-prepend>

              <b-form-select
                v-model="selected"
                :options="options"
                @input="loadSubcategories()"
                text-field="name"
                value-field="id"
                size="lg"
                class="mt-1 selection-fontsize flowers_button"
              />
            </b-input-group>
          </b-form-group>
        </b-col>

        <b-col md="3">
          <b-form-group>
            <b-form-select
              v-model="selected1"
              :options="options1"
              @input="loadServices()"
              text-field="name"
              value-field="id"
              size="lg"
              class="mt-1 selection-fontsize flowers_button"
            />
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group>
            <b-form-select
              v-model="selected2"
              :options="options2"
              size="lg"
              class="mt-1 selection-fontsize flowers_button"
            >
            </b-form-select>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="5" class="mt-2">
          <b-input
            v-if="
              getSelectedSubCategory === 'Post Views' ||
              getSelectedSubCategory === 'Post Likes' ||
              getSelectedSubCategory === 'Comments'
            "
            class="selection-fontsize username_label"
            v-model="username"
            :placeholder="`Your ${getSelectedCategory} post link`"
          ></b-input>

          <b-input
            v-else-if="
              getSelectedSubCategory === 'Vedio Views' ||
              getSelectedSubCategory === 'Vedio Likes'
            "
            class="selection-fontsize username_label"
            v-model="username"
            :placeholder="`Your ${getSelectedCategory} vedio link`"
          ></b-input>
          <b-input
            v-else
            class="selection-fontsize username_label"
            v-model="username"
            :placeholder="`Your ${getSelectedCategory} link`"
          ></b-input>
        </b-col>
        <b-col md="3" class="mt-1">
          <b-form-select
            v-model="quality"
            :options="qualities"
            @input="loadQualities()"
            size="lg"
            class="mt-1 selection-fontsize flowers_button"
          />
        </b-col>
        <div class="small_break"></div>
        <b-col md="4">
          <div class="extra_small_break"></div>
          <b-button
            class="selection-fontsize flowers_button"
            size="lg"
            variant="danger"
            @click="openModal()"
            block
            >Buy {{ getSelectedSubCategory }}</b-button
          ></b-col
        >
      </b-row>
    </b-card>

    <b-modal
      ref="orderDescriptionModal"
      size="lg"
      title-class="h3 "
      hide-backdrop
      :title="modalTitle"
      ok-disabled
      header-bg-variant="dark"
      header-text-variant="light"
      ok-variant="none"
      ok-only
    >
  
      <template slot="modal-ok" v-if="!checkoutStatus"> 
            <b-button
              size="lg"
              style="height: 40px"
              @click="addOrder()"
              variant="primary"
              class="text-white"
              >Add Item To Cart</b-button
            >
       
        
      </template>
      <template slot="modal-ok" v-if="checkoutStatus">
        <b-row class="row">
          <b-col lg="4" cols="4">
            Total: <br />
            <span class="h4"> ${{ propData.price }}</span>
            &nbsp; &nbsp; &nbsp;
          </b-col>
          <b-col lg="8" cols="8">
            <b-button
              size="lg"
              style="height: 40px"
              @click="checkout()"
              variant="primary"
              class="text-white"
              >Checkout</b-button
            >
          </b-col>
        </b-row>
      </template>

  

    
      <OrderDescription
        :subcategory="getSelectedSubCategory"
        :Quality="quality"
        :propData="propData"
        :category="getSelectedCategory"
        :checkout_status="checkoutStatus"
        :Icon="getSelectedSubCategoryImage"
        :UserName="username"
      />
    </b-modal>
  </div>
</template>

<script>
/* eslint-disable camelcase */
/* eslint-disable no-lonely-if */
// import orderApi from '@/Api/Modules/order'
// import paymentApi from '@/Api/Modules/payment'
import Vue from 'vue'
import notification from '@/ApiConstance/toast'

import serviceApi from '@/Api/Modules/services'
import orderApi from '@/Api/Modules/order'
export default {
  name: 'SocailMedia',
  data() {
    return {
      form: {},
      arrayData: [],
      propData: {},
      modalTitle: '',
      checkoutStatus: false,
      selected: null,
      options: [],
      selected1: null,
      username: '',
      options1: [],
      selected2: null,
      options2: [],
      quality: 'High Quality',
      qualities: [
        {
          text: 'High Quality',
          value: 'High Quality',
        },
        {
          text: 'Real',
          value: 'Real',
        },
      ],
    }
  },
  computed: {
    getBaseUrl() {
      return Vue.prototype.$app_url
    },
    getSelectedSubCategory() {
      const selectedOption = this.options1.find(
        (option) => option.id === this.selected1
      )
      if (selectedOption) {
        return selectedOption.name
      }
      return 'Folowers'
    },

    getSelectedQualityVariables() {
      const selectedOption = this.arrayData.find(
        (option) => option.id === this.selected2
      )

      return selectedOption
    },

    getSelectedSubCategoryImage() {
      const selectedOption = this.options1.find(
        (option) => option.id === this.selected1
      )
      if (selectedOption) {
        return selectedOption.image
      }
      return ''
    },

    getSelectedCategory() {
      const selectedOption = this.options.find(
        (option) => option.id === this.selected
      )
      if (selectedOption) {
        return selectedOption.name
      }
      return 'Instagram'
    },

    getSelectedCategoryIcon() {
      const selectedOption = this.options.find(
        (option) => option.id === this.selected
      )
      if (selectedOption) {
        return selectedOption.icon
      }
      return ''
    },
    getSelectedService() {
      const selectedOption = this.options2.find(
        (option) => option.value === this.selected2
      )
      if (selectedOption) {
        return selectedOption.text
      }
      return ''
    },
  },
  async created() {
    await this.allCategories()
  },

  updated() {
    this.propData.price = this.getSelectedService.split('|')[0]
    this.propData.quantity = this.getSelectedService.split('|')[1]
  },
  methods: {
    checkout() {
      this.$router.push('/cart')
    },
    async addOrder() {
      if (this.quality === 'High Quality') {
        if (!localStorage.token) {
          if (localStorage.getItem('randomcart')) {
            this.form.randomnumber = localStorage.getItem('randomcart')
          } else {
            localStorage.setItem(
              'randomcart',
              Math.floor(Math.random() * 100000000000) + 1
            )
            this.form.randomnumber = localStorage.getItem('randomcart')
          }
          this.form.order_details = {
            category: this.getSelectedCategory,
            categoryicon: this.getSelectedCategoryIcon,
            subcategory: this.getSelectedSubCategory,
            quality: this.quality,
            price: this.propData.price,
            quantity: this.propData.quantity,
            link: this.username,
          }
          await orderApi.AddOrder(this.form)
          this.checkoutStatus = true
          this.modalTitle = 'Items added to cart'
        } else {
          this.form.order_details = {
            category: this.getSelectedCategory,
            categoryicon: this.getSelectedCategoryIcon,
            subcategory: this.getSelectedSubCategory,
            quality: this.quality,
            price: this.propData.price,
            quantity: this.propData.quantity,
            link: this.username,
          }
          await orderApi.AddOrder(this.form)
          this.checkoutStatus = true
          this.modalTitle = 'Items added to cart'
        }
      } else if (this.quality === 'Real') {
        if (!localStorage.token) {
          if (localStorage.getItem('randomcart')) {
            this.form.randomnumber = localStorage.getItem('randomcart')
          } else {
            localStorage.setItem(
              'randomcart',
              Math.floor(Math.random() * 100000000000) + 1
            )
            this.form.randomnumber = localStorage.getItem('randomcart')
          }
          this.form.order_details = {
            category: this.getSelectedCategory,
            categoryicon: this.getSelectedCategoryIcon,
            subcategory: this.getSelectedSubCategory,
            quality: this.quality,
            link: this.username,
            price: this.propData.price,
            quantity: this.propData.quantity,
          }
          await orderApi.AddOrder(this.form)
          this.checkoutStatus = true
          this.modalTitle = 'Items added to cart'
        } else {
          this.form.order_details = {
            category: this.getSelectedCategory,
            categoryicon: this.getSelectedCategoryIcon,
            subcategory: this.getSelectedSubCategory,
            quality: this.quality,
            link: this.username,
            price: this.propData.price,
            quantity: this.propData.quantity,
          }
          await orderApi.AddOrder(this.form)
          this.checkoutStatus = true
          this.modalTitle = 'Items added to cart'
        }
      }
    },
    openModal() {
      if (this.username === '') {
        notification.toast('Please Enter a Valid Social Link', 'error')
      } else {
        this.checkoutStatus = false
        this.$refs.orderDescriptionModal.show()
      }
    },

    async allCategories() {
      await this.$vs.loading({
        scale: 0.8,
      })
      const res = await serviceApi.AllCategories()
      this.options = res.data.data
      this.selected = this.options[0].id

      await this.loadSubcategories()
      this.$vs.loading.close()
    },

    async loadSubcategories() {
      this.options2 = []
      if (this.selected) {
        const payload = {
          category_id: this.selected,
        }
        const res = await serviceApi.subCategoriesById(payload)
        this.options1 = res.data.data
        if (this.options1.length !== 0) {
          this.selected1 = this.options1[0].id
          if (this.quality === 'High Quality') {
            await this.loadServices(true, false)
          } else if (this.quality === 'Real') {
            await this.loadServices(false, true)
          }
        }
      }
    },

    async loadServices(high_quality, real_quality) {
      if (high_quality === true) {
        if (this.selected1) {
          const payload = {
            subcategory_id: this.selected1,
          }
          const res = await serviceApi.serrvicesById(payload)
          this.arrayData = res.data.data
          this.options2 = []
          if (this.arrayData.length !== 0) {
            this.arrayData.forEach((element) => {
              this.options2.push({
                text: `${element.high_quality.price} | ${element.high_quality.quantity}`,
                value: element.id,
                quality: 'High Quality',
              })
            })

            this.selected2 = this.options2[0].value
          }
        }
      } else if (real_quality === true) {
        if (this.selected1) {
          const payload = {
            subcategory_id: this.selected1,
          }
          const res = await serviceApi.serrvicesById(payload)
          this.arrayData = res.data.data
          this.options2 = []

          if (this.arrayData.length !== 0) {
            this.arrayData.forEach((element) => {
              this.options2.push({
                text: `${element.real_quality.price} | ${element.real_quality.quantity}`,
                value: element.id,
                quality: 'Real Quality',
              })
            })

            this.selected2 = this.options2[0].value
          }
        }
      } else {
        if (this.selected1) {
          const payload = {
            subcategory_id: this.selected1,
          }
          const res = await serviceApi.serrvicesById(payload)
          this.arrayData = res.data.data
          this.options2 = []

          if (this.arrayData.length !== 0) {
            this.arrayData.forEach((element) => {
              this.options2.push({
                text: `${element.high_quality.price} | ${element.high_quality.quantity}`,
                value: element.id,
                quality: 'High Quality',
              })
            })

            this.selected2 = this.options2[0].value
          }
        }
      }
    },

    async loadQualities() {
      if (this.quality === 'High Quality') {
        await this.loadServices(true, false)
      } else if (this.quality === 'Real') {
        await this.loadServices(false, true)
      }
    },
  },
}
</script>

<style></style>
