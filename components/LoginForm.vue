<template>
  <div>
    <b-card class="border-0">
      <h2 class="h4 font-weight-bold text-center">Login</h2>
      <validation-observer ref="loginValidation">
        <b-form @submit.prevent>
          <b-row>
            <b-col lg="12">
              <b-form-group label="Email" label-for="vi-first-name">
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

            <b-col lg="12" class="pt-1">
              <b-form-group label="Password" label-for="vi-first-name">
                <validation-provider
                  #default="{ errors }"
                  name="Password"
                  rules="required"
                >
                  <b-input-group class="input-group">
                    <b-form-input
                      id="vi-first-name"
                      type="password"
                      v-model="form.password"
                      placeholder="Enter Password"
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

            <b-col lg="12" class="pt-1">
              <b-button block size="lg" class="login_button" type="" @click="login()"
                >Sign In</b-button
              >
            </b-col>
          </b-row>
        </b-form>
      </validation-observer>
      <br />
      <center>
        <div>
          <a href="#" class="color-primary">
            <span class="forget-password">Forgot password?</span></a
          >
        </div>
      </center>
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
    async login() {
      if (await this.$refs.loginValidation.validate()) {
        await this.$vs.loading({
          scale: 0.8,
        })
        await authApi
          .login(this.form)
          .then(({ res }) => {
            this.$vs.loading.close()
          })
          .catch(({ res }) => {
            this.$vs.loading.close()
          })
      }
    },
  },
}
</script>
<style lang="scss" scoped></style>
