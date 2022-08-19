<template>
  <div>
    <div class="center examplex">
      <section class="section">

        <div class="py-4 mt-4 py-sm-0">
          <div :class="[windowWidth > 450 ? 'pt-5 mt-3' : 'pt-3']" style="height: auto">
            <b-row class="justify-content-md-center">
              <b-col sm="12" lg="10" md="10">
                <h3 v-if="windowWidth > 450" class="text-center pb-2 text-primary">
                  <font-awesome-icon icon="fa-solid fa-clipboard-list"/>
                  {{ $t("Form.DownloadFormPDF") }}
                </h3>
                <h4 style="font-size: 20px" v-else class="text-center pb-2 text-primary">
                  <font-awesome-icon icon="fa-solid fa-clipboard-list"/>
                  {{ $t("Form.DownloadFormPDF") }}
                </h4>
                <div class="pl-3 pr-3">
                  <b-row align-v="end">
                    <b-col md="6" sm="12">
                      <b-row>
                        <b-col sm="12" md="auto">
                          <template>
                            <vs-button  primary @click="onGotoMenu('create-form')">
                              <font-awesome-icon class="pr-2" icon="fa-solid fa-arrow-left"/>
                              {{ $t("ກັບຄືນ") }}
                            </vs-button>
                          </template>
                        </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                  <AlertModal></AlertModal>
                  <b-row class="pt-2">
                    <b-col cols="sm-6 md-6 lg-6" class="mt-2">
                      <b-card
                          border-variant="primary"
                          header="ແບບຟອມສຳລັບການໂອນເງິນຕ່າງປະເທດ"
                          header-bg-variant="primary"
                          header-text-variant="white"
                          align="center"
                      >
                        <template #header>
                            <span
                            ><font-awesome-icon
                                icon="fa-solid fa-clipboard-list"
                            />
                              ແບບຟອມ ສຳລັບການໂອນເງິນຕ່າງປະເທດ (LA/VN)</span
                            >
                        </template>
                        <b-card-text
                        >ແບບຟອມສະເໜີຂໍໂອນເງິນໄປຕ່າງປະເທດ ແລະ
                          ສັນຍາຊື້ຂາຍເງິນຕາຕ່າງປະເທດ
                        </b-card-text>
                        <b-card-text>
                          ĐỀ NGHỊ CHUYỂN TIỀN ĐI NƯỚC NGOÀI KIÊM HỢP ĐỒNG MUA
                          BÁN NGOẠI TỆ
                        </b-card-text>
                        <b-card-text>
                          <small class="text-muted">
                            {{ $t("Form.Desciption") }}
                          </small>
                        </b-card-text>
                        <b-button size="sm" variant="outline-primary" @click="onGotoMenu('create-form')">
                          <font-awesome-icon
                              icon="fa-solid fa-pen-to-square"
                          />
                          {{ $t("Form.CreateForm") }}
                        </b-button
                        >
                        <b-button
                            class="ml-1 btn btn-sm"
                            variant="outline-primary"
                            @click="downloadFile(fileOutWardVN)"
                        >
                          <font-awesome-icon icon="fa-solid fa-download"/>
                          {{ $t("Form.Download") }}
                        </b-button
                        >
                      </b-card>
                    </b-col>
                    <b-col cols="sm-6 md-6 lg-6">
                      <div class="mt-2">
                        <b-card
                            border-variant="primary"
                            header="ແບບຟອມສຳລັບການໂອນເງິນຕ່າງປະເທດ"
                            header-bg-variant="primary"
                            header-text-variant="white"
                            align="center"
                        >
                          <template #header>
                              <span
                              ><font-awesome-icon
                                  icon="fa-solid fa-clipboard-list"
                              />
                                ແບບຟອມ ສຳລັບການໂອນເງິນຕ່າງປະເທດ (LA/EN)
                              </span>
                          </template>
                          <b-card-text class=""
                          >ແບບຟອມ
                            ໃບສະເໜີຂໍໂອນເງິນໄປຕ່າງປະເທດຄວບສັນຍາຊື້ຂາຍເງິນຕາຕ່າງປະເທດ
                          </b-card-text>
                          <b-card-text class="">
                            APPLICATION FOR OUTWARD REMITTANCE WITH FORIEGN
                            EXCHANGE CONTRACT
                          </b-card-text>

                          <b-card-text>
                            <small class="text-muted">
                              {{ $t("Form.Desciption") }}
                            </small>
                          </b-card-text>

                          <b-button
                              size="sm"
                              @click="onGotoMenu('create-form')"
                              variant="outline-primary"
                              class="card-link"
                          >
                            <font-awesome-icon
                                icon="fa-solid fa-pen-to-square"
                            />
                            {{ $t("Form.CreateForm") }}
                          </b-button
                          >
                          <b-button
                              size="sm"
                              class="ml-1"
                              variant="outline-primary"
                              @click="downloadFile(fileOutWardEN)"
                          >
                            <font-awesome-icon icon="fa-solid fa-download"/>
                            {{ $t("Form.Download") }}
                          </b-button
                          >
                        </b-card>
                      </div>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
            </b-row>
          </div>
        </div>
      </section>
    </div>

    <!--    <div class="py-4 py-sm-0">-->
    <!--      <div class="account-home-btn d-none d-sm-block">-->
    <!--        <a @click="onGotoMenu('/')" style="cursor: pointer" class="text-white">-->
    <!--          <i class="mdi mdi-home h1"></i>-->
    <!--        </a>-->
    <!--      </div>-->
    <!--      <section-->
    <!--          :style="windowWidth <= 820 ? 'height: 100%' : ''"-->
    <!--      >-->
    <!--        <div class="display-table">-->
    <!--          <div class="display-table-cell">-->
    <!--            <div class="container">-->
    <!--              <div class="account-card">-->
    <!--                <div class="card-body">-->
    <!--                  <div>-->
    <!--                    <h4-->
    <!--                        class="mt-4 pt-5 text-center text-primary"-->
    <!--                        :style="windowWidth <= 820 ? '' : ''"-->
    <!--                        style="font-size: calc(0.7vw + 1vh + 1vmin);"-->
    <!--                    >-->
    <!--                      <font-awesome-icon icon="fa-solid fa-clipboard-list"/>-->
    <!--                      {{ $t("Form.Header") }}-->
    <!--                    </h4>-->
    <!--                    <AlertModal></AlertModal>-->
    <!--                    <b-row class="pt-2">-->
    <!--                      <b-col cols="sm-6 md-6 lg-6" class="mt-2">-->
    <!--                        <b-card-->
    <!--                            border-variant="primary"-->
    <!--                            header="ແບບຟອມສຳລັບການໂອນເງິນຕ່າງປະເທດ"-->
    <!--                            header-bg-variant="primary"-->
    <!--                            header-text-variant="white"-->
    <!--                            align="center"-->
    <!--                        >-->
    <!--                          <template #header>-->
    <!--                            <span-->
    <!--                            ><font-awesome-icon-->
    <!--                                icon="fa-solid fa-clipboard-list"-->
    <!--                            />-->
    <!--                              ແບບຟອມ ສຳລັບການໂອນເງິນຕ່າງປະເທດ (LA/VN)</span-->
    <!--                            >-->
    <!--                          </template>-->
    <!--                          <b-card-text-->
    <!--                          >ແບບຟອມສະເໜີຂໍໂອນເງິນໄປຕ່າງປະເທດ ແລະ-->
    <!--                            ສັນຍາຊື້ຂາຍເງິນຕາຕ່າງປະເທດ-->
    <!--                          </b-card-text>-->
    <!--                          <b-card-text>-->
    <!--                            ĐỀ NGHỊ CHUYỂN TIỀN ĐI NƯỚC NGOÀI KIÊM HỢP ĐỒNG MUA-->
    <!--                            BÁN NGOẠI TỆ-->
    <!--                          </b-card-text>-->
    <!--                          <b-card-text>-->
    <!--                            <small class="text-muted">-->
    <!--                              {{ $t("Form.Desciption") }}-->
    <!--                            </small>-->
    <!--                          </b-card-text>-->
    <!--                          <b-button size="sm" variant="outline-primary">-->
    <!--                            <font-awesome-icon-->
    <!--                                icon="fa-solid fa-pen-to-square"-->
    <!--                            />-->
    <!--                            {{ $t("Form.CreateForm") }}-->
    <!--                          </b-button-->
    <!--                          >-->
    <!--                          <b-button-->
    <!--                              class="ml-1 btn btn-sm"-->
    <!--                              variant="outline-primary"-->
    <!--                              @click="downloadFile(fileOutWardVN)"-->
    <!--                          >-->
    <!--                            <font-awesome-icon icon="fa-solid fa-download"/>-->
    <!--                            {{ $t("Form.Download") }}-->
    <!--                          </b-button-->
    <!--                          >-->
    <!--                        </b-card>-->
    <!--                      </b-col>-->
    <!--                      <b-col cols="sm-6 md-6 lg-6">-->
    <!--                        <div class="mt-2">-->
    <!--                          <b-card-->
    <!--                              border-variant="primary"-->
    <!--                              header="ແບບຟອມສຳລັບການໂອນເງິນຕ່າງປະເທດ"-->
    <!--                              header-bg-variant="primary"-->
    <!--                              header-text-variant="white"-->
    <!--                              align="center"-->
    <!--                          >-->
    <!--                            <template #header>-->
    <!--                              <span-->
    <!--                              ><font-awesome-icon-->
    <!--                                  icon="fa-solid fa-clipboard-list"-->
    <!--                              />-->
    <!--                                ແບບຟອມ ສຳລັບການໂອນເງິນຕ່າງປະເທດ (LA/EN)-->
    <!--                              </span>-->
    <!--                            </template>-->
    <!--                            <b-card-text class=""-->
    <!--                            >ແບບຟອມ-->
    <!--                              ໃບສະເໜີຂໍໂອນເງິນໄປຕ່າງປະເທດຄວບສັນຍາຊື້ຂາຍເງິນຕາຕ່າງປະເທດ-->
    <!--                            </b-card-text>-->
    <!--                            <b-card-text class="">-->
    <!--                              APPLICATION FOR OUTWARD REMITTANCE WITH FORIEGN-->
    <!--                              EXCHANGE CONTRACT-->
    <!--                            </b-card-text>-->

    <!--                            <b-card-text>-->
    <!--                              <small class="text-muted">-->
    <!--                                {{ $t("Form.Desciption") }}-->
    <!--                              </small>-->
    <!--                            </b-card-text>-->

    <!--                            <b-button-->
    <!--                                size="sm"-->
    <!--                                href="#"-->
    <!--                                variant="outline-primary"-->
    <!--                                class="card-link"-->
    <!--                            >-->
    <!--                              <font-awesome-icon-->
    <!--                                  icon="fa-solid fa-pen-to-square"-->
    <!--                              />-->
    <!--                              {{ $t("Form.CreateForm") }}-->
    <!--                            </b-button-->
    <!--                            >-->
    <!--                            <b-button-->
    <!--                                size="sm"-->
    <!--                                class="ml-1"-->
    <!--                                variant="outline-primary"-->
    <!--                                @click="downloadFile(fileOutWardEN)"-->
    <!--                            >-->
    <!--                              <font-awesome-icon icon="fa-solid fa-download"/>-->
    <!--                              {{ $t("Form.Download") }}-->
    <!--                            </b-button-->
    <!--                            >-->
    <!--                          </b-card>-->
    <!--                        </div>-->
    <!--                      </b-col>-->
    <!--                    </b-row>-->
    <!--                  </div>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </section>-->
    <!--    </div>-->
  </div>
