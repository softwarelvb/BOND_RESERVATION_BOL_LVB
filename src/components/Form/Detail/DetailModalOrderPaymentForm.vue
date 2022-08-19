<template>
  <div>
    <h4 style="font-size: 16px">
      <font-awesome-icon icon="fa-solid fa-circle-info"/>
      {{ $t("FormPaymentOrder.BasicInfo") }}
    </h4>
    <div style="font-size: 14px" class="pl-3">
      <b-row>
        <b-col>
          <b-row>
            <b-col><strong>
              {{ $t("FormPaymentOrder.CreateFormDate") }}
            </strong> :
            </b-col>
            <b-col> {{ item.CREATE_DATE }}</b-col>
          </b-row>
          <b-row>
            <b-col><strong> {{ $t("FormPaymentOrder.Amount") }}:</strong></b-col>
            <b-col> {{ format_money(item.TRAN_AMOUNT) }}</b-col>
          </b-row>
        </b-col>
        <b-col>
          <b-row>
            <b-col><strong>
              {{ $t("FormPaymentOrder.Branch") }}:
            </strong></b-col>
            <b-col> {{ item.BRANCH }}</b-col>
          </b-row>
          <b-row>
            <b-col><strong>
              {{ $t("FormPaymentOrder.Currency") }}:
            </strong></b-col>
            <b-col> {{ item.CCY }}</b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="pt-1">
        <b-col md="3"><strong>
          {{ $t("FormPaymentOrder.AmountText") }}:
        </strong></b-col>
        <b-col> {{ item.AMOUNT_WORD }}</b-col>
      </b-row>
      <h4 style="font-size: 16px" class="pt-3">
        <font-awesome-icon icon="fa-solid fa-circle-info"/>
        {{ $t("FormPaymentOrder.InformationDebit") }}
      </h4>
      <b-row class="pt-1">
        <b-col md="3"><strong>
          {{ $t("FormPaymentOrder.DebitAccName") }}:
        </strong></b-col>
        <b-col> {{ item.DEBIT_NAME }}</b-col>
      </b-row>
      <b-row class="pt-1">
        <b-col md="3"><strong>
          {{ $t("FormPaymentOrder.Acc") }}:
        </strong></b-col>
        <b-col> {{ item.DEBIT_ACC }}</b-col>
      </b-row>
      <b-row class="pt-1">
        <b-col md="3"><strong>
          {{ $t("FormPaymentOrder.AtBank") }}:
        </strong></b-col>
        <b-col> {{ item.DEBIT_BANK }}</b-col>
      </b-row>
      <h4 class="pt-3" style="font-size: 16px">
        <font-awesome-icon icon="fa-solid fa-circle-info"/>
        {{ $t("FormPaymentOrder.InformationCredit") }}
      </h4>
      <b-row class="pt-1">
        <b-col md="3"><strong>
          {{ $t("FormPaymentOrder.Receiver") }}:
        </strong></b-col>
        <b-col> {{ item.CREDIT_NAME }}</b-col>
      </b-row>
      <b-row class="pt-1">
        <b-col md="3"><strong>
          {{ $t("FormPaymentOrder.PersonalID") }}:
        </strong></b-col>
        <b-col> {{ item.CREDIT_ID }}</b-col>
      </b-row>
      <b-row class="pt-1">
        <b-col md="3"><strong>
          {{ $t("FormPaymentOrder.PersonalDate") }}:
        </strong></b-col>
        <b-col> {{ item.CREDIT_ISSUE_DATE }}</b-col>
      </b-row>
      <b-row class="pt-1">
        <b-col md="3"><strong>
          {{ $t("FormPaymentOrder.PersonalIssueDate") }}:
        </strong></b-col>
        <b-col> {{ item.CREDIT_ISSUE_PALCE }}</b-col>
      </b-row>
      <b-row class="pt-1">
        <b-col md="3"><strong>
          {{ $t("FormPaymentOrder.CreditAccName") }}:
        </strong></b-col>
        <b-col> {{ item.CREDIT_NAME }}</b-col>
      </b-row>
      <b-row class="pt-1">
        <b-col md="3"><strong>
          {{ $t("FormPaymentOrder.Acc") }}:
        </strong></b-col>
        <b-col> {{ item.CREDIT_ACC }}</b-col>
      </b-row>
      <b-row class="pt-1">
        <b-col md="3"><strong>
          {{ $t("FormPaymentOrder.AtBank") }}:
        </strong></b-col>
        <b-col> {{ item.CREDIT_BANK }}</b-col>
      </b-row>
    </div>
  </div>

</template>

<script>
export default {
  name: "DetailModalOrderPaymentForm.vue",
  props: {
    item: {
      required: true,
    }
  }
}
</script>

<style scoped>

</style>