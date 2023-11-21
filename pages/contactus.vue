<template>
  <div>
    <div class="header-contact">
      <h1 class="contact-text-header">Contact Us</h1>
      <p>Please fill the form and we will get back to you in 24 hours.</p>
    </div>
    
  <b-card-group deck>
    <div class="cardform-left">
        <b-card>
        <template>
    <div class="contact-form">

      <br>
      <div class="contact">
      <form @submit.prevent="onSubmit" class="contact-f">
        <b-row>
          <b-col md="6">
        <div class="form-group">
          <label for="firstName" class="lable-form"><p class="pf">First Name</p></label>
          <b-form-input type="text" id="firstName" name="firstName" v-model="form.firstName" />
        </div>
          </b-col>
          <b-col md="6">
        <div class="form-group">
          <label for="lastName"><p class="pf">Last Name</p></label>
          <b-form-input type="text" id="lastName" name="lastName" v-model="form.lastName"/>
        </div>
      </b-col>
      <br>
      <b-col md="12">
        <div class="form-group">
          <label for="email"><p class="pf">Email</p></label>
          <b-form-input type="email" id="email" name="email" v-model="form.email"/>
        </div></b-col>
        <b-col md="12">
        <div class="form-group">
          <label for="subject"><p class="pf">Subject</p></label>
          <b-form-input type="text" id="subject" name="subject" v-model="form.subject"/>
        </div></b-col>
        <b-col md="12">
        <div class="form-group">
          <label for="message"><p class="pf">Message</P></label>
          <b-form-textarea id="message" name="message" v-model="form.message"/>
        </div></b-col>
        <b-col md="12">
        <div class="form-group file-upload">
          <label for="attachment"><p class="pf">Attach a file</p></label>
          <input type="file" id="attachment" name="attachment" @change="handleFileUpload" >
        </div></b-col>
        <b-col md="12">
          <hr>
        <center>
        <div class="form-group">
          <b-button type="submit">Send</b-button>
        </div>
        </center>
        </b-col>
        </b-row>
      </form>
    </div>
    </div>
  </template>
    </b-card>
    </div>


    <div class="cardform-right">
    <b-card>
    <template>
        <P class="form-right-text">Contact info</P>
        <a href="buysocialmediamarketing.com" class="link-form">buysocialmediamarketing.com</a><br>
        <a href="buysocialmediamarketing.com" class="link-form">buysocialmediamarketing.com</a>
    </template>
    </b-card>
    </div>
  </b-card-group>
</div>
  </template>

  
  <script>
  export default {
    name: 'ContactForm',
    data() {
      return {
        form:{},
        attachment: null,
        errors: []
      };
    },
    methods: {
      onSubmit() {
        this.errors = [];
  
        if (this.firstName === '') {
          this.errors.push("First Name is required.");
        }
  
        if (this.errors.length === 0) {

          const formData = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            subject: this.subject,
            message: this.message,
            attachment: this.attachment
          };
  
          console.log("Form Data:", formData);
        }
      },
      handleFileUpload(event) {
        this.attachment = event.target.files[0];
      }
    }
  };
  </script>
  
  <style>
 
  
  </style>
  