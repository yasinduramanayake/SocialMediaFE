<template>
  <div>
    
    <b-container>
      <div class="large_break"></div>
      <h1 class="h2 header_style">Contact Us</h1>
      <p class="contact_sub_paragraph">
        Please fill the form and we will get back to you in 24 hours.
      </p>
      <div class="small_break"></div>
      <b-row no-gutters class="d-flex justify-content-between">
        <b-col lg="7" md="6" sm="12" cols="12">
          <b-card style="border: none">
            <div class="">
              <br />
              <div class="contact">
                <b-form @submit.prevent="onSubmit" class="contact-f">
                  <b-row>
                    <b-col lg="6" md="12" sm="12" cols="12">
                      <div class="form-group">
                        <label for="firstName" class="lable-form"
                          ><p class="pf">First Name</p></label
                        >
                        <b-form-input
                          class="form_input_styles"
                          type="text"
                          id="firstName"
                          placeholder="firstname"
                          name="firstName"
                          v-model="form.first_name"
                        />
                      </div>
                    </b-col>
                    <b-col lg="6" md="12" sm="12" cols="12">
                      <div class="form-group">
                        <label for="lastName"
                          ><p class="pf">Last Name</p></label
                        >
                        <b-form-input
                          class="form_input_styles"
                          type="text"
                          id="lastName"
                          placeholder="lastname"
                          name="lastName"
                          v-model="form.last_name"
                        />
                      </div>
                    </b-col>
                    <br />
                    <b-col lg="12" md="12" sm="12" cols="12">
                      <div class="form-group">
                        <label for="email"><p class="pf">Email</p></label>
                        <b-form-input
                          class="form_input_styles"
                          type="email"
                          id="email"
                          name="email"
                          placeholder="email"
                          v-model="form.email"
                        /></div
                    ></b-col>
                    <b-col lg="12" md="12" sm="12" cols="12">
                      <div class="form-group">
                        <label for="subject"><p class="pf">Subject</p></label>
                        <b-form-input
                          class="form_input_styles"
                          type="text"
                          id="subject"
                          name="subject"
                          placeholder="subject"
                          v-model="form.subject"
                        >
                          <template slot="placeholder"> input </template>
                        </b-form-input>
                      </div></b-col
                    >
                    <b-col lg="12" md="12" sm="12" cols="12">
                      <div class="form-group">
                        <label for="message"><p class="pf">Message</p></label>
                        <b-form-textarea
                          class="form_input_styles"
                          id="message"
                          name="message"
                          placeholder="message"
                          v-model="form.message"
                        /></div
                    ></b-col>
                    <b-col lg="12" md="12" sm="12">
                      <label for="message"><p class="pf">File</p></label>
                      <b-form-file v-model="form.file"></b-form-file>
                    </b-col>
                    <b-col lg="12" md="12" sm="12" cols="12">
                      <br />
                      <center>
                        <b-button
                          style="height: 50px; width: 80px"
                          size="lg"
                          @click="addContactForm()"
                          variant="primary"
                          >Send</b-button
                        >
                      </center>
                    </b-col>
                  </b-row>
                </b-form>
              </div>
            </div>
          </b-card>
        </b-col>

        <b-col lg="4" md="6" sm="12" cols="12">
          <b-card style="border: none; text-align: left">
            <P class="form-right-text">Contact info</P>
            <br />
            <a href="httpteen@ifolo.co" class="link-form"
              >httpteen@ifolo.co</a
            ><br />
            <a href="httpteen@ifolo.co" class="link-form"
              >httpteen@ifolo.co</a
            >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <br class="br_tab_view" /><br class="br_tab_view" /><br
      class="br_tab_view"
    />
    <br class="br_tab_view" /><br class="br_tab_view" /><br
      class="br_tab_view"
    />
    <br class="br_tab_view" /><br class="br_tab_view" /><br
      class="br_tab_view"
    />
    <br class="br_tab_view" /><br class="br_tab_view" /><br
      class="br_tab_view"
    />
    <div>
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import contactApi from '@/Api/Modules/reviews'
export default {
  name: 'ContactForm',
  data() {
    return {
      form: {},
      attachment: null,
      errors: [],
    }
  },
  head() {
    return {
      title: Vue.prototype.$appName + ' - ' + 'Contact Us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home page description',
        },
      ],
    }
  },
  methods: {
    async addContactForm() {
      await this.$vs.loading({
        scale: 0.8,
      })
      const form = new FormData()
      form.append('first_name', this.form.first_name)
      form.append('last_name', this.form.last_name)
      form.append('email', this.form.email)
      form.append('subject', this.form.subject)
      form.append('message', this.form.message)
      form.append('file', this.form.file)
      await contactApi
        .AddContact(form)
        .then(() => {
          this.$vs.loading.close()
        })
        .catch(() => {
          this.$vs.loading.close()
        })
    },
  },
}
</script>

<style></style>
