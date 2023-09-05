<template>
    <div class="center examplex">
        <section class="section">
            <div class="">
                <div class="heading-container" style="height: auto">
                    <b-row class="justify-content-md-center">
                        <b-col sm="12" lg="10" md="10">
                            <b-row class="justify-content-md-center">
                                <b-col sm="10" lg="10" md="10">
                                    <b-card no-body class="mr-4 ml-4 p-4">
                                        <b-row class="justify-content-md-center">
                                            <b-col sm="2" lg="2" md="2" class="text-center">
                                                <font-awesome-icon class="text-center text-success pt-2 pb-2"
                                                                   style="font-size: 35px"
                                                                   icon="fa-solid fa-check-circle"/>
                                            </b-col>
                                        </b-row>
                                        <div class="my-download-ui">
                                            <h4 class="text-center pb-2 pt-2 ">
                                                <span class="text-success">ລົງທະບຽນແບບຟອມ ສຳເລັດ</span>
                                            </h4>
                                            <b-row class="justify-content-md-center ">
                                                <b-col lg="6" md="6" sm="12" class="text-center">
                                                    <h5 class="pb-2">ລະຫັດການລົງທະບຽນຈອງພັນທະບັດຂອງທ່ານ
                                                        {{ userData.CUSTOMERNAME }}
                                                    </h5>
