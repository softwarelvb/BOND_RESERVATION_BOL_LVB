<template>
    <div>
        <vs-dialog width="550px" not-center v-model="checkAccept">
            <template #header>
                <h4 class="pt-2 text-center">
                    ແຈ້ງເຕືອນ!! </h4>
            </template>
            <div class="con-content text-center pb-3">
                <h5 class="pt-2">
                    ທ່ານ ເຫັນດີໃຫ້ທະນາຄານ ບ໋ອກເງິນໃນບັນຊີຂອງທ່ານ ຈຳນວນ 50% ຂອງມູນຄ່າສັ່ງຈອງ ຫຼື ບໍ່ ? </h5>
            </div>
            <template #footer class="con-footer d-flex justify-content-end">
                <b-row class="justify-content-center">
                    <b-col>
                        <vs-button block @click="onDoSaveToDB" class="mr-2 mx-2">
                            ຢືນຢັນ
                        </vs-button>
                    </b-col>
                    <b-col>
                        <vs-button block @click="checkAccept=false" dark flat class="mx-2">
                            ຍົກເລີກ
                        </vs-button>
                    </b-col>
                </b-row>
            </template>
        </vs-dialog>
        <b-row class="justify-content-md-center pt-3 pb-3 pl-3 pr-3">
            <b-col>
                <h4 style="font-size: 16px" class="pt-3">
                    <font-awesome-icon icon="fa-solid fa-circle-info"/>
                    ຂໍ້ມູນພື້ນຖານ
                </h4>
                <b-row class="pb-2 pt-1">
                    <b-col class="pb-2" sm="12" lg="6" md="6">
                        <label for="firstname"> ຊື່ ແລະ ນາມສະກຸນ ຫຼື ນິຕິບຸກຄົນ:</label>
                        <b-form-input
                           type="text"
                           name="CUSTOMERNAME"
                           v-validate="'required|min:8'"
                           size="sm"
                           placeholder="ປ້ອນຊື່ ແລະ ນາມສະກຸນ ຫຼື ນິຕິບຸກຄົນ"
                           v-model="CUSTOMERNAME"
                        />
                        <span class="text-danger validate-message">{{
                                errors.first("CUSTOMERNAME")
                                   ? "ກະລຸນາປ້ອນຊື່ ແລະ ນາມສະກູນ ຫຼື ນິຕິບຸກຄົນ"
                                   : ""
                            }}</span>
                    </b-col>
                    <b-col sm="12" lg="6" md="6">
                        <label for="firstname"> ທີຢູ່ປັດຈຸບັນ</label>
                        <b-form-select
                           v-model="ADDRESS"
                           :options="provinces"
                           class="mb-2 form-control"
                           value-field="item"
                           text-field="name"
                           disabled-field="notEnabled"
                        ></b-form-select>
                    </b-col>
                </b-row>
                <b-row class="pb-2">
                    <b-col sm="12" lg="6" md="6">
                        <b-card class="mb-2">
                            <label for="firstname"> ສຳເນົາເອກະສານປະກອບ </label>
                            <b-row class="pt-2">
                                <b-col class="pb-3" sm="12" lg="5" md="5" style="font-size: 13px">
                                    <vs-radio v-model="personalDocType" val="IC">
                                        ບັດປະຈຳຕົວ
                                    </vs-radio>
                                </b-col>
                                <b-col class="pb-3" sm="12" lg="5" md="5" style="font-size: 13px">
                                    <vs-radio v-model="personalDocType" val="PP">
                                        ໜັງສືຜ່ານແດນ
                                    </vs-radio>
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-col>
                    <b-col class="mb-2" sm="12" lg="6" md="6">
                        <label for="firstname"> ເລກທີ {{
                                personalDocType === 'IC' ? 'ບັດປະຈຳຕົວ' : 'ໜັງສືຜ່ານແດນ'
                            }}:
                        </label>
                        <b-form-input
                           type="text"
                           name="IDENTIFICATIONNUMBER"
                           v-validate="'required'"
                           class="form-control form-control-sm"
                           :placeholder="personalDocType === 'IC' ? 'ປ້ອນເລກທີ  ບັດປະຈຳຕົວ' : 'ປ້ອນເລກທີ ໜັງສືຜ່ານແດນ'"
                           v-model="IDENTIFICATIONNUMBER"
                        />
                        <span class="text-danger validate-message">{{
                                errors.first("IDENTIFICATIONNUMBER")
                                   ? "ກະລຸນາປ້ອນເລກທີເອກະສານ"
                                   : ""
                            }}</span>
                    </b-col>
                </b-row>

                <b-row>

                    <b-col class="mb-2" sm="12" lg="6" md="6">
                        <label for="firstname"> ເລກທີ ໃບທະບຽນວິສະຫະກິດ:
                        </label>
                        <b-form-input
                           type="text"
                           name="ENTERPRISENUMBER"
                           v-validate="'required|min:4'"
                           class="form-control form-control-sm"
                           placeholder="ປ້ອນເລກທີ ໃບທະບຽນວິສະຫະກິດ"
                           v-model="ENTERPRISENUMBER"
                        />
                        <span class="text-danger validate-message">{{
                                errors.first("ENTERPRISENUMBER")
                                   ? "ກະລຸນາປ້ອນເລກທີໃບທະບຽນວິສະຫະກິດ"
                                   : ""
                            }}</span>
                    </b-col>
                    <b-col sm="12" lg="6" md="6">
                        <label for="firstname"> ເບີໂທລະສັບ:
                        </label>
                        <b-form-input
                           type="number"
                           name="MOBILE"
                           v-validate="'required|min:8'"
                           class="form-control form-control-sm"
                           placeholder="ປ້ອນເບີໂທລະສັບ"
                           v-model="MOBILE"
                        />
                        <span class="text-danger validate-message">{{
                                errors.first("MOBILE")
                                   ? "ກະລຸນາປ້ອນເບີໂທລະສັບ"
                                   : ""
                            }}</span>
                    </b-col>
                </b-row>

                <h4 style="font-size: 16px" class="pt-3">
                    <font-awesome-icon icon="fa-solid fa-circle-info"/>
                    ຂໍ້ມູນການສະເໜີ
                </h4>
                <b-row class="pt-2 pb-2">
                    <b-col sm="12" lg="12" md="12">
                        <label for="firstname"> ຈຸດປະສົງການຊື້ພັນທະບັດ </label>
                        <b-form-textarea
                           rows="2"
                           max-rows="3"
                           name="PURPOSE"
                           v-validate="'required|min:5'"
                           class="form-control"
                           placeholder="ກະລຸນາປ້ອນຈຸດປະສົງໃນການຊື້ພັນທະບັດ...."
                           v-model="PURPOSE"
                        />
                        <span class="text-danger validate-message">{{
                                errors.first("PURPOSE")
                                   ? "ກະລຸນາປ້ອນຈຸດປະສົງໃນການຊື້ພັນທະບັດ"
                                   : ""
                            }}</span>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col class="pb-2" sm="12" lg="6" md="6">
                        <label for="firstname"> {{ $t("FormPaymentOrder.Branch") }}</label>
                        <b-form-select
                           v-model="BRANCH"
                           :options="branch"
                           class="mb-2 form-control"
                           value-field="item"
                           text-field="name"
                           disabled-field="notEnabled"
                        ></b-form-select>
                    </b-col>
                    <b-col class="pb-2" sm="12" lg="6" md="6">
                        <label for="firstname"> {{ $t("FormPaymentOrder.Acc") }}</label>
                        <b-form-input
                           type="number"
                           name="ACCOUNTNUMBER"
                           v-validate="'required|min:14|max:14'"
                           class="form-control"
                           max="14"
                           :placeholder="$t(`FormPaymentOrder.PleaseEnterAcc`)"
                           v-model="ACCOUNTNUMBER"
                        />
                        <span class="text-danger validate-message">{{
                                errors.first("ACCOUNTNUMBER")
                                   ? $t("FormPaymentOrder.PleaseEnterAcc")
                                   : ""
                            }}</span></b-col>

                </b-row>
                <b-row>
                    <b-col class="pb-2" sm="12" lg="12" md="12">
                        <label for="firstname"> {{ $t("FormPaymentOrder.Amount") }}</label>
                        <b-form-input
                           type="number"
                           name="BOOKAMOUNT"
                           v-validate="'required|min:6'"
                           class="form-control"
                           :placeholder="$t(`FormPaymentOrder.PleaseEnterAmount`)"
                           v-model="BOOKAMOUNT"
                        />
                        <span class="text-danger validate-message">{{
                                errors.first("BOOKAMOUNT")
                                   ? $t("FormPaymentOrder.PleaseEnterAmount")
                                   : ""
                            }}</span></b-col>
                </b-row>
                <b-row>
                    <b-col sm="12" lg="12" md="12">
                        <label for="firstname"> {{ $t("FormPaymentOrder.Amount") }}: <span
                           class="text-success font-weight-bold">
                          {{ format_money(BOOKAMOUNT) }} </span>
                            {{ selectCurrency }}
                        </label>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col sm="12" lg="12" md="12">
                        <label for="firstname"> {{ $t("FormPaymentOrder.AmountText") }}:
                            <strong>
                                {{ laoNumberString(BOOKAMOUNT) }} </strong>
                            {{ selectCurrency }}
                        </label>
                    </b-col>
                </b-row>
                <b-row class="pt-3 pb-4">
                    <b-col sm="12" lg="12" md="12">
                        <b-button block variant="primary" @click="onDoCreateForm"> ບັນທຶກແບບຟອມ
                        </b-button>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </div>

