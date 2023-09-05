<template>
    <div>
        <div style="font-size: 15px">
            <div class="position-relative">
                <div class="pb-4">
                    <b-row class="justify-content-md-center pt-1 pb-3">
                        <b-col class="pt-2" sm="12" lg="10" md="10">
                            <b-card class="shadow-sm pb-lg-5 pt-4">
                                <b-row class="justify-content-md-center">
                                    <b-col cols="auto">
                                        <h4 class="">ເລືອກປະເພດລູກຄ້າ</h4>
                                        <div class="text-center">
                                            <b-button-group class="shadow-sm">
                                                <b-button v-for="(type, index) in customerTypes" :key="index"
                                                          :variant="selectedCustomerType === type ? 'primary' : 'outline-primary'"
                                                          @click="selectCustomerType(type)">
                                                    <b-icon
                                                       :icon="type === 'ລູກຄ້າສ່ວນບຸກຄົນ' ? 'person-fill' : 'people-fill'"></b-icon>
                                                    {{ type }}
                                                </b-button>
                                            </b-button-group>
                                        </div>
                                    </b-col>
                                </b-row>
                                <div v-if="selectedCustomerType">
                                    <div class="border border-dashed mt-4"></div>
                                    <h4 style="font-size: 18px" class="text-center pt-3">
                                        <font-awesome-icon icon="fa-solid fa-file-waveform"/>
                                        ແບບຟອມສຳລັບ {{ selectedCustomerType }}
                                    </h4>
                                    <CustomerIndividual
                                       v-if="selectedCustomerType === 'ລູກຄ້າສ່ວນບຸກຄົນ'"></CustomerIndividual>
                                    <CustomerCompany v-else></CustomerCompany>
                                </div>
                            </b-card>
                        </b-col>
                    </b-row>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {get} from "vuex-pathify"
import RestApi from "@/API/RestApi";
import CustomerIndividual from "@/router/pages/FormPageBond/CustomerIndividual";
import CustomerCompany from "@/router/pages/FormPageBond/CustomerCompany";

export default {
    name: "PaymentOrder.vue",
    data() {
        return {
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
            customerTypes: ['ລູກຄ້າສ່ວນບຸກຄົນ', 'ລູກຄ້າວິສະຫະກິດ ຫຼື ອົງກອນ']
        }
    },
    components: {
        CustomerIndividual,
        CustomerCompany
    },
    computed: {
        branch: get("branch"),
        optCurrency: get("OptionCurreny"),
        session: get("session"),
        token: get("token")
    },
    methods: {
        selectCustomerType(type) {
            this.selectedCustomerType = type;
            // Do something with the selected customer type
        },
        async onRegisterForm() {
            let req = {
                "email": this.session.EMAIL,
                "form_id": "1",
                "status": "A",
                "branch": this.selectBranch,
                "tran_amount": this.inputAmount,
                "amount_word": this.laoNumberString(this.inputAmount),
                "ccy": this.selectCurrency,
                "remark": this.inputRemark,
                "change_ccy": "",
                "change_rate": "",
                "fee": "",
                "debit_acc": this.inputDebitAcc,
                "debit_name": this.inputDebitAccName,
                "debit_bank": this.inputDebitBank,
                "credit_acc": this.inputCreditAcc,
                "credit_name": this.inputCreditAccName,
                "credit_bank": this.inputCreditBank,
                "credit_id": this.inputPersonalID,
                "credit_issue_date": this.inputPersonalIDDate,
                "credit_issue_place": this.inputPersonalIDPlace,
                "action": "INSERT"
            }
            const invalid = await this.$validator.validate();
            // console.log(req, "req");
            if (!invalid || this.errors.any()) {
                this.$store.set("modalAlert", {
                    state: true,
                    text: this.$t("Modal.PleaseEnterValue"),
                    type: "alert",
                });
                return;
            } else {
                const loading = this.$vs.loading({
                    text: this.$t("Loading.text"),
                });
                RestApi.onSaveBondReservation(req).then((res) => {
                    if (res && res.data.error_code !== '00') {
                        this.$store.set("modalAlert", {state: true, text: res.data.error_desc, type: 'alert'});
                        loading.close();
                    } else {
                        // console.log("res", res);
                        loading.close();
                        // console.log("res OTP:", res);
                        this.$emit("NextStep");
                        this.$vs.notification({
                            duration: "1500",
                            progress: "auto",
                            color: "success",
                            position: "top-right",
                            title: this.$t("Notification.Success"),
                            text: this.$t("Notification.LoginSuccess"),
                        });
                    }

                }).catch((err) => {
                    loading.close();
                    this.$store.set("modalAlert", {state: true, text: err, type: 'alert'});
                    // console.log(err);
                })
            }
        }
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
        }
    }
}
</script>

<style scoped>

</style>