<!--                                                    {{ idTest }}-->
                                                    <h5>{{ userData.FORMID }}</h5>
                                                    <!--                                                    <QrcodeVue :size="size" v-if="userData?.FORMID"-->
                                                    <!--                                                               :value="userData?.FORMID.toString()"></QrcodeVue>-->
                                                    <div class="qr-code-container">
                                                        <canvas ref="qrCodeCanvas"></canvas>
                                                    </div>
                                                    <p style="font-size: 12px">ແຄບໜ້າຈໍ ຫຼື ຖ່າຍພາບ QRCODE
                                                        ໄວ້ເພື່ອຮັບໃບຢັ້ງຢືນການຈອງ <br>
                                                        <span class="font-weight-bold"> ສະຖານທີ່ຮັບໃບຢັ້ງຢືນ:</span>
                                                        ທຸກໆໜ່ວຍບໍລິການຂອງ ທະນາຄານ ຮ່ວມທຸລະກິດລາວ-ຫວຽດ ຈຳກັດ ທົ່ວປະເທດ
                                                    </p>
                                                </b-col>
                                            </b-row>
                                        </div>
                                        <b-row class="justify-content-md-center">
                                            <b-col>
                                                <div class="d-flex justify-content-center">
                                                    <b-button size="sm" variant="primary" class="mb-2"
                                                              @click="downloadUI">
                                                        <font-awesome-icon class="text-center"
                                                                           icon="fa-solid fa-download"/>
                                                        ບັນທຶກ QRCode
                                                    </b-button>
                                                    <b-button size="sm" variant="outline-primary"
                                                              class="mb-2 ml-2 btn btn-sm" @click="onViewDetail">
                                                        <font-awesome-icon class="text-center" icon="fa-solid fa-eye"/>
                                                        ກວດເບີ່ງຂໍ້ມູນ
                                                    </b-button>
                                                </div>
                                            </b-col>
                                        </b-row>
                                        <!--                                        <div class="border-top border-dashed p-2"></div>-->

                                        <vs-dialog scroll auto-width overflow-hidden v-model="active">
                                            <template #footer>
                                                <div class="footer-dialog">
                                                    <b-row>
                                                        <b-col>
                                                            <h5>
                                                                <font-awesome-icon class="text-center"
                                                                                   icon="fa fa-list"/>
                                                                ຂໍ້ມູນລາຍລະອຽດ
                                                            </h5>
                                                            <b-row class="mt-2">
                                                                <b-col sm="12" lg="6" md="6"
                                                                       class="mb-3 text-md-right text-lg-right">
                                                                    <div class="success-page__label">ຊື່ ແລະ ນາມສະກູນ
                                                                        ຫຼື
                                                                        ນິຕິອົງກອນ:
                                                                    </div>
                                                                </b-col>
                                                                <b-col sm="12" lg="6" md="6" class="">
                                                                    <div class="">{{
                                                                            userData.CUSTOMERNAME
                                                                        }}
                                                                    </div>
                                                                </b-col>
                                                            </b-row>
                                                            <b-row class="mt-2">
                                                                <b-col sm="12" lg="6" md="6"
                                                                       class="mb-3 text-md-right text-lg-right">
                                                                    <div class="success-page__label">ປະເພດລູກຄ້າ:</div>
                                                                </b-col>
                                                                <b-col sm="12" lg="6" md="6" class="">
                                                                    <div class="">{{
                                                                            getCustomerType(userData.CUSTOMERTYPE)
                                                                        }}
                                                                    </div>
                                                                </b-col>
                                                            </b-row>
                                                            <b-row class="mt-2">
                                                                <b-col sm="12" lg="6" md="6"
                                                                       class="mb-3 text-md-right text-lg-right">
                                                                    <div class="success-page__label">ເບີໂທລະສັບ:</div>
                                                                </b-col>
                                                                <b-col sm="12" lg="6" md="6" class="">
                                                                    <div class="">{{
                                                                            userData.MOBILE
                                                                        }}
                                                                    </div>
                                                                </b-col>
                                                            </b-row>
                                                            <b-row class="mt-2">
                                                                <b-col sm="12" lg="6" md="6"
                                                                       class="mb-3 text-md-right text-lg-right">
                                                                    <div class="success-page__label">เລກທະບຽນວິສະຫະກິດ:
                                                                    </div>
                                                                </b-col>
                                                                <b-col sm="12" lg="6" md="6" class="">
                                                                    <div class="">{{
                                                                            userData.ENTERPRISENUMBER
                                                                        }}
                                                                    </div>
                                                                </b-col>
                                                            </b-row>
                                                            <b-row class="mt-2">
                                                                <b-col sm="12" lg="6" md="6"
                                                                       class="mb-3 text-md-right text-lg-right">
                                                                    <div class="success-page__label">ເລກເອກະສານ
                                                                        ບັດປະຈຳຕົວ/ໜັງສືຜ່ານແດນ:
                                                                    </div>
                                                                </b-col>
                                                                <b-col sm="12" lg="6" md="6" class="">
                                                                    <div class="">{{
                                                                            userData.IDENTIFICATIONNUMBER
                                                                        }}
                                                                    </div>
                                                                </b-col>
                                                            </b-row>
                                                            <b-row class="mt-2">
                                                                <b-col sm="12" lg="6" md="6"
                                                                       class="mb-3 text-md-right text-lg-right">
                                                                    <div class="success-page__label">ທີ່ຢູ່ປັດຈູບັນ:
                                                                    </div>
                                                                </b-col>
                                                                <b-col sm="12" lg="6" md="6" class="">
                                                                    <div class="">{{
                                                                            getProvinceName(userData.ADDRESS)?.name
                                                                        }}
                                                                    </div>
                                                                </b-col>
                                                            </b-row>
                                                            <b-row class="mt-2">
                                                                <b-col sm="12" lg="6" md="6"
                                                                       class="mb-3 text-md-right text-lg-right">
                                                                    <div class="success-page__label">
                                                                        ຈຸດປະສົງການຂໍຊື້ພັນທະບັດ:
                                                                    </div>
                                                                </b-col>
                                                                <b-col sm="12" lg="6" md="6" class="">
                                                                    <div class="">{{
                                                                            userData.PURPOSE
                                                                        }}
                                                                    </div>
                                                                </b-col>
                                                            </b-row>
                                                            <b-row class="mt-2">
                                                                <b-col sm="12" lg="6" md="6"
                                                                       class="mb-3 text-md-right text-lg-right">
                                                                    <div class="success-page__label">ຂໍຊື້ທີ່ສາຂາ:
                                                                    </div>
                                                                </b-col>
                                                                <b-col sm="12" lg="6" md="6" class="">
                                                                    <div class="">{{
                                                                            userData.BRANCH
                                                                        }}
                                                                    </div>
                                                                </b-col>
                                                            </b-row>
                                                            <b-row class="mt-2">
                                                                <b-col sm="12" lg="6" md="6"
                                                                       class="mb-3 text-md-right text-lg-right">
                                                                    <div class="success-page__label">ເລກບັນຊີ:
                                                                    </div>
                                                                </b-col>
                                                                <b-col sm="12" lg="6" md="6" class="">
                                                                    <div class="">{{
                                                                            userData.ACCOUNTNUMBER
                                                                        }}
                                                                    </div>
                                                                </b-col>
                                                            </b-row>
                                                            <b-row class="mt-2">
                                                                <b-col sm="12" lg="6" md="6"
                                                                       class="mb-3 text-md-right text-lg-right">
                                                                    <div class="success-page__label">ຈຳນວນເງິນ:
                                                                    </div>
                                                                </b-col>
                                                                <b-col sm="12" lg="6" md="6" class="">
                                                                    <div class=" text-success">{{
                                                                            format_money(userData.BOOKAMOUNT)
                                                                        }} ກີບ
                                                                    </div>
                                                                </b-col>
                                                            </b-row>
                                                            <b-row class="mt-2">
                                                                <b-col sm="12" lg="6" md="6"
                                                                       class="mb-3 text-md-right text-lg-right">
                                                                    <div class="success-page__label">
                                                                        ຈຳນວນເງິນເປັນໂຕໜັງສື:
                                                                    </div>
                                                                </b-col>
                                                                <b-col sm="12" lg="6" md="6" class="">
                                                                    <div class="">{{
                                                                            laoNumberString(userData.BOOKAMOUNT)
                                                                        }} ກີບ
                                                                    </div>
                                                                </b-col>
                                                            </b-row>
                                                        </b-col>
                                                    </b-row>
                                                </div>
                                            </template>
                                        </vs-dialog>

                                    </b-card>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import {get} from "vuex-pathify"
