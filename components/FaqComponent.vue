<template>
  <div class="faq_background">
    <br /><br /><br />
    <div class="tab_iew_faq">
      <b-container>
        <b-row no-gutters class="d-flex justify-content-between">
          <b-col lg="7">
            <b-container>
              <h2 class="h2 faq_header">FAQ</h2>
              <br />

              <b-card class="card_faq_styles">
                <h4 id="genaralquestions" class="h3 faq-h3-color">
                  Genaral Questions
                </h4>
                <br /><br />
                <div class="accordion" role="tablist">
                  <div @click="genaralAcormendation1focus()">
                    <b-card no-body class="mb-1 acordian-border">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-container
                          class="tabpane_allign"
                          v-b-toggle.accordion-1
                        >
                          <b-row>
                            <b-col cols="11" md="6">Acormendation</b-col>
                            <b-col cols="1" md="6">
                              <div class="acormendationpaddingbutton">
                                <div v-if="genaralAcormendation1 === 1">
                                  <b-button
                                    variant="outline-light"
                                    class="dropicons-faq"
                                    ><b-img
                                      style="opacity: 0.7"
                                      src="../assets/9024889_plus_light_icon.svg"
                                      width="30%"
                                    ></b-img
                                  ></b-button>
                                </div>
                                <div v-if="genaralAcormendation1 === 0">
                                  <b-button
                                    variant="outline-light"
                                    class="dropicons-faq"
                                    ><b-img
                                      style="opacity: 0.7"
                                      src="../assets/9024684_minus_light_icon.svg"
                                      width="30%"
                                    ></b-img
                                  ></b-button>
                                </div>
                              </div>
                            </b-col>
                          </b-row>
                        </b-container>
                      </b-card-header>
                      <b-collapse
                        id="accordion-1"
                        visible
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <b-card-text class="faq_answer">{{
                            text
                          }}</b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </div>

                  <div @click="genaralAcormendation2focus()">
                    <b-card no-body class="mb-1 acordian-border">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-container
                          class="tabpane_allign"
                          v-b-toggle.accordion-2
                        >
                          <b-row>
                            <b-col cols="11" md="6">Acormendation</b-col>
                            <b-col cols="1" md="6">
                              <div class="acormendationpaddingbutton">
                                <div v-if="genaralAcormendation2 === 1">
                                  <b-button
                                    variant="outline-light"
                                    class="dropicons-faq"
                                    ><b-img
                                      style="opacity: 0.7"
                                      src="../assets/9024889_plus_light_icon.svg"
                                      width="30%"
                                    ></b-img
                                  ></b-button>
                                </div>
                                <div v-if="genaralAcormendation2 === 0">
                                  <b-button
                                    variant="outline-light"
                                    class="dropicons-faq"
                                    ><b-img
                                      style="opacity: 0.7"
                                      src="../assets/9024684_minus_light_icon.svg"
                                      width="30%"
                                    ></b-img
                                  ></b-button>
                                </div>
                              </div>
                            </b-col>
                          </b-row>
                        </b-container>
                      </b-card-header>
                      <b-collapse
                        id="accordion-2"
                        visible
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <b-card-text class="faq_answer">{{
                            text
                          }}</b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </div>

                  <div @click="genaralAcormendation3focus()">
                    <b-card no-body class="mb-1 acordian-border">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-container
                          class="tabpane_allign"
                          v-b-toggle.accordion-3
                        >
                          <b-row>
                            <b-col cols="11" md="6">Acormendation</b-col>
                            <b-col cols="1" md="6">
                              <div class="acormendationpaddingbutton">
                                <div v-if="genaralAcormendation3 === 1">
                                  <b-button
                                    variant="outline-light"
                                    class="dropicons-faq"
                                    ><b-img
                                      style="opacity: 0.7"
                                      src="../assets/9024889_plus_light_icon.svg"
                                      width="30%"
                                    ></b-img
                                  ></b-button>
                                </div>
                                <div v-if="genaralAcormendation3 === 0">
                                  <b-button
                                    variant="outline-light"
                                    class="dropicons-faq"
                                    ><b-img
                                      style="opacity: 0.7"
                                      src="../assets/9024684_minus_light_icon.svg"
                                      width="30%"
                                    ></b-img
                                  ></b-button>
                                </div>
                              </div>
                            </b-col>
                          </b-row>
                        </b-container>
                      </b-card-header>
                      <b-collapse
                        id="accordion-3"
                        visible
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <b-card-text class="faq_answer">{{
                            text
                          }}</b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </div>

                  <div @click="genaralAcormendation4focus()">
                    <b-card no-body class="mb-1 acordian-border">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-container
                          class="tabpane_allign"
                          v-b-toggle.accordion-4
                        >
                          <b-row>
                            <b-col cols="11" md="6">Acormendation</b-col>
                            <b-col cols="1" md="6">
                              <div class="acormendationpaddingbutton">
                                <div v-if="genaralAcormendation4 === 1">
                                  <b-button
                                    variant="outline-light"
                                    class="dropicons-faq"
                                    ><b-img
                                      style="opacity: 0.7"
                                      src="../assets/9024889_plus_light_icon.svg"
                                      width="30%"
                                    ></b-img
                                  ></b-button>
                                </div>
                                <div v-if="genaralAcormendation4 === 0">
                                  <b-button
                                    variant="outline-light"
                                    class="dropicons-faq"
                                    ><b-img
                                      style="opacity: 0.7"
                                      src="../assets/9024684_minus_light_icon.svg"
                                      width="30%"
                                    ></b-img
                                  ></b-button>
                                </div>
                              </div>
                            </b-col>
                          </b-row>
                        </b-container>
                      </b-card-header>
                      <b-collapse
                        id="accordion-4"
                        visible
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <b-card-text class="faq_answer">{{
                            text
                          }}</b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </div>
                </div>
              </b-card>

              <br />
              <br />
              <b-card class="card_faq_styles">
                <h4 id="affiliatequestions" class="h3 faq-h3-color">
                  Affiliate Questions
                </h4>
                <br /><br />
                <div class="accordion" role="tablist">
                  <div @click="affiliateAcormendation1focus()">
                    <b-card no-body class="mb-1 acordian-border">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-container
                          class="tabpane_allign"
                          v-b-toggle.accordion-af1
                        >
                          <b-row>
                            <b-col cols="11" md="6">Acormendation</b-col>
                            <b-col cols="1" md="6">
                              <div class="acormendationpaddingbutton">
                                <div v-if="affiliateAcormendation1 === 1">
                                  <b-button
                                    variant="outline-light"
                                    class="dropicons-faq"
                                    ><b-img
                                      style="opacity: 0.7"
                                      src="../assets/9024889_plus_light_icon.svg"
                                      width="30%"
                                    ></b-img
                                  ></b-button>
                                </div>
                                <div v-if="affiliateAcormendation1 === 0">
                                  <b-button
                                    variant="outline-light"
                                    class="dropicons-faq"
                                    ><b-img
                                      style="opacity: 0.7"
                                      src="../assets/9024684_minus_light_icon.svg"
                                      width="30%"
                                    ></b-img
                                  ></b-button>
                                </div>
                              </div>
                            </b-col>
                          </b-row>
                        </b-container>
                      </b-card-header>
                      <b-collapse
                        id="accordion-af1"
                        visible
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <b-card-text class="faq_answer">{{
                            text
                          }}</b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </div>

                  <div @click="affiliateAcormendation2focus()">
                    <b-card no-body class="mb-1 acordian-border">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-container
                          class="tabpane_allign"
                          v-b-toggle.accordion-af2
                        >
                          <b-row>
                            <b-col cols="11" md="6">Acormendation</b-col>
                            <b-col cols="1" md="6">
                              <div class="acormendationpaddingbutton">
                                <div v-if="affiliateAcormendation2 === 1">
                                  <b-button
                                    variant="outline-light"
                                    class="dropicons-faq"
                                    ><b-img
                                      style="opacity: 0.7"
                                      src="../assets/9024889_plus_light_icon.svg"
                                      width="30%"
                                    ></b-img
                                  ></b-button>
                                </div>
                                <div v-if="affiliateAcormendation2 === 0">
                                  <b-button
                                    variant="outline-light"
                                    class="dropicons-faq"
                                    ><b-img
                                      style="opacity: 0.7"
                                      src="../assets/9024684_minus_light_icon.svg"
                                      width="30%"
                                    ></b-img
                                  ></b-button>
                                </div>
                              </div>
                            </b-col>
                          </b-row>
                        </b-container>
                      </b-card-header>
                      <b-collapse
                        id="accordion-af2"
                        visible
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <b-card-text class="faq_answer">{{
                            text
                          }}</b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </div>

                  <div @click="affiliateAcormendation3focus()">
                    <b-card no-body class="mb-1 acordian-border">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-container
                          class="tabpane_allign"
                          v-b-toggle.accordion-af3
                        >
                          <b-row>
                            <b-col md="6">Acormendation</b-col>
                            <b-col md="6">
                              <div class="acormendationpaddingbutton">
                                <div v-if="affiliateAcormendation3 === 1">
                                  <b-button
                                    variant="outline-light"
                                    class="dropicons-faq"
                                    ><b-img
                                      style="opacity: 0.7"
                                      src="../assets/9024889_plus_light_icon.svg"
                                      width="30%"
                                    ></b-img
                                  ></b-button>
                                </div>
                                <div v-if="affiliateAcormendation3 === 0">
                                  <b-button
                                    variant="outline-light"
                                    class="dropicons-faq"
                                    ><b-img
                                      style="opacity: 0.7"
                                      src="../assets/9024684_minus_light_icon.svg"
                                      width="30%"
                                    ></b-img
                                  ></b-button>
                                </div>
                              </div>
                            </b-col>
                          </b-row>
                        </b-container>
                      </b-card-header>
                      <b-collapse
                        id="accordion-af3"
                        visible
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <b-card-text class="faq_answer">{{
                            text
                          }}</b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </div>
                  <div @click="affiliateAcormendation4focus()">
                    <b-card no-body class="mb-1 acordian-border">
                      <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-container
                          class="tabpane_allign"
                          v-b-toggle.accordion-af4
                        >
                          <b-row>
                            <b-col cols="11" md="6">Acormendation</b-col>
                            <b-col cols="1" md="6">
                              <div class="acormendationpaddingbutton">
                                <div v-if="affiliateAcormendation4 === 1">
                                  <b-button
                                    variant="outline-light"
                                    class="dropicons-faq"
                                    ><b-img
                                      style="opacity: 0.7"
                                      src="../assets/9024889_plus_light_icon.svg"
                                      width="30%"
                                    ></b-img
                                  ></b-button>
                                </div>
                                <div v-if="affiliateAcormendation4 === 0">
                                  <b-button
                                    variant="outline-light"
                                    class="dropicons-faq"
                                    ><b-img
                                      style="opacity: 0.7"
                                      src="../assets/9024684_minus_light_icon.svg"
                                      width="30%"
                                    ></b-img
                                  ></b-button>
                                </div>
                              </div>
                            </b-col>
                          </b-row>
                        </b-container>
                      </b-card-header>
                      <b-collapse
                        id="accordion-af4"
                        visible
                        accordion="my-accordion"
                        role="tabpanel"
                      >
                        <b-card-body>
                          <b-card-text class="faq_answer">{{
                            text
                          }}</b-card-text>
                        </b-card-body>
                      </b-collapse>
                    </b-card>
                  </div>
                </div>
              </b-card>
            </b-container>
          </b-col>
          <b-col lg="4">
            <div class="categories_faq">
              <b-card class="card_categories_styles">
                <div class="col-md-4 d-none d-md-block">
                  <div class="categories block-right">
                    <div class="block-item width_content_category">
                      <div class="block-right-head mb-25">
                        <b> <span class="bold_categories">Categories</span></b>
                      </div>

                      <br />
                      <div class="block-right-body">
                        <ul class="list-links">
                          <li class="active" style="color: rgb(0, 115, 255)">
                            <a href="#genaralquestions">General questions</a>
                          </li>
                          <div class="break_categories"></div>
                          <li>
                            <a href="#affiliatequestions"
                              >Affiliate questions</a
                            >
                          </li>
                          <div class="break_categories"></div>
                          <li>
                            <a href="#account-questions">Account questions</a>
                          </li>
                          <div class="break_categories"></div>
                          <li>
                            <a href="#orders-questions">Orders questions</a>
                          </li>
                          <div class="break_categories"></div>
                          <li>
                            <a href="#free-trials-questions"
                              >Free trials questions</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <br /><br /><br />

    <br /><br /><br />
  </div>
