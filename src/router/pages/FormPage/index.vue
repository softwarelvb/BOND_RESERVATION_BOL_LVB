<template>
  <div>
    <section class="section">
      <div class="py-4 py-sm-0">
        <div :style="windowWidth <= 820 ? 'height: 100%' : ''">
          <div class="display-table">
            <div class="display-table-cell">
              <div class="container">
                <h3
                    :class="[windowWidth > 450 ? 'pt-4 mt-3' : ' pt-2 mt-4']"
                    class="font-weight-bold text-primary text-center"
                >
                  <br/>
                  <span style="font-size: calc(0.7vw + 1vh + 1vmin)">
                    {{ $t("Register.Header") }}
                  </span>
                </h3>
                <FormPaymentOrder></FormPaymentOrder>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const FormPaymentOrder = () => import("@/components/Form/PaymentOrder")
export default {
  name: "OutwardTransferForm.vue",
  data() {
    return {
      windowWidth: window.innerWidth,
    }
  },
  components: {
    FormPaymentOrder,
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

<style scoped>

</style>