import QrcodeVue from 'qrcode.vue'
import html2canvas from "html2canvas";

import QRCode from 'qrcode'

export default {
    data() {
        return {
            windowWidth: window.innerWidth,
            page: 1,
            max: 8,
            selectFormType: '2',
            active: false,
            size: 500,
            // idTest: 836403966
        }
    },
    computed: {
        userData: get("user_bond_data"),
        provinces: get("provinces"),
    },
    components: {
        QrcodeVue
    },
    methods: {
        scrollToTop() {
            if (window.pageYOffset > 0) {
                window.scrollTo(0, 0);
            }
        },
        downloadUI() {
            const el = document.querySelector('.my-download-ui');
            html2canvas(el).then(canvas => {
                const dataURL = canvas.toDataURL('image/png');
                const link = document.createElement('a');
                link.download = 'lvb_register_bond.png';
                link.href = dataURL;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        },
        onViewDetail() {
            this.active = true
        },
        getProvinceName(v) {
            return this.provinces.find((e) => e.item === v)
        },
    },
    mounted() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        window.addEventListener('scroll', this.scrollToTop);
        window.addEventListener('touchmove', this.scrollToTop);
        this.$nextTick(() => {
            window.addEventListener("resize", this.onResize);
        });


        QRCode.toCanvas(this.$refs.qrCodeCanvas, this.userData?.FORMID.toString(), {
            width: 200,
            height: 200
        }, (error) => {
            if (error) {
                console.error(error)
            } else {
                this.$nextTick(() => {
                   this.$refs.qrCodeCanvas.getContext('2d')
                })
            }
        })
        // QRCode.toCanvas(this.$refs.qrCodeCanvas, this.idTest.toString(), { width: 200, height: 200 }, (error) => {
        //     if (error) {
        //         console.error(error)
        //     } else {
        //         this.$nextTick(() => {
        //             const context = this.$refs.qrCodeCanvas.getContext('2d')
        //             console.log(context) // Log the canvas context
        //         })
        //     }
        // })
    },
    beforeDestroy() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        window.removeEventListener("resize", this.onResize);
        window.removeEventListener('scroll', this.scrollToTop);
        window.removeEventListener('touchmove', this.scrollToTop);
    },
    beforeMount() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        if (!this.userData.FORMID != "") {
            this.$router.push("/");
        }
    }
}
</script>

<style scoped>
.qr-code-container {
    margin: 0;
    padding: 0;
}

.heading-container {
    padding-top: 5rem;
    margin-top: 3rem;
}

@media (max-width: 450px) {
    .heading-container {
        padding-top: 2rem;
        margin-top: 3rem;
    }

    .label {
        text-align: left;
    }

    h4 {
        font-size: 18px;
    }
}

@media (min-width: 451px) {
    .heading-container {
        padding-top: 3rem;
        margin-top: 2rem;
    }

    h4 {
        font-size: 18px;
    }
}

.success-page__label {
    font-weight: bold;
    margin-right: 10px;
}

.success-page__value {
    font-size: 18px;
}

</style>