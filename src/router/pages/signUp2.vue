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
                <STEP :stepText="stepText" :icon="iconStep" @onStep="onSelectStep" :step="step" class="pt-3"></STEP>
                <div>
                  <REGISTERSTEP1
                      v-if="step === 1"
                      class="pt-3"
                      @NextStep="onNextStep"

                  ></REGISTERSTEP1>
                </div>
                <div>
                  <OTP class="pt-3" @NextStep="onNextStep" v-if="step === 2"></OTP>
                </div>
                <div>
                  <SUCCESS class="pt-3" v-if="step === 3"></SUCCESS>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import {get} from 'vuex-pathify'

const STEP = () => import("@/components/step/index.vue");
const REGISTERSTEP1 = () => import("@/components/RegisterUser/STEP1.vue");
const OTP = () => import("@/components/RegisterUser/STEP2.vue");
const SUCCESS = () => import("@/components/RegisterUser/STEP3")

export default {
  name: "Signup",
  data() {
    return {
      step: 1,
      timerCount: 180,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      stepText: {
        step1: this.$t("Step.Step1"),
        step2: this.$t("Step.Step2"),
        step3: this.$t("Step.Step3"),
      },
      iconStep: {
        step1: 'fa-solid fa-address-book',
        step2: 'fa-solid fa-lock',
        step3: 'fa-solid fa-check',
      }
    };
  },
  components: {
    STEP,
    REGISTERSTEP1,
    OTP,
    SUCCESS
  },
  computed: {
    reqUserData: get("reqRegisterData"),
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
    onSelectStep(v) {
      // if (v > 1 && !this.reqUserData) {
      //   this.$store.set("modalAlert", {
      //     state: true,
      //     text: this.$t("Modal.PleaseEnterValue"),
      //     type: "alert",
      //   });
      //   return;
      // }
      // this.step = v;
      // this.$store.set("step", v);
    },
    onNextStep() {
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