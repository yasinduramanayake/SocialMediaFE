<template>
  <div>
    <b-container>
      <div class="large_break"></div>
      <h1 class="h2 header_style">Contact Us</h1>
      <span class="contact_sub_paragraph"
        >Please fill the form and we will get back to you in 24 hours.</span
      >
      <div class="small_break"></div>
      <b-row>
        <b-col lg="8" md="6" sm="12" cols="12">
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
                          v-model="form.firstName"
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
                          v-model="form.lastName"
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
                      <b-form-file></b-form-file>
                    </b-col>
                    <b-col lg="12" md="12" sm="12" cols="12">
                      <br />
                      <center>
                        <b-button
                          type="submit"
                          style="height: 50px; width: 80px"
                          size="lg"
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
            <a href="buysocialmediamarketing.com" class="link-form"
              >buysocialmediamarketing.com</a
            ><br />
            <a href="buysocialmediamarketing.com" class="link-form"
              >buysocialmediamarketing.com</a
            >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue';
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
      title: Vue.prototype.$appName  + ' - ' + 'Contact Us',
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
    onSubmit() {
      this.errors = []

      if (this.firstName === '') {
        this.errors.push('First Name is required.')
      }

      if (this.errors.length === 0) {
        const formData = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          subject: this.subject,
          message: this.message,
          attachment: this.attachment,
        }

        console.log('Form Data:', formData)
      }
    },
    handleFileUpload(event) {
      this.attachment = event.target.files[0]
    },
  },
}
</script>

<style></style>
