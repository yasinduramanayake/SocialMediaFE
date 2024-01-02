<template>
  <div>
    <b-card class="border-0">
      <h2 class="h4 font-weight-bold text-center">Forgot Password?</h2>
      <validation-observer ref="forgetValidation">
        <b-form @submit.prevent>
          <b-row>
            <b-col lg="12">
              <b-form-group label="Email" label-for="vi-email">
                <validation-provider
                  #default="{ errors }"
                  name="Email"
                  rules="required|email"
                >
                  <b-input-group class="input-group">
                    <b-form-input
                      id="vi-first-name"
                      type="email"
                      v-model="form.email"
                      placeholder="Enter Email"
                      class="form_input_styles"
                    />
                    <b-input-group-append is-text>
                      <b-img
                        style="background-color: transparent"
                        src="https://buysocialmediamarketing.com/img/email-icon.svg"
                      ></b-img>
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>

            <b-col>
              <b-button block class="login_button" @click="sendEmail()">
                Send Reset Password Link
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
      resetpassword: false,
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  methods: {
    async sendEmail() {
      if (await this.$refs.forgetValidation.validate()) {
        await this.$vs.loading({
          scale: 0.8,
        })

        await authApi
          .forgot(this.form)
          .then(() => {
            this.$vs.loading.close()
            this.resetpassword = true
            this.$emit('resetStatus', this.resetpassword)
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
