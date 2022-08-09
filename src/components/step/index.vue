<template>
  <div class="steps" :class="[step === 0 ? 'disabledStepWizard' : '']">
    <table class="stepsWizard" id="stepsWizard">
      <thead>
        <tr>
          <td @click="Click(1)" style="cursor: pointer">
            <div
              :class="[
                'step',
                step === 1 ? 'current ' : '',
                step > 1 ? 'current ' : '',
              ]"
            >
              <span>
                <i class="fa fa-search"></i>
                {{ $t("Step.Header") }} 1:
                {{ $t("Step.Step1") }}
              </span>
            </div>
          </td>
          <td @click="Click(2)" style="cursor: pointer">
            <div
              :class="[
                'step',
                step === 2 ? 'current ' : '',
                step > 2 ? 'current ' : '',
              ]"
            >
              <span>
                <i class="fas fa-file-invoice"></i>
                {{ $t("Step.Header") }} 2:
                {{ $t("Step.Step2") }}
              </span>
            </div>
          </td>
          <td @click="Click(3)" style="cursor: pointer">
            <div
              :class="[
                'step',
                step === 3 ? 'current ' : '',
                step > 3 ? 'current ' : '',
              ]"
            >
              <span>
                <i class="fas fa-check"></i>
                {{ $t("Step.Header") }} 3:
                {{ $t("Step.Step3") }}
              </span>
            </div>
          </td>
        </tr>
      </thead>
    </table>
  </div>
</template>
<script>
export default {
  props: ["step"],
  methods: {
    Click(v) {
      this.$emit("onStep", v);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/step.css";
</style>