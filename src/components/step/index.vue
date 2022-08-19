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
                {{ $t("Step.Header") }} 1:
                 <font-awesome-icon class="ml-1" :icon="icon.step1"/>
                {{ stepText.step1 }}
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
                {{ $t("Step.Header") }} 2:
                <font-awesome-icon class="ml-1" :icon="icon.step2"/>
                   {{ stepText.step2 }}
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
                {{ $t("Step.Header") }} 3:
                <font-awesome-icon class="ml-1" :icon="icon.step3"/>
                {{ stepText.step3 }}
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
  props: ["step", "icon", "stepText"],
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