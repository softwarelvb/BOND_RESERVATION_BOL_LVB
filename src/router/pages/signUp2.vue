

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
                  <br />
                  <span style="font-size: calc(0.7vw + 1vh + 1vmin)">
                    {{ $t("Register.Header") }}
                  </span>
                </h3>
                <STEP @onStep="onStep" :step="step" class="pt-3"></STEP>
                <REGISTERSTEP1
                  v-if="step === 1"
                  class="pt-3"
                  @NextStep="onNextStep"
                ></REGISTERSTEP1>
                <OTP class="pt-3" v-if="step === 2"></OTP>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
/**
 * Signup component
 */
//  import Footer from "@/layouts/footer";

const STEP = () => import("@/components/step/index.vue");
const REGISTERSTEP1 = () => import("@/components/RegisterUser/STEP1.vue");
const OTP = () => import("@/components/RegisterUser/STEP2.vue");
import Services from "@/components/services";

export default {
  name: "Signup",
  data() {
    return {
      step: 1,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    };
  },
  components: {
    STEP,
    REGISTERSTEP1,
    OTP,
    Services,
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onStep(v) {
      this.step = v;
      this.$store.set("step", v);
    },
    onNextStep() {
      alert("ok");
      this.step = this.step + 1;
      this.$store.set("step", this.step);
    },
    onGotoMenu(v) {
      this.$router.push(v);
    },
    onResize() {
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>