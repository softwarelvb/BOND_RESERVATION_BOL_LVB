<template>
  <div>
    <div
        class="
          container
          height-100
          justify-content-center
        "
    >
      <!--      this is {{ UserInfo }}-->
      <div class="position-relative">
        <div class="card p-2 pb-4 shadow">
          <b-row class="justify-content-md-center pt-3 pb-3 pl-3 pr-3">
            <b-col class="pt-2" sm="12" lg="5" md="5">
              <h3 class="text-center text-success">
                {{ $t("Notification.RegisterUserSuccess") }}
              </h3>
              <h5 class="text-center">
                <font-awesome-icon class="text-success p-2" size="4x" icon="fa-solid fa-check"/>
              </h5>
              <div style="font-size: 14px">
                <span class="text-left">
                          <font-awesome-icon icon="fa-solid fa-circle-info"/>
                          ຂໍ້ມູນລາຍລະອຽດຜູ້ໃຊ້
                        </span>
                <b-row class="pt-3">
                  <b-col sm="4" class="text-left">
                    <span> <strong>

                   {{ $t("Register.NameAndLastName") }}:  </strong>  </span>
                  </b-col>
                  <b-col class="text-left">
                            <span>
                              {{ UserInfo && UserInfo.name }}
                            </span>
                  </b-col>
                </b-row>
                <hr>
                <b-row>
                  <b-col sm="4">
                    <span> <strong>
                      {{ $t("Register.Address") }}:
                    </strong>  </span>
                  </b-col>
                  <b-col>
                    {{ UserInfo && UserInfo.address }}
                  </b-col>
                </b-row>
                <hr>
                <b-row>
                  <b-col sm="4">
                    <span> <strong> {{ $t("Register.Email") }}: </strong></span>
                  </b-col>
                  <b-col>
                    {{ UserInfo && UserInfo.email }}
                  </b-col>
                </b-row>
                <hr>
                <b-row>
                  <b-col sm="4">
                    <span> <strong>
                      {{ $t("Register.Phone") }}:
                    </strong>  </span>
                  </b-col>
                  <b-col>
                    {{ UserInfo && UserInfo.phone }}
                  </b-col>
                </b-row>
                <hr>
                <b-row>
                  <b-col sm="4">
                    <span> <strong>
                      {{ $t("Register.CustomerType") }}:
                    </strong>  </span>
                  </b-col>
                  <b-col>
                    {{ UserInfo && UserInfo.id_org === 'N' ? 'ORG' : 'Individual' }}
                  </b-col>
                </b-row>
                <hr>
                <b-row>
                  <b-col sm="4">
                    <span> <strong>
                       {{ $t("Register.RegisterDate") }}:
                    </strong></span>
                  </b-col>
                  <b-col>
                    {{ getNow }}
                  </b-col>
                </b-row>
                <b-row class="pt-4">
                  <b-col>
                    <b-button @click="goLoginPage" size="sm" class="pt-2 pb-2 mt-2" block variant="primary"> {{
                        $t("Login.Login")
                      }}
                    </b-button>
                  </b-col>
                </b-row>
              </div>

            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {get} from 'vuex-pathify'

export default {
  name: "STEP3",
  computed: {
    UserInfo: get("reqRegisterData"),
    getNow() {
      return new Date().toLocaleString()
    }
  },
  methods: {
    goLoginPage() {
      this.$router.push("/login")
    }
  },
}
</script>

<style scoped>

</style>