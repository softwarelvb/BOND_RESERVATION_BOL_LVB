<template>
  <div class="center examplex">
    <section class="section">
      <div class="py-4 mt-4 py-sm-0">
        <div :style="windowWidth <= 820 ? 'height' : ''"
             :class="[windowWidth > 450 ? 'pt-4 mt-3' : ' pt-2 mt-4']" style="height: auto">
          <b-row class="pt-5 justify-content-md-center">
            <b-col sm="12" lg="10" md="10">
              <h3 class="text-center pb-2 text-primary">
                {{ $t("FormType.UserForm") }}
              </h3>
              <div class="pl-3 pr-3">
                <b-row align-v="end">
                  <b-col md="6" sm="12">
                    <h4 class="pb-2 bottom-row">
                      {{ $t("FormType.Name") }}: {{ getFormTypeName }}
                    </h4>
                  </b-col>
                  <b-col md="6" sm="12">
                    <b-row align-h="end">
                      <b-col align="right">
                        <template>
                          <vs-button class="mt-3" primary @click="onGotoCreateFormPage">
                            <font-awesome-icon class="pr-1" icon="fa-solid fa-plus"/>
                            {{ $t("FormType.CreateForm") }}
                          </vs-button>
                        </template>
                      </b-col>
                      <b-col cols="auto">
                        <template>
                          <div align="right" class="center con-selects pt-3" style="font-size: 14px">
                            <vs-select
                                placeholder="Select"
                                v-model="selectFormType"
                                :label="$t('FormType.PleaseSelectFormType')"
                            >
                              <vs-option style="font-size: 12px" :label="$t('FormType.CashWithDrawSlip')" value="1">
                                {{ $t("FormType.CashWithDrawSlip") }}
                              </vs-option>
                              <vs-option style="font-size: 12px" :label="$t('FormType.PaymentOrder')" value="2">
                                {{ $t("FormType.PaymentOrder") }}
                              </vs-option>
                              <vs-option style="font-size: 12px" :label="$t('FormType.ChequeDepost')" value="3">
                                {{ $t("FormType.ChequeDepost") }}
                              </vs-option>
                              <vs-option style="font-size: 12px" :label="$t('FormType.OutWardTransfer')"
                                         value="4">
                                {{ $t("FormType.OutWardTransfer") }}
                              </vs-option>
                            </vs-select>
                          </div>
                        </template>
                      </b-col>

                    </b-row>
                  </b-col>
                </b-row>
                <TablePaymentOrderForm v-if="selectFormType === '2'" class="pb-4"></TablePaymentOrderForm>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
const TablePaymentOrderForm = () => import("@/components/Form/ListUserForm/TablePaymentOrderForm")
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
      page: 1,
      max: 8,
      selectFormType: '2',
    }
  },
  computed: {
    getFormTypeName() {
      return this.selectFormType === '2' ? this.$t("FormType.PaymentOrder") : this.selectFormType === '1' ? this.$t("FormType.CashWithDrawSlip") : this.selectFormType === '3' ? this.$t("FormType.ChequeDepost") : this.$t("FormType.OutWardTransfer");
    }
  },
  methods: {
    onGotoCreateFormPage() {
      this.$router.push('/create-form')
    }
  },
  components: {
    TablePaymentOrderForm,
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

        