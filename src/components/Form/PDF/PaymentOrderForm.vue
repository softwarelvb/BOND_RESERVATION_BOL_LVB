<template>
  <div>
    <b-row class="justify-content-md-center">
      <b-col cols="auto">
        <b-card class="shadow " style="width: 195mm;">
          <b-row>
            <b-col cols="auto"><img
                src="@/assets/images/Logo-LVB-HD.png"
                style="width: 130px"
                srcset=""
            /></b-col>
            <b-col>
              <h6>ທະນາຄານຮ່ວມທຸລະກິດລາວຫວຽດ ຈຳກັດ</h6>
              <h6 style="font-size: 10.5px">ສາຂາ: {{ item.BRANCH + getBanchName(item.BRANCH).name }}</h6></b-col>
            <b-col cols="auto">
              <h6 class="text-center"> ໃບສັ່ງຈ່າຍ</h6>
              <h6 class="text-center"><i>PAYMENT ORDER</i></h6>
            </b-col>
            <b-col align="right" style="font-size: 8px">
              <h6 class="text-right"> ເລກທີ / Seq NO:............</h6>
              <h6 class="text-right"> ວັນທິ/ Date: {{ item.CREATE_DATE }} </h6>
            </b-col>
          </b-row>
          <hr style="
        border: 0;
        border-top: 1.5px dashed black;">
          <b-row>
            <b-col cols="8">
              <div v-if="!item.AMOUNT_WORD">
                <h6>ຈຳນວນເງິນເປັນໂຕໜັງສຶ / Amount in
                  words: .....................................................................</h6>
                <h6>
                  ..................................................................................................................................... </h6>
              </div>
              <div v-else>
                <h6>ຈຳນວນເງິນເປັນໂຕໜັງສຶ / Amount in
                  words: .....................................................................</h6>
                <h6>
                  {{ item.AMOUNT_WORD }} {{ item.CCY }} </h6>
              </div>

            </b-col>

            <b-col style="border-left: 1px solid #2e3138"><h6>ຈຳນວນເງິນເປັນຕົວເລກ / Amount in figues:</h6><h6>
              {{ format_money(item.TRAN_AMOUNT) }} {{ item.CCY }} </h6></b-col>

          </b-row>
          <hr style="
        border: 0;
         border-top: 1.5px dashed black;">
          <b-row style="font-size: 10.5px">
            <b-col cols="8">
              <div v-if="!item.REMARK">
                <h6 class="pt-2">ເນື້ອໃນ / Remarks:
                  .........................................................................................................</h6>
                <h6 class="pt-2">
                  .....................................................................................................................................</h6>
              </div>
              <div v-else>
                <h6 class="pt-2">ເນື້ອໃນ / Remarks: <span class="pl-2">{{ item.REMARK }}</span> </h6>
                <h6 class="pt-2">
                  .....................................................................................................................................</h6>
              </div>

              <h6 class="pt-2" style="font-size: 10.5px"> ປະເພດເງິນຮັບ / Request for changing
                into:.........................ອັດຕາແລກປ່ຽນ / Ex
                rate:...........................</h6>
            </b-col>
            <b-col style="border-left: 1px solid #2e3138"><h6>ຄ່າທຳນຽມ / Charges:</h6>
              <span class="mb-2" style="font-size: 10.5px">
            <b-form-checkbox
                id="checkbox-1"
                v-model="status"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
                class="pt-2"
            >
              ຄ່າທຳນຽມໃນ <i>/ Charge included</i>
            </b-form-checkbox>
          </span>
              <h6></h6>
              <span style="font-size: 10.5px">
            <b-form-checkbox
                id="checkbox-1"
                v-model="status"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
            >
              ຄ່າທຳນຽມນອກ <i>/ Charge excluded</i>
            </b-form-checkbox>
          </span>
            </b-col>
          </b-row>
          <hr style="
        border: 0;
        border-top: 1.5px dashed black;">
          <b-row style="font-size: 11px">
            <b-col cols="6">
              <div v-if="!item.DEBIT_NAME">
                <h6 style="font-size: 10.5px" class="pt-1">ຊື່ບັນຊີທີ່ຈະຕັດ / A/c Name:
                  .......................................................................</h6>
                <h6 style="font-size: 10.5px" class="pt-1">
                  ...............................................................................................................</h6>
              </div>
              <div v-else>
                <h6 style="font-size: 10.5px" class="pt-1">ຊື່ບັນຊີທີ່ຈະຕັດ / A/c Name: <strong
                    style="text-transform:uppercase"> {{
                    item.DEBIT_NAME
                  }}</strong>
                </h6>
              </div>
              <div v-if="!item.DEBIT_ACC">
                <h6 style="font-size: 10.5px" class="pt-1">ເລກບັນຊີ / A/c
                  No:....................................................................................</h6>
              </div>
              <div v-else>
                <h6 style="font-size: 10.5px" class="pt-1">ເລກບັນຊີ / A/c
                  No: <strong>{{ item.DEBIT_ACC }}</strong></h6>
              </div>
              <div v-if="!item.DEBIT_BANK">
                <h6 style="font-size: 10.5px" class="pt-1">ທີ່ທະນາຄານ / At
                  Bank:...............................................................................</h6>
              </div>
              <div v-else>
                <h6 style="font-size: 10.5px" class="pt-1">ທີ່ທະນາຄານ / At
                  Bank: {{ item.DEBIT_BANK }} </h6>
              </div>
            </b-col>
            <b-col style="border-left: 1px solid #2e3138">
              <div v-if="!item.CREDIT_NAME">
                <h6 style="font-size: 10.5px" class="pt-1">ຜູ້ຮັບ Beneficiary:
                  ...................................................................................</h6>
              </div>
              <div v-else>
                <h6 style="font-size: 10.5px; text-transform: uppercase" class="pt-1">ຜູ້ຮັບ Beneficiary:
                  <span class="pl-1">  {{ item.CREDIT_NAME }}</span></h6>
              </div>

              <div v-if="!item.CREDIT_ID">
                <h6 style="font-size: 10.5px" class="pt-1"> ເລກບັດປະຈຳໂຕ /
                  ID/PP:
                  ...................................................................................</h6>
              </div>
              <div v-else>
                <h6 style="font-size: 10.5px; text-transform: uppercase" class="pt-1">ເລກບັດປະຈຳໂຕ /
                  ID/PP: <span class="pl-1">{{ item.CREDIT_ID }}</span></h6>
              </div>

              <div v-if="!item.CREDIT_ISSUE_DATE">
                <h6 style="font-size: 10.5px" class="pt-1">ວັນທີ່ອອກ / Date:...../...../.........ສະຖານທີ່ອອກ /
                  Place...........................</h6>
              </div>
              <div v-else>
                <h6 style="font-size: 10.5px" class="pt-1">ວັນທີ່ອອກ / Date: {{ item.CREDIT_ISSUE_DATE }} ສະຖານທີ່ອອກ /
                  Place: {{ item.CREDIT_ISSUE_PALCE }} </h6>
              </div>

              <div v-if="!item.CREDIT_ACC">
                <h6 style="font-size: 10.5px" class="pt-1">ເລກບັນຊີ / A/c
                  No:...................................................................................</h6>
              </div>
              <div v-else>
                <h6 style="font-size: 10.5px" class="pt-1">ເລກບັນຊີ / A/c
                  No: {{ item.CREDIT_ACC }} </h6>
              </div>

              <div v-if="!item.CREDIT_BANK">
                <h6 style="font-size: 10.5px" class="pt-1">ທີ່ທະນາຄານ / At
                  Bank:..............................................................................</h6>
              </div>
              <div v-else>
                <h6 style="font-size: 10.5px" class="pt-1">ທີ່ທະນາຄານ / At
                  Bank: <span> <strong>{{ item.CREDIT_BANK }}</strong> </span></h6>
              </div>
            </b-col>
          </b-row>
          <hr style="
        border: 0;
        border-top: 1px dashed gray;">
          <b-row>
            <b-col class="text-center" cols="0.5" style="height: 100px">
              <h6 class="verticaltext pb-5" style="height: auto">ສະເພາະທະນາຄານ</h6>
            </b-col>
            <b-col style="border-left: 1px solid #2e3138">

            </b-col>
          </b-row>
          <hr style="
        border: 0;
        border-top: 1px dashed gray;">
          <b-row style="height: 150px">
            <b-col>
              <h5 class="text-center"> ລູກຄ້າ <i>/ Clien</i>t </h5>
              <b-row>
                <b-col class="text-center">
                  <h6 style="font-size: 10.5px">
                    ຫົວໜ້າບັນຊີ <i>/ Chief Accountant</i>
                  </h6>
                  <h6 style="font-size: 10.5px">
                    (ເຊັນ ແລະ ຊື່ນາມສະກຸນ)
                  </h6>
                </b-col>
                <b-col class="text-center">
                  <h6 style="font-size: 10.5px">
                    ເຈົ້າຂອງບັນຊີ <i>/ Accountant Holder</i>
                  </h6>
                  <h6 style="font-size: 10.5px">
                    (ເຊັນ ແລະ ຊື່ນາມສະກຸນ)
                  </h6>
                </b-col>
              </b-row>

            </b-col>
            <b-col style="border-left: 1px solid #2e3138">
              <h5 class="text-center"> ທະນາຄານ <i> / Banker</i></h5>
              <b-row>
                <b-col class="text-center">
                  <h6 style="font-size: 10.5px">
                    ພະນັກງານ <i>/ Receive by</i>
                  </h6>
                  <h6 style="font-size: 10.5px">
                    (ເຊັນ ແລະ ຊື່ນາມສະກຸນ)
                  </h6>
                </b-col>
                <b-col class="text-center">
                  <h6 style="font-size: 10.5px">
                    ຜູ້ກວດກາ <i>/ Verify by</i>
                  </h6>
                  <h6 style="font-size: 10.5px">
                    (ເຊັນ ແລະ ຊື່ນາມສະກຸນ)
                  </h6>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <hr style="
        border: 0;
        border-top: 1px dashed gray;">
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {get} from 'vuex-pathify'

export default {
  name: "PaymentOrderForm.vue",
  data() {
    return {
      status: false
    }
  },
  props: {
    item: {
      require: true
    },
  },
  computed: {
    branch: get("branch")
  },
  methods: {
    getBanchName(v) {
      return this.branch.find((e) => e.item === v)
    }
  },
}
</script>

<style scoped>
.verticaltext {
  position: relative;
  margin: 1em 0;
  transform: rotate(-90deg);
}
</style>