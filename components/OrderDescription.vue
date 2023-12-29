<template>

  <div>
  <div class="web_only_design">
    <div v-if="!checkout_status">
      <b-card>
        <div class="pt-3 order_description_vertical_border1">
      &nbsp;  Total:  <span class="ml-2 font-weight-bold"> {{ getPrice(localpropData.price) }}</span>
        </div>

        <b-container class="order_services_paddings">
          <b-row no-gutters>
            <b-col
              sm="9"
              md="5"
              lg="9"
              cols="12"
              class="d-flex justify-content-start pt-2"
            >
              <b-avatar
              v-if="quality != 'Instant'"
                variant="none"
                style="height: 30px"
                :src="Icon"
              ></b-avatar>
              <b-avatar
              v-if="quality === 'Instant'"
                variant="none"
                style="height: 30px"
                :src="`${getBaseUrl}/storage/app/public/subcategories/${Icon}`"
              ></b-avatar>
              
              &nbsp;
              <div class="font-weight-bold">
                {{ localpropData.quantity }}&nbsp;{{ subcategory }}
              </div>
            </b-col>

            <b-col sm="3" lg="3" md="7" cols="6">
              <b-dropdown
                id="dropdown-1"
                class="m-md-2"
                variant="primary"
                :text="quality"
              >
                <b-dropdown-item @click="qualityChange1()"
                  >High Quality</b-dropdown-item
                >
                <b-dropdown-item @click="qualityChange2()"
                  >Real</b-dropdown-item
                >
              </b-dropdown>
            </b-col>

            <b-col
              md="12"
              cols="12"
              sm="12"
              class="d-flex justify-content-start pt-2"
            >
              <b-button
                variant="outline-light"
                style="outline: auto; outline-color: rgb(220, 220, 220)"
                @click="minusquantity()"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg></b-button>

              <span class="ml-3 font-weight-bold">
                {{ quantity }}
              </span>
              <b-button
                class="ml-3"
                variant="outline-light"
                style="outline: auto; outline-color: rgb(220, 220, 220)"
                @click="plusquantity()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                </svg>
              </b-button>
            </b-col>
          </b-row>
        </b-container>

        <hr />
<!-- 
        <br />
        <b-card style="border-radius: 10px">
          <b-row class="d-flex justify-content-start" no-gutters>
            <b-col lg="1" sm="2" md="2" cols="12">
              <b-avatar :src="image"></b-avatar>
            </b-col>

            <b-col lg="7" cols="12" sm="10" md="10" class="ml-3">
              <b-row>
                <span class="font-weight-bold">{{ name }}</span>
              </b-row>

              <b-row class="d-flex justify-content-start">
                <span class="font-weight-bold">{{ posts }} </span>&nbsp;
                Followers
                <span class="font-weight-bold ml-3">{{ followings }} </span
                >&nbsp; Followings
                <span class="font-weight-bold ml-3">{{ followers }} </span
                >&nbsp; Posts
              </b-row>
            </b-col>
          </b-row>
        </b-card> -->
      </b-card>

      <br />
      <!-- <b-card style="border-radius: 10px">
        <b-row class="d-flex justify-content-start ml-1">
          <b-form-checkbox
            id="checkbox-1"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
          </b-form-checkbox>
          <span class="ml-2 order_description_vertical_border2"></span>
          <span class="ml-2 bold-text-orders">
            Add +1250 Followers for $11.25 $14.99</span
          >
        </b-row>
      </b-card> -->
    </div>
    <div v-if="checkout_status">
      
      <b-container>
        <b-row no-gutters>
          <b-col
            sm="9"
            md="5"
            lg="3"
            cols="12"
            class="d-flex justify-content-start pt-2"
          >
          <b-avatar
              v-if="quality != 'Instant'"
                variant="none"
                style="height: 30px"
                :src="Icon"
              ></b-avatar>
              <b-avatar
              v-if="quality === 'Instant'"
                variant="none"
                style="height: 30px"
                :src="`${getBaseUrl}/storage/app/public/subcategories/${Icon}`"
              ></b-avatar>
            &nbsp;
            <div class="font-weight-bold" v-if="quantity === 50 ">
              {{ localpropData.quantity }} {{ subcategory }}
            </div>

            <div class="font-weight-bold" v-else>
              {{ quantity }} {{ subcategory }}
            </div>
          </b-col>

          <b-col class="pt-2" sm="3" lg="2" md="7" cols="6">
            <b-badge
              class="pt-2"
              v-if="quality === 'high_quality'"
              variant="primary"
              >High Quality
              <div class="pt-1"></div
            ></b-badge>
            <b-badge
              class="pt-2"
              v-else-if="quality === 'real_quality'"
              variant="primary"
              >Real Quality</b-badge
            >
          </b-col>
          <b-col class="pt-2" sm="3" lg="7" md="7" cols="6">
            <span class="ml-1 font-weight-bold" style="float: right" v-if="price === 0.5">
              {{ getPrice(localpropData.price) }}</span
            >
            <span class="ml-1 font-weight-bold" style="float: right" v-else>
              {{ getPrice(price) }}</span
            >
            
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>



  <div class="mobile_only_design">
    <div v-if="!checkout_status">
      <b-card>


        
