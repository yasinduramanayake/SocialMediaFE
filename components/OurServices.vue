<template>
  <div class="ourservices">
    <div>
      <b-container v-if="show != true">
        <h2 class="h2 section-title">
          Our
          <span class="title-border title-border--primary">Services!</span>
        </h2></b-container
      >
      <br v-if="show === true" /><br v-if="show === true" />
      <b-tabs content-class="mt-3 color-white" align="center">
        <!--instgram-->
        <b-container>
          <b-card style="border: none">
            <b-tab
              class="border-0"
              v-for="category in categories"
              :key="category.id"
            >
              <template #title>
                <div class="d-flex justify-content-start">
                  <img
                    width="25"
                    height="25"
                    :src="`http://localhost/SocialMediaBE/storage/app/public/${category.icon}`"
                    alt="instagram-new"
                  />

                  <span
                    class="ml-2"
                    :style="{ color: category.color_code, fontWeight: 520 }"
                    >{{ firstLetterUpperCase(category.name) }}</span
                  >
                </div>
              </template>
              <h6 class="font-weight-bold">
                Main {{ firstLetterUpperCase(category.name) }} services
              </h6>
              <br />

              <b-row>
                <b-col
                  lg="3"
                  v-for="subcat in category.subcategory"
                  :key="subcat.id"
                >
                  <div v-if="subcat.type === 'main'">
                    <b-button
                      variant="outline-light"
                      @click="sendparams(category.name, subcat.name)"
                    >
                      <b-card
                        class="border-0 button"
                        no-body
                        style="max-width: 20rem"
                        :img-src="subcat.image"
                        img-alt="Image"
                        img-top
                      >
                      </b-card>
                    </b-button>
                    <center>
                      <b-card-title class="">{{ subcat.name }}</b-card-title>
                    </center>
                  </div>
                </b-col>
              </b-row>

              <br />
              <h6 class="font-weight-bold">
                Other {{ firstLetterUpperCase(category.name) }} services
              </h6>
              <br />

              <b-row>
                <b-col
                  lg="3"
                  v-for="subcat in category.subcategorynew"
                  :key="subcat.id"
                >
                  <div>
                    <b-card
                      class="border-0"
                      no-body
                      style="max-width: 20rem"
                      :img-src="subcat.image"
                      img-alt="Image"
                      img-top
                    >
                      <center>
                        <b-card-title class="">{{ subcat.name }}</b-card-title>
                      </center>
                    </b-card>
                  </div>
                </b-col>
              </b-row>
            </b-tab>
          </b-card>
        </b-container>

        <!-- Facebook
        <b-container>
          <b-card class="border-0">
            <b-tab>
              <template #title>
                <div class="d-flex justify-content-start">
                  <img
                    width="25"
                    height="25"
                    src="https://img.icons8.com/color/25/facebook.png"
                    alt="facebook"
                  />
                  <span class="ml-2" style="color: #1877f2; font-weight: 520"
                    >Facebook</span
                  >
                </div>
              </template>
              <b-card-group deck>
                <b-row>
                  <b-col>
                    <b-card
                      no-body
                      style="max-width: 20rem"
                      img-src="https://buysocialmediamarketing.com/img/how-to-1.svg"
                      img-alt="Image"
                      img-top
                    >
                      <center>
                        <b-card-title class="">Page like</b-card-title>
                      </center>
                    </b-card>
                  </b-col>
                  <b-col>
                    <b-card
                      no-body
                      style="max-width: 20rem"
                      img-src="https://buysocialmediamarketing.com/img/how-to-1.svg"
                      img-alt="Image"
                      img-top
                    >
                      <center>
                        <b-card-title class="">Followers</b-card-title>
                      </center>
                    </b-card>
                  </b-col>
                  <b-col>
                    <b-card
                      no-body
                      style="max-width: 20rem"
                      img-src="https://buysocialmediamarketing.com/img/how-to-1.svg"
                      img-alt="Image"
                      img-top
                    >
                      <center>
                        <b-card-title class="">Post Likes</b-card-title>
                      </center>
                    </b-card>
                  </b-col>
                  <b-col>
                    <b-card
                      no-body
                      style="max-width: 20rem"
                      img-src="https://buysocialmediamarketing.com/img/how-to-1.svg"
                      img-alt="Image"
                      img-top
                    >
                      <center>
                        <b-card-title class="">Video views</b-card-title>
                      </center>
                    </b-card>
                  </b-col>
                  <b-col>
                    <b-card
                      no-body
                      style="max-width: 20rem"
                      img-src="https://buysocialmediamarketing.com/img/how-to-1.svg"
                      img-alt="Image"
                      img-top
                    >
                      <center>
                        <b-card-title class="">Comment</b-card-title>
                      </center>
                    </b-card>
                  </b-col>
                </b-row>
              </b-card-group>
            </b-tab>
          </b-card>
        </b-container> -->
        <!--Tiktok-->
        <!-- <b-container>
          <b-card class="border-0">
            <b-tab>
              <template #title>
                <div class="d-flex justify-content-start">
                  <img
                    width="25"
                    height="25"
                    src="https://img.icons8.com/color/25/tiktok--v1.png"
                    alt="tiktok--v1"
                  />
                  <span class="ml-2" style="color: #000000; font-weight: 520"
                    >Tik Tok</span
                  >
                </div>
              </template>
              <p>I'm the first tab</p>
              <b-card-group deck>
                <b-row>
                  <b-col>
                    <b-card
                      no-body
                      style="max-width: 20rem"
                      img-src="assets/OurServices/tiktok/followers.png"
                      img-alt="Image"
                      img-top
                    >
                      <center>
                        <b-card-title class="">Followers</b-card-title>
                      </center>
                    </b-card>
                  </b-col>
                  <b-col>
                    <b-card
                      no-body
                      style="max-width: 20rem"
                      img-src="assets/OurServices/tiktok/likes.png"
                      img-alt="Image"
                      img-top
                    >
                      <center>
                        <b-card-title class="">Likes</b-card-title>
                      </center>
                    </b-card>
                  </b-col>
                  <b-col>
                    <b-card
                      no-body
                      style="max-width: 20rem"
                      img-src="assets/OurServices/tiktok/comments.png"
                      img-alt="Image"
                      img-top
                    >
                      <center>
                        <b-card-title class="">Comments</b-card-title>
                      </center>
                    </b-card>
                  </b-col>
                  <b-col>
                    <b-card
                      no-body
                      style="max-width: 20rem"
                      img-src="assets/OurServices/tiktok/views.png"
                      img-alt="Image"
                      img-top
                    >
                      <center>
                        <b-card-title class="">Views</b-card-title>
                      </center>
                    </b-card>
                  </b-col>
                  <b-col>
                    <b-card
                      no-body
                      style="max-width: 20rem"
                      img-src="assets/OurServices/tiktok/shares.png"
                      img-alt="Image"
                      img-top
                    >
                      <center>
                        <b-card-title class="">Shares</b-card-title>
                      </center>
                    </b-card>
                  </b-col>
                </b-row>
              </b-card-group>
            </b-tab>
          </b-card>
        </b-container> -->

        <!--Twitter-->
        <!-- <b-container>
          <b-card class="border-0">
            <b-tab>
              <template #title>
                <div class="d-flex justify-content-start">
                  <img
                    width="25"
                    height="25"
                    src="https://img.icons8.com/ios-filled/25/twitterx--v1.png"
                    alt="twitterx--v1"
                  />
                  <span class="ml-2" style="color: #1da1f2; font-weight: 520">
                    Twitter</span
                  >
                </div>
              </template>
              <b-card-group deck>
                <b-row>
                  <b-col>
                    <b-card
                      no-body
                      style="max-width: 20rem"
                      img-src="https://buysocialmediamarketing.com/img/how-to-1.svg"
                      img-alt="Image"
                      img-top
                    >
                      <center>
                        <b-card-title class="">Followers</b-card-title>
                      </center>
                    </b-card>
                  </b-col>
                  <b-col>
                    <b-card
                      no-body
                      style="max-width: 20rem"
                      img-src="https://buysocialmediamarketing.com/img/how-to-1.svg"
                      img-alt="Image"
                      img-top
                    >
                      <center>
                        <b-card-title class="">Likes</b-card-title>
                      </center>
                    </b-card>
                  </b-col>
                  <b-col>
                    <b-card
                      no-body
                      style="max-width: 20rem"
                      img-src="https://buysocialmediamarketing.com/img/how-to-1.svg"
                      img-alt="Image"
                      img-top
                    >
                      <center>
                        <b-card-title class="">Auto Likes</b-card-title>
                      </center>
                    </b-card>
                  </b-col>
                  <b-col>
                    <b-card
                      no-body
                      style="max-width: 20rem"
                      img-src="https://buysocialmediamarketing.com/img/how-to-1.svg"
                      img-alt="Image"
                      img-top
                    >
                      <center>
                        <b-card-title class="">Comment</b-card-title>
                      </center>
                    </b-card>
                  </b-col>
                  <b-col>
                    <b-card
                      no-body
                      style="max-width: 20rem"
                      img-src="https://buysocialmediamarketing.com/img/how-to-1.svg"
                      img-alt="Image"
                      img-top
                    >
                      <center>
                        <b-card-title class="">Video views</b-card-title>
                      </center>
                    </b-card>
                  </b-col>
                </b-row>
              </b-card-group>
            </b-tab>
          </b-card>
        </b-container> -->
        <!--youtube-->
        <!-- <b-container>
          <b-card class="border-0">
            <b-tab>
              <template #title>
                <div class="d-flex justify-content-start">
                  <img
                    width="25"
                    height="25"
                    src="https://img.icons8.com/color/25/youtube-play.png"
                    alt="youtube-play"
                  />
                  <span class="ml-2" style="color: #cd201f; font-weight: 520"
                    >Youtube</span
                  >
                </div>
              </template>
              <p>I'm the first tab</p>
              <b-card-group deck>
                <b-row>
                  <b-col>
                    <b-card
                      no-body
                      style="max-width: 20rem"
                      img-src="https://buysocialmediamarketing.com/img/how-to-1.svg"
                      img-alt="Image"
                      img-top
                    >
                      <center>
                        <b-card-title class="">Followers</b-card-title>
                      </center>
                    </b-card>
                  </b-col>
                  <b-col>
                    <b-card
                      no-body
                      style="max-width: 20rem"
                      img-src="https://buysocialmediamarketing.com/img/how-to-1.svg"
                      img-alt="Image"
                      img-top
                    >
                      <center>
                        <b-card-title class="">Likes</b-card-title>
                      </center>
                    </b-card>
                  </b-col>
                  <b-col>
                    <b-card
                      no-body
                      style="max-width: 20rem"
                      img-src="https://buysocialmediamarketing.com/img/how-to-1.svg"
                      img-alt="Image"
                      img-top
                    >
                      <center>
                        <b-card-title class="">Auto Likes</b-card-title>
                      </center>
                    </b-card>
                  </b-col>
                  <b-col>
                    <b-card
                      no-body
                      style="max-width: 20rem"
                      img-src="https://buysocialmediamarketing.com/img/how-to-1.svg"
                      img-alt="Image"
                      img-top
                    >
                      <center>
                        <b-card-title class="">Comment</b-card-title>
                      </center>
                    </b-card>
                  </b-col>
                  <b-col>
                    <b-card
                      no-body
                      style="max-width: 20rem"
                      img-src="https://buysocialmediamarketing.com/img/how-to-1.svg"
                      img-alt="Image"
                      img-top
                    >
                      <center>
                        <b-card-title class="">Video views</b-card-title>
                      </center>
                    </b-card>
                  </b-col>
                </b-row>
              </b-card-group>
            </b-tab>
          </b-card>
        </b-container> -->

        <!--Sound Cloud-->
        <!-- <b-container>
          <b-card class="border-0">
            <b-tab>
              <template #title>
                <div class="d-flex justify-content-start">
                  <img
                    width="25"
                    height="25"
                    src="https://img.icons8.com/fluency/25/soundcloud.png"
                    alt="soundcloud"
                  />
                  <span class="ml-2" style="color: #ff3300; font-weight: 520">
                    SoundCloud</span
                  >
                </div>
              </template>
              <p>I'm the first tab</p>
              <b-card-group deck>
                <b-row>
                  <b-col>
                    <b-card
                      no-body
                      style="max-width: 20rem"
                      img-src="https://buysocialmediamarketing.com/img/how-to-1.svg"
                      img-alt="Image"
                      img-top
                    >
                      <center>
                        <b-card-title class="">Followers</b-card-title>
                      </center>
                    </b-card>
                  </b-col>
                  <b-col>
                    <b-card
                      no-body
                      style="max-width: 20rem"
                      img-src="https://buysocialmediamarketing.com/img/how-to-1.svg"
                      img-alt="Image"
                      img-top
                    >
                      <center>
                        <b-card-title class="">Likes</b-card-title>
                      </center>
                    </b-card>
                  </b-col>
                  <b-col>
                    <b-card
                      no-body
                      style="max-width: 20rem"
                      img-src="https://buysocialmediamarketing.com/img/how-to-1.svg"
                      img-alt="Image"
                      img-top
                    >
                      <center>
                        <b-card-title class="">Auto Likes</b-card-title>
                      </center>
                    </b-card>
                  </b-col>
                  <b-col>
                    <b-card
                      no-body
                      style="max-width: 20rem"
                      img-src="https://buysocialmediamarketing.com/img/how-to-1.svg"
                      img-alt="Image"
                      img-top
                    >
                      <center>
                        <b-card-title class="">Comment</b-card-title>
                      </center>
                    </b-card>
                  </b-col>
                  <b-col>
                    <b-card
                      no-body
                      style="max-width: 20rem"
                      img-src="https://buysocialmediamarketing.com/img/how-to-1.svg"
                      img-alt="Image"
                      img-top
                    >
                      <center>
                        <b-card-title class="">Video views</b-card-title>
                      </center>
                    </b-card>
                  </b-col>
                </b-row>
              </b-card-group>
            </b-tab>
          </b-card>
        </b-container> -->
        <!--Spotify-->
        <!-- <b-tab>
          <b-container>
            <template #title>
              <div class="d-flex justify-content-start">
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/25/external-free-audio-and-music-with-advertisement-on-spotify-music-color-tal-revivo.png"
                  alt="external-free-audio-and-music-with-advertisement-on-spotify-music-color-tal-revivo"
                />
                <span class="ml-3">Spotify</span>
              </div>
            </template>
            <p>I'm the first tab</p>
            <b-card-group deck>
              <b-row>
                <b-col>
                  <b-card
                    no-body
                    style="max-width: 20rem"
                    img-src="https://buysocialmediamarketing.com/img/how-to-1.svg"
                    img-alt="Image"
                    img-top
                  >
                    <center>
                      <b-card-title class="">Plays</b-card-title>
                    </center>
                  </b-card>
                </b-col>
                <b-col>
                  <b-card
                    no-body
                    style="max-width: 20rem"
                    img-src="https://buysocialmediamarketing.com/img/how-to-1.svg"
                    img-alt="Image"
                    img-top
                  >
                    <center>
                      <b-card-title class="">Artist Followers</b-card-title>
                    </center>
                  </b-card>
                </b-col>
                <b-col>
                  <b-card
                    no-body
                    style="max-width: 20rem"
                    img-src="https://buysocialmediamarketing.com/img/how-to-1.svg"
                    img-alt="Image"
                    img-top
                  >
                    <center>
                      <b-card-title class="">Playlist Follower</b-card-title>
                    </center>
                  </b-card>
                </b-col>
                <b-col>
                  <b-card
                    no-body
                    style="max-width: 20rem"
                    img-src="https://buysocialmediamarketing.com/img/how-to-1.svg"
                    img-alt="Image"
                    img-top
                  >
                    <center>
                      <b-card-title class="">Monthly listeners</b-card-title>
                    </center>
                  </b-card>
                </b-col>
              </b-row>
            </b-card-group>
          </b-container>
        </b-tab> -->
      </b-tabs>
    </div>
  </div>
</template>

<script>
import serviceApi from '@/Api/Modules/services'
export default {
  name: 'OurServices',
  data() {
    return {
      categories: [],
    }
  },
  props: {
    show: Object,
  },
  async created() {
    await this.loadCategories()
  },
  methods: {
    sendparams(data1, data2) {
      this.$router.push(`/services/${data1}${data2}`)
    },
    async loadCategories() {
      await this.$vs.loading({
        scale: 0.8,
      })
      const res = await serviceApi.showMainCategoryServices()
      this.categories = res.data.data

      this.$vs.loading.close()
    },
  },
}
</script>

<style></style>