</template>

<script>
import axios from "axios";

const AlertModal = () => import("@/components/Modal/index.vue");

export default {
  data() {
    return {
      windowWidth: window.innerWidth,
      fileOutWardEN: "LAO VIET BANK- OUTWARD REMITTANCE FORM LAO-ENGLISH.pdf",
      fileOutWardVN:
          "LAO VIET BANK- OUTWARD REMITTANCE FORM LAO-VIETNAMESE.pdf",
    };
  },
  components: {
    AlertModal,
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
    console.log(process.env.VUE_APP_ROOT_API);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onGotoMenu(v) {
      this.$router.push(v);
    },
    openLoading() {
      const loading = this.$vs.loading();
      setTimeout(() => {
        loading.close();
      }, 3000);
    },
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    downloadFile(fileName) {
      axios({
        url: `http://10.2.182.7:7180/files?folder=files/forms/01&file_name=${fileName}`, // File URL Goes Here
        method: "GET",
        responseType: "blob",
      }).then((res) => {
        // let blob = new Blob([res.data], { type: "application/pdf" }),
        //   url = window.URL.createObjectURL(blob);
        // window.open(url);
        // console.log(res);

        let fileURL = window.URL.createObjectURL(new Blob([res.data]));
        let fileLink = document.createElement("a");

        fileLink.href = fileURL;
        fileLink.setAttribute("download", `${fileName}.pdf`);
        document.body.appendChild(fileLink);

        fileLink.click();
      });
    },
  },
};
</script>

<style>
</style>