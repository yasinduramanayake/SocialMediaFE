<template>
  <div>
    <b-card class="border-0">
      <h2 class="h4 font-weight-bold text-center">Reset Your Password</h2>
      <validation-observer ref="resetValidation">
        <b-form @submit.prevent>
          <b-row>
            <b-col lg="12">
              <b-form-group
                label="Tempory Password"
                label-for="vi-temp-password"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Tempory Password"
                  rules="required"
                >
                  <b-input-group class="input-group">
                    <b-form-input
                      id="vi-first-name"
                      type="password"
                      v-model="form.temporypassword"
                      placeholder="Enter Temory Password"
                      class="form_input_styles"
                    />
                    <b-input-group-append is-text>
                      <b-img
                        style="background-color: transparent"
                        src=" https://buysocialmediamarketing.com/img/password-icon.svg"
                      ></b-img>
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>

            <b-col lg="12">
              <b-form-group label="New Password" label-for="vi-temp-password">
                <validation-provider
                  #default="{ errors }"
                  name="password"
                  rules="required"
                >
                  <b-input-group class="input-group">
                    <b-form-input
                      id="vi-first-name"
                      type="password"
                      v-model="form.password"
                      placeholder="Enter New Password"
                      class="form_input_styles"
                    />
                    <b-input-group-append is-text>
                      <b-img
                        style="background-color: transparent"
                        src=" https://buysocialmediamarketing.com/img/password-icon.svg"
                      ></b-img>
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>

            <b-col lg="12">
              <b-form-group
                label="Confirm New Password"
                label-for="vi-new-password"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Confirm New Password"
                  rules="required|confirmed:password"
                >
                  <b-input-group class="input-group">
                    <b-form-input
                      id="vi-first-name"
                      type="password"
                      v-model="form.password_confirmation"
                      placeholder="Enter New Password"
                      class="form_input_styles"
                    />
                    <b-input-group-append is-text>
                      <b-img
                        style="background-color: transparent"
                        src=" https://buysocialmediamarketing.com/img/password-icon.svg"
                      ></b-img>
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>

            <b-col>
              <b-button block class="login_button" @click="resetPassword()">
                Reset Password
              </b-button>
            </b-col>
          </b-row>
        </b-form>
      </validation-observer>
    </b-card>
  </div>
</template>
<script>
import {
  ValidationProvider,
  ValidationObserver,
} from 'vee-validate/dist/vee-validate.full'
import authApi from '@/Api/Modules/auth'
export default {
  data() {
    return {
      form: {},
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    async resetPassword() {
      if (await this.$refs.resetValidation.validate()) {
        await this.$vs.loading({
          scale: 0.8,
        })

        await authApi
          .reset(this.form)
          .then(() => {
            this.$vs.loading.close()
            this.$emit('closeReset', 'resetted')
          })
          .catch(() => {
            this.$vs.loading.close()
          })
      }
    },

    // setTimeout(() => {
    //   this.form = ''
    // }, 30000)
  },
}
</script>
