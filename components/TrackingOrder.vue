<template>
  <div>
    <validation-observer ref="trackerValidation">
      <b-form @submit.prevent>
        <b-form-group label="Order Id" label-for="vi-first-name">
          <validation-provider
            #default="{ errors }"
            name="Order Id"
            rules="required"
          >
            <b-form-input
              placeholder="Order Tracking Number"
              v-model="form.tracking_number"
            ></b-form-input>
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>
        </b-form-group>
        <br />
        <b-button variant="primary" size="lg" @click="orderTracking()" block
          >Track Order</b-button
        >
      </b-form>
    </validation-observer>

    <div v-if="tracker && items.length > 0">
      <br /><br />
      <b-card class="shadow-lg border-0">
        <b-card-title class="h3">Ordered Items</b-card-title>
        <br />
        <b-list-group>
          <b-list-group-item v-for="item in items" :key="item.id">
            <b-row>
              <b-col lg="10">
                <h3 class="h3 text-danger">{{ item.reference }}</h3>

                Ordered Service :
                <span class="font-weight-bold">{{
                  item.order_details.category
                }}</span>
                <br />
                Ordered Category :
                <span class="font-weight-bold">{{
                  item.order_details.subcategory
                }}</span>
                <br />
                Ordered Item Quality :
                <span class="font-weight-bold">{{
                  item.order_details.quality
                }}</span
                ><br />
                Ordered Item Amount:
                <span class="font-weight-bold">{{
                  item.order_details.price
                }}</span>
              </b-col>
              <b-col lg="2">
                <b-badge variant="primary" pill>{{ item.status }}</b-badge>
              </b-col>
            </b-row>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>

    <div v-else-if="tracker && items.length === 0">
      <br /><br />
      <b-card class="shadow-lg border-0">
        <b-card-title class="h3 text-danger">Order Not Found</b-card-title>
        <br />
        You Dont Have Orders For Entered Order Number
      </b-card>
    </div>
  </div>
</template>
<script>
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full'
import orderApi from '@/Api/Modules/order'

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      form: {},
      items: [],
      tracker: false,
    }
  },

  methods: {
    async orderTracking() {
      await this.$vs.loading({
        scale: 0.8,
      })
      await orderApi.TrackOrder(this.form).then((res) => {
        this.tracker = true
        this.items = res.data.data
        this.$vs.loading.close()
      })
    },
  },
}
</script>
