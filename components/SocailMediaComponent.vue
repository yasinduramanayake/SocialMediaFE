<template>
  <div>
    <b-card class="card_social_media">
      <b-row>
        <b-col md="6">
          <b-form-group>
            <b-input-group>
              <div v-if="selected === 1">
                <b-input-group-prepend>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    height="58"
                    width="60"
                    viewBox="-19.5036 -32.49725 169.0312 194.9835"
                  >
                    <defs>
                      <radialGradient
                        fy="578.088"
                        fx="158.429"
                        gradientTransform="matrix(0 -1.98198 1.8439 0 -1031.399 454.004)"
                        gradientUnits="userSpaceOnUse"
                        xlink:href="#a"
                        r="65"
                        cy="578.088"
                        cx="158.429"
                        id="c"
                      />
                      <radialGradient
                        fy="473.455"
                        fx="147.694"
                        gradientTransform="matrix(.17394 .86872 -3.5818 .71718 1648.351 -458.493)"
                        gradientUnits="userSpaceOnUse"
                        xlink:href="#b"
                        r="65"
                        cy="473.455"
                        cx="147.694"
                        id="d"
                      />
                      <linearGradient id="b">
                        <stop stop-color="#3771c8" offset="0" />
                        <stop offset=".128" stop-color="#3771c8" />
                        <stop stop-opacity="0" stop-color="#60f" offset="1" />
                      </linearGradient>
                      <linearGradient id="a">
                        <stop stop-color="#fd5" offset="0" />
                        <stop stop-color="#fd5" offset=".1" />
                        <stop stop-color="#ff543e" offset=".5" />
                        <stop stop-color="#c837ab" offset="1" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M65.033 0C37.891 0 29.953.028 28.41.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468-4.125 4.282-6.625 9.55-7.53 15.812-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28a27.22 27.22 0 0017.75-14.53c1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624-4.3-4.108-9.56-6.608-15.829-7.512C102.338.157 101.733.027 86.193 0z"
                      fill="url(#c)"
                    />
                    <path
                      d="M65.033 0C37.891 0 29.953.028 28.41.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468-4.125 4.282-6.625 9.55-7.53 15.812-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28a27.22 27.22 0 0017.75-14.53c1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624-4.3-4.108-9.56-6.608-15.829-7.512C102.338.157 101.733.027 86.193 0z"
                      fill="url(#d)"
                    />
                    <path
                      d="M65.003 17c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C17.06 50.327 17 51.964 17 65s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97a5.76 5.76 0 105.76 5.758c0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C78.616 89.645 89.65 78.613 89.65 65S78.615 40.35 65.002 40.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z"
                      fill="#fff"
                    />
                  </svg>
                </b-input-group-prepend>
              </div>
              <div v-if="selected === 3">
                <b-input-group-prepend>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    height="58"
                    width="60"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#03A9F4"
                      d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                    ></path>
                  </svg>
                </b-input-group-prepend>
              </div>

              <div v-if="selected === 4">
                <b-input-group-prepend>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    height="58"
                    width="60"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FF3D00"
                      d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                    ></path>
                    <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                  </svg>
                </b-input-group-prepend>
              </div>

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
            class="selection-fontsize username_label"
            placeholder="Your Instergram name"
          ></b-input
        ></b-col>
        <b-col md="3" class="mt-1">
          <b-form-select
            v-model="quality"
            :options="qualities"
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
            >Buy Folowers</b-button
          ></b-col
        >
      </b-row>
    </b-card>

    <b-modal
      ref="orderDescriptionModal"
      size="lg"
      centered
      title-class="h3 "
      hide-backdrop
      title="Your Order"
      hide-footer
      header-bg-variant="dark"
      header-text-variant="light"
    >
      <OrderDescription />
    </b-modal>
  </div>
</template>

<script>
import serviceApi from '@/Api/Modules/services'
export default {
  name: 'SocailMedia',
  data() {
    return {
      selected: null,
      options: [],
      selected1: null,
      options1: [],
      selected2: null,
      options2: [],
      quality: 'high',
      qualities: [
        {
          text: 'High Quality',
          value: 'high',
        },
        {
          text: 'Low Quality',
          value: 'low',
        },
      ],
    }
  },

  async created() {
    await this.allCategories()
  },

  methods: {
    openModal() {
      this.$refs.orderDescriptionModal.show()
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
        await this.$vs.loading({
          scale: 0.8,
        })
        const payload = {
          category_id: this.selected,
        }
        const res = await serviceApi.subCategoriesById(payload)
        this.options1 = res.data.data
        if (this.options1.length !== 0) {
          this.selected1 = this.options1[0].id
          await this.loadServices()
        }
        this.$vs.loading.close()
      }
    },
    async loadServices() {
      if (this.selected1) {
        const payload = {
          subcategory_id: this.selected1,
        }
        const res = await serviceApi.serrvicesById(payload)
        const arrayData = res.data.data
        this.options2 = []

        if (arrayData.length !== 0) {
          arrayData.forEach((element) => {
            this.options2.push({
              text: `${element.price} | ${element.quantity}`,
              value: element.id,
            })
          })

          this.selected2 = this.options2[0].value
        }
      }
    },
  },
}
</script>

<style></style>
