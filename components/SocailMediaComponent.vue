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
                  :src="`http://localhost/SocialMediaBE/storage/app/public/${getSelectedCategoryIcon}`"
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
            class="selection-fontsize username_label"
            v-model="username"
            :placeholder="`Your ${getSelectedCategory} name`"
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
      title="Your Order"
      hide-footer
      header-bg-variant="dark"
      header-text-variant="light"
    >
      <OrderDescription :subcategory="getSelectedSubCategory" :Quality="quality" :Icon="getSelectedSubCategoryImage" :UserName="username"  />
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
      username:'',
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
    getSelectedSubCategory() {
      const selectedOption = this.options1.find(
        (option) => option.id === this.selected1
      )
      if (selectedOption) {
        return selectedOption.name
      }
      return 'Folowers'
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
  },
  async created() {
    await this.allCategories()
  },

  methods: {
    openModal() {
      this.$refs.orderDescriptionModal.show();
   
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
