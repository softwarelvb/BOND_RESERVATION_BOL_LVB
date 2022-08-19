<template>
  <div>
    <section class="section">
      <div class="py-4 mt-4 py-sm-0">
        <div :style="windowWidth <= 820 ? 'height' : ''"
             :class="[windowWidth > 450 ? 'pt-4 mt-3' : ' pt-2 mt-4']" style="height: auto">
          <div class="display-table">
            <div class="display-table-cell">
              <div class="container">
                <div class="container ">
                  <div class="position-relative">
                    <div class="mt-3 pb-4">
                      <b-row class="justify-content-md-center pt-3 pb-3">
                        <b-col class="pt-2" sm="12" lg="5" md="5">
                          <b-card class="shadow p-3 pb-lg-5 pt-4">
                            <h5 class="text-center">
                              <font-awesome-icon style="color: #2e3138" size="5x" icon="fa-solid fa-user-gear"/>
                            </h5>
                            <h4 class="pt-3">
                              <font-awesome-icon icon="fa-solid fa-circle-info"/>
                              ຂໍ້ມູນລາຍລະອຽດ
                            </h4>
                            <div style="font-size: 15px">
                              <b-row class="pt-2 pb-2">
                                <b-col class="text-left">
                                  <strong>
                                    {{ $t("Register.NameAndLastName") }}: </strong>
                                </b-col>
                              </b-row>
                              <b-row>
                                <b-col sm="12" lg="12" md="12">
                                  <b-form-input
                                      class="form-control"
                                      disabled
                                      :value="UserInfo ? UserInfo.name : ''"
                                  />
                                </b-col>
                              </b-row>
                              <b-row class="pt-2 pb-2">
                                <b-col class="text-left">
                                  <strong>
                                    {{ $t("Register.Address") }}: </strong>
                                </b-col>
                              </b-row>
                              <b-row>
                                <b-col sm="12" lg="12" md="12">
                                  <b-form-input
                                      class="form-control"
                                      disabled
                                      :value="UserInfo ? UserInfo.ADDRESS : ''"
                                  />
                                </b-col>
                              </b-row>
                              <b-row class="pt-2 pb-2">
                                <b-col class="text-left">
                                  <strong>
                                    {{ $t("Register.Email") }}: </strong>
                                </b-col>
                              </b-row>
                              <b-row>
                                <b-col sm="12" lg="12" md="12">
                                  <b-form-input
                                      class="form-control"
                                      disabled
                                      :value="UserInfo ? UserInfo.EMAIL : ''"
                                  />
                                </b-col>
                              </b-row>
                              <b-row class="pt-2 pb-2">
                                <b-col>
                                  <strong>
                                    {{ $t("Register.Phone") }}:
                                  </strong>
                                </b-col>
                              </b-row>
                              <b-row>
                                <b-col sm="12" lg="12" md="12">
                                  <b-form-input
                                      class="form-control"
                                      disabled
                                      :value="UserInfo ? UserInfo.PHONE_NUMBER : ''"
                                  />
                                </b-col>
                              </b-row>
                            </div>
                          </b-card>
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {get} from 'vuex-pathify'

export default {
  name: "UserInfo.vue",
  data() {
    return {
      windowWidth: window.innerWidth,
    }
  },
  computed: {
    UserInfo: get("session")
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
}
</script>

<style scoped>

</style>