</template>
<script>
export default {
  data() {
    return {
      // Genaral

      genaralAcormendation1: 0,
      genaralAcormendation2: 1,
      genaralAcormendation3: 1,
      genaralAcormendation4: 1,

      // Affiliate

      affiliateAcormendation1: 1,
      affiliateAcormendation2: 1,
      affiliateAcormendation3: 1,
      affiliateAcormendation4: 1,

      text: `
			Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
			richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
			brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
			tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
			assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
			wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
			vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
			synth nesciunt you probably haven't heard of them accusamus labore VHS.
		  `,
    }
  },
  methods: {
    genaralAcormendation1focus() {
      if (this.genaralAcormendation1 === 0) {
        this.genaralAcormendation1 = 1
      } else if (this.genaralAcormendation1 === 1) {
        this.genaralAcormendation1 = 0
      }
    },
    // genaralAcormendation1minus() {
    //   this.genaralAcormendation1 = 1
    // },

    genaralAcormendation2focus() {
      if (this.genaralAcormendation2 === 1) {
        this.genaralAcormendation2 = 0
      } else if (this.genaralAcormendation2 === 0) {
        this.genaralAcormendation2 = 1
      }
    },
    genaralAcormendation3focus() {
      if (this.genaralAcormendation3 === 1) {
        this.genaralAcormendation3 = 0
      } else if (this.genaralAcormendation3 === 0) {
        this.genaralAcormendation3 = 1
      }
    },
    genaralAcormendation4focus() {
      if (this.genaralAcormendation4 === 1) {
        this.genaralAcormendation4 = 0
      } else if (this.genaralAcormendation4 === 0) {
        this.genaralAcormendation4 = 1
      }
    },

    affiliateAcormendation1focus() {
      if (this.affiliateAcormendation1 === 1) {
        this.affiliateAcormendation1 = 0
      } else if (this.affiliateAcormendation1 === 0) {
        this.affiliateAcormendation1 = 1
      }
    },
    affiliateAcormendation2focus() {
      if (this.affiliateAcormendation2 === 1) {
        this.affiliateAcormendation2 = 0
      } else if (this.affiliateAcormendation2 === 0) {
        this.affiliateAcormendation2 = 1
      }
    },
    affiliateAcormendation3focus() {
      if (this.affiliateAcormendation3 === 1) {
        this.affiliateAcormendation3 = 0
      } else if (this.affiliateAcormendation3 === 0) {
        this.affiliateAcormendation3 = 1
      }
    },
    affiliateAcormendation4focus() {
      if (this.affiliateAcormendation4 === 1) {
        this.affiliateAcormendation4 = 0
      } else if (this.affiliateAcormendation4 === 0) {
        this.affiliateAcormendation4 = 1
      }
    },
  },
}
</script>