</template>

<script>
import {get} from "vuex-pathify"
import RestApi from "@/API/RestApi";

export default {
    name: "PaymentOrder.vue",
    data() {
        return {
            checkAccept: false,

            inputDate: null,
            selectBranch: "010",
            inputAmount: null,
            selectCurrency: "LAK",
            inputRemark: null,

            inputDebitAccName: null,
            inputDebitAcc: null,
            inputDebitBank: null,

            inputCreditAccName: null,
            inputCreditAcc: null,
            inputCreditBank: null,

            inputReceiveName: null,
            inputPersonalID: null,
            inputPersonalIDDate: null,
            inputPersonalIDPlace: null,

            selectedCustomerType: '',
            customerTypes: ['ລູກຄ້າສ່ວນບຸກຄົນ', 'ລູກຄ້າວິສະຫະກິດ ຫຼື ອົງກອນ'],

            personalDoc: '',
            personalDocType: 'IC',

            CUSTOMERNAME: null,
            CUSTOMERTYPE: "DN",
            ENTERPRISENUMBER: null,
            IDENTIFICATIONNUMBER: null,
            MOBILE: null,
            ADDRESS: "VTE",
            BOOKAMOUNT: null,
            PURPOSE: null,
            BRANCH: "010",
            ACCOUNTNUMBER: null,

            formData: ""

        }
    },
    computed: {
        branch: get("branch"),
        provinces: get("provinces"),
        optCurrency: get("OptionCurreny"),
        session: get("session"),
        token: get("token")
    },
    methods: {
        selectCustomerType(type) {
            this.selectedCustomerType = type;
            // Do something with the selected customer type
        },
        async onDoCreateForm() {
            let form = {
                CUSTOMERNAME: this.CUSTOMERNAME,
                CUSTOMERTYPE: this.CUSTOMERTYPE,
                ENTERPRISENUMBER: "",
                IDENTIFICATIONNUMBER: this.IDENTIFICATIONNUMBER,
                MOBILE: this.MOBILE,
                ADDRESS: this.ADDRESS,
                BOOKAMOUNT: this.BOOKAMOUNT,
                PURPOSE: this.PURPOSE,
                BRANCH: this.BRANCH,
                ACCOUNTNUMBER: this.ACCOUNTNUMBER
            }
            // console.log("form.BOOKAMOUNT", form.BOOKAMOUNT)
            // console.log("form", form)
            this.formData = form;
            if (form.BOOKAMOUNT > 1000000000) {
                this.$store.set("modalAlert", {
                    state: true,
                    text: "ຂໍອະໄພ ທ່ານບໍ່ສາມາດປ້ອນຈຳນວນເງິນເກີນ 1 ຕື້ກີບ",
                    type: "alert",
                });
                return;
            }
            const invalid = await this.$validator.validate();
            if (!invalid || this.errors.any()) {
                this.$store.set("modalAlert", {
                    state: true,
                    text: this.$t("Modal.PleaseEnterValue"),
                    type: "alert",
                });
            } else {
                this.checkAccept = true;
            }
        },
        onDoSaveToDB(){
            const loading = this.$vs.loading({
                text: this.$t("Loading.text"),
            });
            RestApi.onDoCreateFormBond(this.formData).then((res) => {
                      // console.log("res", res)
                      loading.close();
                      if (res.status === 200 && res.data?.statusCode === 0) {
                          this.$store.set("modalAlert", {
                              state: true,
                              text: "ລົງທະບຽນແບບຟອມສຳເລັດແລ້ວ",
                              type: "alert",
                          });
                          this.$store.set("user_bond_data", res.data?.data)
                          this.$router.push("/form-success")
                      } else {
                          this.$store.set("modalAlert", {
                              state: true,
                              text: `ການລົງທະບຽນຂອງທ່ານບໍ່ສຳເລັດ ${res.data?.errdesc}`,
                              type: "alert",
                          });
                      }
                  })
               .catch(() => {
                   loading.close();
                   this.$store.set("modalAlert", {
                       state: true,
                       text: "ການລົງທະບຽນຂອງທ່ານບໍ່ສຳເລັດ",
                       type: "alert",
                   });
                   // console.log(err)
               })
        },
    },
    mounted() {
        // Select the initially selected button
        const button = this.$el.querySelector(`[aria-label="${this.selectedCustomerType}"]`);
        if (button) {
            button.classList.add('active');
        }
    },
    watch: {
        selectedCustomerType(newVal, oldVal) {
            // Unselect the previously selected button
            const oldButton = this.$el.querySelector(`[aria-label="${oldVal}"]`);
            if (oldButton) {
                oldButton.classList.remove('active');
            }
            // Select the newly selected button
            const newButton = this.$el.querySelector(`[aria-label="${newVal}"]`);
            if (newButton) {
                newButton.classList.add('active');
            }
        },
        BOOKAMOUNT(value) {
            if (value > 1000000000) {
                this.$store.set("modalAlert", {
                    state: true,
                    text: "ຂໍອະໄພ ທ່ານບໍ່ສາມາດປ້ອນຈຳນວນເງິນເກີນ 1 ຕື້ກີບ",
                    type: "alert",
                });
                this.BOOKAMOUNT = "";
            }
        }
    }
}
</script>

<style scoped>

</style>