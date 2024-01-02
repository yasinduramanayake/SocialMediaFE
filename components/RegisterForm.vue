<template>
  <div>
    <b-card class="border-0">
      <h2 class="h4 font-weight-bold text-center">Register</h2>
      <validation-observer ref="registerValidation">
        <b-form @submit.prevent>
          <b-row>
            <b-col lg="12">
              <b-form-group label="First Name" label-for="vi-first-name">
                <validation-provider
                  #default="{ errors }"
                  name="Full Name"
                  rules="required"
                >
                  <b-input-group class="input-group">
                    <b-form-input
                      id="vi-first-name"
                      type="text"
                      v-model="form.firstname"
                      placeholder="Enter First Name"
                      class="form_input_styles"
                    />
                    <b-input-group-append is-text>
                      <b-img
                        style="background-color: transparent"
                        width="18px"
                        src="@/assets/images/logo/abstract-user-flat-4.svg"
                      ></b-img>
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col lg="12">
              <b-form-group label="Last Name" label-for="vi-last-name">
                <validation-provider
                  #default="{ errors }"
                  name="Last Name"
                  rules="required"
                >
                  <b-input-group class="input-group">
                    <b-form-input
                      id="vi-last-name"
                      type="text"
                      v-model="form.lastname"
                      placeholder="Enter Last Name"
                      class="form_input_styles"
                    />
                    <b-input-group-append is-text>
                      <b-img
                        style="background-color: transparent"
                        width="18px"
                        src="@/assets/images/logo/abstract-user-flat-4.svg"
                      ></b-img>
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
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
                  name="password"
                  rules="required|min:6"
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
              <b-form-group label="Confirm Password" label-for="vi-first-name">
                <validation-provider
                  #default="{ errors }"
                  name="Confirm Password"
                  rules="required|confirmed:password"
                >
                  <b-input-group class="input-group">
                    <b-form-input
                      id="vi-first-name"
                      type="password"
                      v-model="form.password_confirmation"
                      placeholder="Enter Password"
                      class="form_input_styles"
                    />
                    <b-input-group-append is-text>
                      <b-img
                        style="background-color: transparent"
                        src="https://buysocialmediamarketing.com/img/password-icon.svg"
                      ></b-img>
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>

            <b-col lg="12" class="pt-1">
              <b-button
                block
                size="lg"
                class="login_button"
                @click="register()"
                type=""
                >Sign Up</b-button
              >
            </b-col>
          </b-row>
        </b-form>
      </validation-observer>
      <br />
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
  props: {
    cartProp: String,
  },
  methods: {
    async register() {
      if (await this.$refs.registerValidation.validate()) {
        await this.$vs.loading({
          scale: 0.8,
        })
        this.form.view = 'Front'
        await authApi
          .register(this.form, this.cartProp)
          .then(({ res }) => {
            this.$vs.loading.close()
          })
          .catch(({ res }) => {
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
<style lang="scss" scoped></style>