<b-row>
  <b-col cols="6">
        <b-container class="order_services_paddings">
          <b-row no-gutters>
            <b-col
              sm="9"
              md="5"
              lg="9"
              cols="12"
              class="d-flex justify-content-start"
            >
              <b-avatar
              v-if="quality != 'Instant'"
                variant="none"
                style="height: 30px"
                :src="Icon"
              ></b-avatar>
              <b-avatar
              v-if="quality === 'Instant'"
                variant="none"
                style="height: 30px"
                :src="`${getBaseUrl}/storage/app/public/subcategories/${Icon}`"
              ></b-avatar>
              
              &nbsp;
              <div class="font-weight-bold">
                {{ localpropData.quantity }}&nbsp;{{ subcategory }}
              </div>
            </b-col>


       


            <b-col sm="12" md="12" cols="6">
              <b-dropdown
                id="dropdown-1"
                class="m-md-2"
                variant="primary"
                :text="quality"
              >
                <b-dropdown-item @click="qualityChange1()"
                  >High Quality</b-dropdown-item
                >
                <b-dropdown-item @click="qualityChange2()"
                  >Real</b-dropdown-item
                >
              </b-dropdown>
            </b-col>

    
          

            
          </b-row>
         <b-row>
          <b-col
              md="12"
              cols="12"
              sm="12"
              class="d-flex justify-content-start pt-2"
            >
              <b-button
                variant="outline-light"
                style="outline: auto; outline-color: rgb(220, 220, 220)"
                @click="minusquantity()"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg></b-button>

              <span class="ml-3 font-weight-bold">
                {{ quantity }}
              </span>
              <b-button
                class="ml-3"
                variant="outline-light"
                style="outline: auto; outline-color: rgb(220, 220, 220)"
                @click="plusquantity()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                  <path
                    d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                </svg>
              </b-button>
            </b-col>
          </b-row> 
        </b-container>
      </b-col>


      <b-col cols="6">
        <div class="text-right">
    &nbsp;  <span class="pt-5 font-weight-bold"> {{ getPrice(localpropData.price) }}</span>
      </div>
    </b-col>
    </b-row>
       
