<template>
    <div class="center examplex">
        <section class="section">
            <div class="">
                <div class="heading-container" style="height: auto">
                    <b-row class="justify-content-md-center">
                        <b-col sm="12" lg="10" md="10">
                            <h4 class="text-center pb-2 text-primary">
                                <font-awesome-icon icon="fa-solid fa-clipboard-list"/>
                                ລົງທະບຽນ ແບບຟອມສັ່ງຈອງຊື້ພັນທະບັດ
                            </h4>
                            <div class="pl-3 pr-3">
                                <BondReservation></BondReservation>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </div>
        </section>
        <vs-dialog scroll  auto-width overflow-hidden v-model="active">
            <template #footer>
                <div class="footer-dialog">
                    <b-row class="justify-content-md-center">
                        <b-col cols="auto">
                            <img
                               src="@/assets/images/LOGO_BANK_V2.png"
                               style="width: 100px"
                            />
                        </b-col>
                    </b-row>
                    <h5 class="text-primary">ລາຍລະອຽດສັ່ງຈອງຊື້ພັນທະບັດ</h5>
                    <info_bond></info_bond>
                </div>
            </template>
        </vs-dialog>
    </div>
</template>
<script>
const BondReservation = () => import("@/components/Form/BondReservation")
import info_bond from "./info_bond"
export default {
    data() {
        return {
            windowWidth: window.innerWidth,
            page: 1,
            max: 8,
            // selectFormType: '2',
            active: false,
            active2: false
        }
    },
    computed: {
        // getFormTypeName() {
        //     return this.selectFormType === '2' ? this.$t("FormType.PaymentOrder") : this.selectFormType === '1' ? this.$t("FormType.CashWithDrawSlip") : this.selectFormType === '3' ? this.$t("FormType.ChequeDepost") : this.$t("FormType.OutWardTransfer");
        // }
    },
    components: {
        BondReservation,
        info_bond
    },
    methods: {
        selectCustomerType(type) {
            this.selectedCustomerType = type;
        },
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener("resize", this.onResize);
        });
        this.active = true
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.onResize);
    },
}
</script>

<style scoped>
.heading-container {
    padding-top: 5rem;
    margin-top: 3rem;
}

@media (max-width: 450px) {
    .heading-container {
        padding-top: 2rem;
        margin-top: 3rem;
    }

    h4 {
        font-size: 22px;
    }
}

@media (min-width: 451px) {
    .heading-container {
        padding-top: 3rem;
        margin-top: 3rem;
    }

    h4 {
        font-size: 18px;
    }
}
</style>

<style lang="stylus">
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



