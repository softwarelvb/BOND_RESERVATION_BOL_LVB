<template>
  <div class="center pt-2">
    <vs-table :striped="true" class="shadow pb-3">
      <template #header>
        <vs-input v-model="search" border placeholder="ຄົ້ນຫາແບບຟອມ"/>
      </template>
      <template #thead>
        <vs-tr>
          <vs-th class="pl-4" sort @click="formList = $vs.sortData($event ,formList, 'CREATE_DATE')">
            {{ $t("FormPaymentOrder.Table.No") }}
          </vs-th>
          <vs-th sort @click="formList = $vs.sortData($event ,formList, 'CREATE_DATE')">
            {{ $t("FormPaymentOrder.CreateFormDate") }}
          </vs-th>
          <vs-th sort @click="formList = $vs.sortData($event ,formList, 'REMARK')">
            {{ $t("FormPaymentOrder.Remark") }}
          </vs-th>
          <vs-th sort @click="formList = $vs.sortData($event ,formList, 'CREDIT_ACC')">
            {{ $t("FormPaymentOrder.Table.ReceiverAccount") }}
          </vs-th>
          <vs-th sort @click="formList = $vs.sortData($event ,formList, 'TRAN_AMOUNT')">
            {{ $t("FormPaymentOrder.Amount") }}
          </vs-th>
          <vs-th>
            {{ $t("FormPaymentOrder.Table.Action") }}
          </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
            :key="i"
            v-for="(tr, i) in $vs.getSearch(formList, search)"
            :data="tr"
        >
          <vs-td class="pl-4">
            {{ i + 1 }}
          </vs-td>
          <vs-td>
            {{ tr.CREATE_DATE }}
          </vs-td>
          <vs-td>
            {{ tr.REMARK }}
          </vs-td>
          <vs-td>
            {{ tr.CREDIT_ACC }}
          </vs-td>
          <vs-td class="text-success">
            <strong>
              {{ format_money(tr.TRAN_AMOUNT) }} {{ tr.CCY }}
            </strong>
          </vs-td>
          <vs-td>
            <vs-button
                size="small"
                @click="active=!active, onView(tr)"
            >
              <font-awesome-icon class="pr-1" icon="fa-solid fa-eye"/>
              {{ $t("FormPaymentOrder.Detail") }}
            </vs-button>
          </vs-td>
        </vs-tr>
      </template>
      <template #notFound>
        {{ $t("FormPaymentOrder.Table.DontHaveAnyData") }}
      </template>
    </vs-table>
    <vs-dialog width="800px" overflow-hidden v-model="active">
      <template #header>
        <h4 class="not-margin pt-4">
          {{ $t("FormPaymentOrder.Detail") }}
        </h4>
      </template>
      <div class="con-content">
        <DetailOrderPayment :item="itemView"></DetailOrderPayment>
      </div>
      <h5 class="text-center pt-4"> {{ $t("FormPaymentOrder.FormExample") }}</h5>
      <b-row align-h="end">
        <b-col cols="auto">
          <vs-button class="mr-4" @click="DownloadPDFForm">
            <font-awesome-icon class="pr-1" icon="fa-solid fa-download"/>
            {{ $t("FormPaymentOrder.DownloadFile") }}
          </vs-button>
        </b-col>
      </b-row>
      <vue-html2pdf
          :show-layout="false"
          :float-layout="false"
          :enable-download="true"
          :preview-modal="false"
          :paginate-elements-by-height="2480"
          filename="Form"
          :pdf-quality="2"
          :manual-pagination="false"
          :html-to-pdf-options="htmlToPdfOptions"
          pdf-format="a4"
          pdf-content-width="100%"
          class="html2pdf__page-break overflow-auto"
          ref="html2Pdf"
      >
        <section slot="pdf-content">
          <div id="printBill">
            <PDFPaymentOrderForm v-if="itemView" :item="itemView"></PDFPaymentOrderForm>
          </div>
        </section>
      </vue-html2pdf>

    </vs-dialog>

  </div>
</template>
<script>
import {get} from 'vuex-pathify'
import RestApi from "@/API/RestApi";
import VueHtml2pdf from 'vue-html2pdf'

const PDFPaymentOrderForm = () => import("@/components/Form/PDF/PaymentOrderForm")
const DetailOrderPayment = () => import("@/components/Form/Detail/DetailModalOrderPaymentForm")
export default {
  name: "TablePaymentOrderForm.vue",
  data() {
    return {
      search: '',
      active: false,
      onToDownload: false,
      itemView: null,
    }
  },
  computed: {
    session: get("session"),
    formList: get("userPaymentOrderForm"),
    htmlToPdfOptions() {
      return {
        margin: [0, 0, 20, 0],
        html2canvas: {dpi: 192, scale: 2, letterRendering: true},
        jsPDF: {unit: "pt", format: "a4", orientation: "portrait"},
      };
    },
  },
  components: {
    PDFPaymentOrderForm,
    VueHtml2pdf,
    DetailOrderPayment
  },
  mounted() {
    this.getList()
  },
  methods: {
    onView(v) {
      this.itemView = v;
      this.onToDownload = false
    },
    DownloadPDFForm() {
      this.$refs.html2Pdf.generatePdf();
      this.onToDownload = false;
    },
    getList() {
      let req = {
        "email": this.session.EMAIL
      }
      const loading = this.$vs.loading({
        text: this.$t("Loading.text"),
      });
      RestApi.onGetUserForm('payment/order', req).then((res) => {

        if (res && res.data.error_code !== '00') {
          this.$store.set("modalAlert", {state: true, text: res.data.error_desc, type: 'alert'});
          loading.close();
        } else {
          console.log("res payment:", res);
          this.formList = res.data.data;
          this.$store.set("userPaymentOrderForm", res.data.data)
          loading.close();
        }
      }).catch((err) => {
        loading.close();
        this.$store.set("modalAlert", {state: true, text: err, type: 'alert'});
        console.log(err);
      });
    }
  },
}
</script>

<style lang="stylus" scoped>
getColor(vsColor, alpha = 1)
unquote("rgba(var(--vs-" + vsColor + "), " +alpha + ")")
getVar(var)
unquote("var(--vs-" + var + ")")
.not-margin
  margin 0px
  font-weight normal
  padding 10px

.con-form
  width 100%

  .flex
    display flex
    align-items center
    justify-content space-between

    a
      font-size .8rem
      opacity .7

      &:hover
        opacity 1

  .vs-checkbox-label
    font-size .8rem

  .vs-input-content
    margin 10px 0px
    width calc(100%)

    .vs-input
      width 100%

.footer-dialog
  display flex
  align-items center
  justify-content center
  flex-direction column
  width calc(100%)

  .new
    margin 0px
    margin-top 20px
    padding: 0px
    font-size .7rem

    a
      color getColor('primary') !important
      margin-left 6px

      &:hover
        text-decoration underline

  .vs-button
    margin 0px
</style>