<!-- 
        <br />
        <b-card style="border-radius: 10px">
          <b-row class="d-flex justify-content-start" no-gutters>
            <b-col lg="1" sm="2" md="2" cols="12">
              <b-avatar :src="image"></b-avatar>
            </b-col>

            <b-col lg="7" cols="12" sm="10" md="10" class="ml-3">
              <b-row>
                <span class="font-weight-bold">{{ name }}</span>
              </b-row>

              <b-row class="d-flex justify-content-start">
                <span class="font-weight-bold">{{ posts }} </span>&nbsp;
                Followers
                <span class="font-weight-bold ml-3">{{ followings }} </span
                >&nbsp; Followings
                <span class="font-weight-bold ml-3">{{ followers }} </span
                >&nbsp; Posts
              </b-row>
            </b-col>
          </b-row>
        </b-card> -->
      </b-card>

      <br />
      <!-- <b-card style="border-radius: 10px">
        <b-row class="d-flex justify-content-start ml-1">
          <b-form-checkbox
            id="checkbox-1"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
          </b-form-checkbox>
          <span class="ml-2 order_description_vertical_border2"></span>
          <span class="ml-2 bold-text-orders">
            Add +1250 Followers for $11.25 $14.99</span
          >
        </b-row>
      </b-card> -->
    </div>
    <div v-if="checkout_status">
      
      <b-container>
        <b-row no-gutters>
          <b-col
            sm="9"
            md="5"
            lg="3"
            cols="12"
            class="d-flex justify-content-start pt-2"
          >
          <b-avatar
              v-if="quality != 'Instant'"
                variant="none"
                style="height: 30px"
                :src="Icon"
              ></b-avatar>
              <b-avatar
              v-if="quality === 'Instant'"
                variant="none"
                style="height: 30px"
                :src="`${getBaseUrl}/storage/app/public/subcategories/${Icon}`"
              ></b-avatar>
            &nbsp;
            <div class="font-weight-bold" v-if="quantity === 50 ">
              {{ localpropData.quantity }} {{ subcategory }}
            </div>

            <div class="font-weight-bold" v-else>
              {{ quantity }} {{ subcategory }}
            </div>
          </b-col>

          <b-col class="pt-2" sm="3" lg="2" md="7" cols="6">
            <b-badge
              class="pt-2"
              v-if="quality === 'high_quality'"
              variant="primary"
              >High Quality
              <div class="pt-1"></div
            ></b-badge>
            <b-badge
              class="pt-2"
              v-else-if="quality === 'real_quality'"
              variant="primary"
              >Real Quality</b-badge
            >
          </b-col>
          <b-col class="pt-2" sm="3" lg="7" md="7" cols="6">
            <span class="ml-1 font-weight-bold" style="float: right" v-if="price === 0.5">
              {{ getPrice(localpropData.price) }}</span
            >
            <span class="ml-1 font-weight-bold" style="float: right" v-else>
              {{ getPrice(price) }}</span
            >
            
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</div>
</template>
<script>
// import serviceApi from '@/Api/Modules/services'
// import notification from '@/ApiConstance/toast'
import Vue from 'vue'
export default {
  data() {
    return {
      quality: 'High Quality',
      selected: 'hq',
      scrapForm: {},
      followers: '',
      image: '',
      localpropData:{},
      followings: '',
      posts: '',
      price:0.5,
      name: '',
      quantity:50,
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
   created() {
    this.quality = this.Quality;
    this.localpropData = this.propData;
    // await this.getScrappedData()
  },
  computed:{
    getBaseUrl() {
      return Vue.prototype.$app_url
    },

    returnquantity(){
      return this.localpropData.quantity
    }
  },
  props: {
    modalTitle: String,
    subcategory: String,
    Quality: String,
    Icon: String,
    UserName: String,
    checkout_status: Boolean,
    propData: Object,
    category: String,
  },
  methods: {
    qualityChange1() {
      this.quality = 'High Quality'
    },
    qualityChange2() {
      this.quality = 'Real'
    },
    minusquantity(){
      if(this.quantity > 0){
      this.localpropData.quantity = this.localpropData.quantity - 50
      this.localpropData.price  = this.localpropData.quantity * 0.01
      this.localpropData.price =    parseInt(this.localpropData.price) + parseInt(this.localpropData.quantity) * 0.01
      this.quantity = this.localpropData.quantity
      this.price = this.localpropData.price 
      this.$emit('updateprop' ,this.price)
      }
    },
    plusquantity(){
      this.localpropData.quantity = parseInt(this.localpropData.quantity) + 50
      this.localpropData.price =    parseInt(this.localpropData.price) + parseInt(this.localpropData.quantity) * 0.01
      this.quantity = this.localpropData.quantity
      this.price = this.localpropData.price 
      this.$emit('updateprop' ,this.price)
    }
    // async getScrappedData() {
    //   if (this.category === 'Instagram') {
    //     this.scrapForm.username = this.UserName
    //     this.scrapForm.category = this.category
    //     await this.$vs.loading({
    //     scale: 0.8,
    //   })
    //     await serviceApi.getScrapData(this.scrapForm).then((res) => {
    //       const response = res.data.data
    //       const description = response.description
    //       const image = response.image
    //       const title = response.title

    //       const splitdescription = description.split('Followers')
    //       console.log(splitdescription)
    //       const splittfolowers = splitdescription[1].split('Following')
    //       const splitfolowings = splittfolowers[1].split('Posts')
    //       const titlesplit = title.split('•')
    //       // console.log(splittfolowers)

    //       // console.log(splittfolowers[0].substring(1) )
    //       // console.log(splitfolowings)
    //       // console.log()

    //       // console.log(titlesplit)
    //       // const postsplits = splitdescription[3].split('-')
    //       this.followers = splitdescription[0]
    //       this.followings = splittfolowers[0].substring(1)
    //       this.image = image
    //       this.name = titlesplit[0]
    //       this.posts = splitfolowings[0].substring(1)
    //       this.$vs.loading.close()
    //     }).catch(
    //       () => {
    //         this.$vs.loading.close()
    //       }
    //     )
    //   }
    //   else {
    //     notification.toast('You have entered the link to a wrong Service', 'error')
    //   }
    // },
  },
}
</script>
