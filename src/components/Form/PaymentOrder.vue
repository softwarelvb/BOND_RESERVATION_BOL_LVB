<template>
  <div>
    <div style="font-size: 15px">
      <div class="position-relative">
        <div class="pb-4">
          <b-row class="justify-content-md-center pt-1 pb-3">
            <b-col class="pt-2" sm="12" lg="10" md="10">
              <b-card class="shadow p-1 pb-lg-5 pt-4">
                <h3 style="font-size: 22px" class="text-center">
                  <font-awesome-icon icon="fa-solid fa-file-waveform"/>
                  {{ $t("FormPaymentOrder.Name") }}
                </h3>
                <b-row class="justify-content-md-center pt-3 pb-3 pl-3 pr-3">
                  <b-col>
                    <h4 style="font-size: 18px" class="pt-3">
                      <font-awesome-icon icon="fa-solid fa-circle-info"/>
                      {{ $t("FormPaymentOrder.BasicInfo") }}
                    </h4>
                    <b-row class="pt-2">
                      <b-col>
                        <label for="firstname"> {{ $t("FormPaymentOrder.Branch") }}</label>
                        <b-form-select
                            v-model="selectBranch"
                            :options="branch"
                            class="mb-2 form-control"
                            value-field="item"
                            text-field="name"
                            disabled-field="notEnabled"
                        ></b-form-select>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col sm="8" lg="8" md="8">
                        <label for="firstname"> {{ $t("FormPaymentOrder.Amount") }}</label>
                        <b-form-input
                            type="number"
                            name="inputAmount"
                            v-validate="'required'"
                            class="form-control"
                            :placeholder="$t(`FormPaymentOrder.PleaseEnterAmount`)"
                            v-model="inputAmount"
                        />
                        <span class="text-danger validate-message">{{
                            errors.first("inputAmount")
                                ? $t("FormPaymentOrder.PleaseEnterAmount")
                                : ""
                          }}</span></b-col>
                      <b-col sm="4" lg="4" md="4">
                        <label for="firstname"> {{ $t("FormPaymentOrder.Currency") }}</label>
                        <b-form-select
                            v-model="selectCurrency"
                            :options="optCurrency"
                            class="mb-2 form-control"
                            value-field="item"
                            text-field="name"
                            disabled-field="notEnabled"
                        ></b-form-select>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col sm="12" lg="12" md="12">
                        <label for="firstname"> {{ $t("FormPaymentOrder.Amount") }}: <span
                            class="text-success font-weight-bold">
                          {{ format_money(inputAmount) }} </span>
                          {{ selectCurrency }}
                        </label>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col sm="12" lg="12" md="12">
                        <label for="firstname"> {{ $t("FormPaymentOrder.AmountText") }}: <strong>
                          {{ laoNumberString(inputAmount) }} </strong>
                          {{ selectCurrency }}
                        </label>
                      </b-col>
                    </b-row>
                    <b-row class="pt-2">
                      <b-col sm="12" lg="12" md="12">
                        <label for="firstname"> {{ $t("FormPaymentOrder.Remark") }}</label>
                        <b-form-textarea
                            rows="2"
                            max-rows="3"
                            class="form-control"
                            v-model="inputRemark"
                        />
                      </b-col>
                    </b-row>
                    <h4 class="pt-3" style="font-size: 18px">
                      <font-awesome-icon icon="fa-solid fa-circle-info"/>
                      {{ $t("FormPaymentOrder.InformationDebit") }}
                    </h4>
                    <b-row class="pt-2">
                      <b-col sm="12" lg="12" md="12">
                        <label for="firstname"> {{ $t("FormPaymentOrder.DebitAccName") }}</label>
                        <b-form-input
                            type="text"
                            name="inputDebitAccName"
                            v-validate="'required'"
                            class="form-control"
                            :placeholder="$t(`FormPaymentOrder.PleaseEnterDebitAccName`)"
                            v-model="inputDebitAccName"
                        />
                        <span class="text-danger validate-message">{{
                            errors.first("inputDebitAccName")
                                ? $t("FormPaymentOrder.PleaseEnterDebitAccName")
                                : ""
                          }}</span></b-col>
                    </b-row>
                    <b-row class="pt-2">
                      <b-col sm="12" lg="12" md="12">
                        <label for="firstname"> {{ $t("FormPaymentOrder.Acc") }}</label>
                        <b-form-input
                            type="number"
                            name="inputAccDebit"
                            v-validate="'required|min:14|max:14'"
                            class="form-control"
                            max="14"
                            :placeholder="$t(`FormPaymentOrder.PleaseEnterAcc`)"
                            v-model="inputDebitAcc"
                        />
                        <span class="text-danger validate-message">{{
                            errors.first("inputAccDebit")
                                ? $t("FormPaymentOrder.PleaseEnterAcc")
                                : ""
                          }}</span></b-col>
                    </b-row>
                    <b-row class="pt-2">
                      <b-col sm="12" lg="12" md="12">
                        <label for="firstname"> {{ $t("FormPaymentOrder.AtBank") }}</label>
                        <b-form-input
                            type="text"
                            class="form-control"
                            :placeholder="$t(`FormPaymentOrder.AtBank`)"
                            v-model="inputDebitBank"
                        />
                      </b-col>
                    </b-row>
                    <h4 class="pt-3" style="font-size: 18px">
                      <font-awesome-icon icon="fa-solid fa-circle-info"/>
                      {{ $t("FormPaymentOrder.InformationCredit") }}
                    </h4>
                    <b-row class="pt-2">
                      <b-col sm="12" lg="12" md="12">
                        <label for="firstname"> {{ $t("FormPaymentOrder.Receiver") }}</label>
                        <b-form-input
                            type="text"
                            name="inputReceive"
                            v-validate="'required'"
                            class="form-control"
                            :placeholder="$t(`FormPaymentOrder.ExchangeTo`)"
                            v-model="inputReceiveName"
                        />
                        <span class="text-danger validate-message">{{
                            errors.first("inputReceive")
                                ? $t("FormPaymentOrder.ExchangeTo")
                                : ""
                          }}</span></b-col>
                    </b-row>
                    <b-row class="pt-2">
                      <b-col sm="12" lg="8" md="8">
                        <label for="firstname"> {{ $t("FormPaymentOrder.PersonalID") }}</label>
                        <b-form-input
                            type="number"
                            name="inputPersonalID"
                            v-validate="'required|min:5'"
                            class="form-control"
                            :placeholder="$t(`FormPaymentOrder.PersonalID`)"
                            v-model="inputPersonalID"
                        />
                        <span class="text-danger validate-message">{{
                            errors.first("inputPersonalID")
                                ? $t("FormPaymentOrder.PersonalID")
                                : ""
                          }}</span></b-col>
                      <b-col sm="12" lg="4" md="4">
                        <label for="firstname"> {{ $t("FormPaymentOrder.PersonalDate") }}</label>
                        <b-form-input
                            type="date"
                            name="inputPersonalDate"
                            v-validate="'required'"
                            class="form-control"
                            :placeholder="$t(`FormPaymentOrder.PersonalDate`)"
                            v-model="inputPersonalIDDate"
                        />
                        <span class="text-danger validate-message">{{
                            errors.first("inputPersonalDate")
                                ? $t("FormPaymentOrder.PersonalDate")
                                : ""
                          }}</span></b-col>
                    </b-row>
                    <b-row class="pt-2">
                      <b-col sm="12" lg="12" md="12">
                        <label for="firstname"> {{ $t("FormPaymentOrder.PersonalIssueDate") }}</label>
                        <b-form-input
                            type="text"
                            name="inputPersonalIssueDate"
                            v-validate="'required'"
                            class="form-control"
                            :placeholder="$t(`FormPaymentOrder.PersonalIssueDate`)"
                            v-model="inputPersonalIDPlace"
                        />
                        <span class="text-danger validate-message">{{
                            errors.first("inputPersonalIssueDate")
                                ? $t("FormPaymentOrder.PersonalIssueDate")
                                : ""
                          }}</span></b-col>
                    </b-row>
                    <b-row class="pt-2">
                      <b-col sm="12" lg="12" md="12">
                        <label for="firstname"> {{ $t("FormPaymentOrder.PleaseEnterCreditAccName") }}</label>
                        <b-form-input
                            type="text"
                            name="inputCreditAccName"
                            v-validate="'required'"
                            class="form-control"
                            :placeholder="$t(`FormPaymentOrder.PleaseEnterCreditAccName`)"
                            v-model="inputCreditAccName"
                        />
                        <span class="text-danger validate-message">{{
                            errors.first("inputCreditAccName")
                                ? $t("FormPaymentOrder.PleaseEnterCreditAccName")
                                : ""
                          }}</span></b-col>
                    </b-row>
                    <b-row class="pt-2">
                      <b-col sm="12" lg="12" md="12">
                        <label for="firstname"> {{ $t("FormPaymentOrder.Acc") }}</label>
                        <b-form-input
                            type="number"
                            name="inputCreditAcc"
                            max="14"
                            v-validate="'required|min:14|max:14'"
                            class="form-control"
                            :placeholder="$t(`FormPaymentOrder.Acc`)"
                            v-model="inputCreditAcc"
                        />
                        <span class="text-danger validate-message">{{
                            errors.first("inputCreditAcc")
                                ? $t("FormPaymentOrder.Acc")
                                : ""
                          }}</span></b-col>
                    </b-row>
                    <b-row class="pt-2">
                      <b-col sm="12" lg="12" md="12">
                        <label for="firstname"> {{ $t("FormPaymentOrder.AtBank") }}</label>
                        <b-form-input
                            type="text"
                            class="form-control"
                            :placeholder="$t(`FormPaymentOrder.AtBank`)"
                            v-model="inputCreditBank"
                        />
                      </b-col>
                    </b-row>
                    <b-row class="pt-3 pb-4">
                      <b-col sm="12" lg="12" md="12">
                        <b-button block variant="primary" @click="onRegisterForm"> {{
                            $t("FormPaymentOrder.onContinue")
                          }}
                        </b-button>
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
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
      inputPersonalIDPlace: null
    }
  },
  computed: {
    branch: get("branch"),
    optCurrency: get("OptionCurreny"),
    session: get("session"),
    token: get("token")
  },
  methods: {
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
      console.log(req, "req");
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
        RestApi.onSavePaymentOrderForm(req).then((res) => {
          if (res && res.data.error_code !== '00') {
            this.$store.set("modalAlert", {state: true, text: res.data.error_desc, type: 'alert'});
            loading.close();
          } else {
            console.log("res", res);
            loading.close();
            console.log("res OTP:", res);
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
          console.log(err);
        })
      }
    }
  },
}
</script>

<style scoped>

</style>