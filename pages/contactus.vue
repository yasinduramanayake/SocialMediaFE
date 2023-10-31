<template>
    <div class="contact-form">
      <h1>Contact Us</h1>
      <p>Please fill the form and we will get back to you in 24 hours.</p>
      <form @submit.prevent="onSubmit">
        <b-row>
          <b-col md="6">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <b-form-input type="text" id="firstName" name="firstName" v-model="form.firstName"/>
        </div>
          </b-col>
          <b-col md="6">
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <b-form-input type="text" id="lastName" name="lastName" v-model="form.lastName"/>
        </div>
      </b-col>
      <b-col md="6">
        <div class="form-group">
          <label for="email">Email</label>
          <b-form-input type="email" id="email" name="email" v-model="form.email"/>
        </div></b-col>
        <b-col md="6">
        <div class="form-group">
          <label for="subject">Subject</label>
          <b-form-input type="text" id="subject" name="subject" v-model="form.subject"/>
        </div></b-col>
        <b-col md="6">
        <div class="form-group">
          <label for="message">Message</label>
          <b-form-textarea id="message" name="message" v-model="form.message"/>
        </div></b-col>
        <b-col md="6">
        <div class="form-group file-upload">
          <label for="attachment">Attach a file</label>
          <input type="file" id="attachment" name="attachment" @change="handleFileUpload">
        </div></b-col>
        <b-col md="6">
        <div class="form-group">
          <b-button type="submit">Send</b-button>
        </div>
        </b-col>
        </b-row>
      </form>
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
  
  .contact-form {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .contact-form h1 {
    font-size: 0.8cm;
    font-weight: bold;
    margin-top: 1cm;
    font-size: 30px;
  }
.contact-form p{
    font-size: 0.5cm;
    text-align: left;
}
  
  .contact-form form {
    padding: 20px;
  }
  
  .contact-form .form-group {
    margin-bottom: 10px;
  }
  
  .contact-form .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .contact-form .form-group input,
  .contact-form .form-group textarea {
    width: 100%;
    border: 1px solid #ccc;
    padding: 5px;
    font-size: 16px;
  }
  
  .contact-form .form-group button {
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 25px;
    padding: 14px 29px 14px 29px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .contact-form .form-group button:hover {
    background-color: #333;
  }
  
  .contact-form .form-group .file-upload {
    position: relative;
  }
  
  .contact-form .form-group .file-upload input[type="file"] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  
  .contact-form .form-group .file-upload button {
    width: 100%;
    height: 30px;
    background-color: #ccc;
    border: 1px solid #ccc;
    cursor: pointer;
  }
  
  </style>
  