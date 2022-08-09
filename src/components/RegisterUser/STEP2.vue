<template>
  <div>
    <div id="app">
      <div
        class="
          container
          height-100
          d-flex
          justify-content-center
          align-items-center
        "
      >
        <div class="position-relative">
          <div class="card p-2 text-center shadow">
            <b-row class="justify-content-md-center pt-4 pb-3">
              <b-col cols="md-7 sm-12">
                <h3>{{ $t("OTP.Header") }} <br /></h3>
                <h5>{{ $t("OTP.SecondHeader") }}</h5>
                <div class="pt-1">
                  <span>{{ $t("OTP.EmailSent") }}</span>
                  <small>*******9897</small>
                </div>
                <div
                  id="otp"
                  class="inputs d-flex flex-row justify-content-center mt-2"
                >
                  <b-form-input
                    class="m-1 text-center form-control rounded"
                    type="number"
                    id="input1"
                    v-on:keyup="inputenter(1)"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    maxlength="1"
                    v-model="value1"
                  />
                  <b-form-input
                    class="m-1 text-center form-control rounded"
                    v-on:keyup="inputenter(2)"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    type="number"
                    id="input2"
                    maxlength="1"
                    v-model="value2"
                  />
                  <b-form-input
                    class="m-1 text-center form-control rounded"
                    v-on:keyup="inputenter(3)"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    type="number"
                    id="input3"
                    v-model="value3"
                    maxlength="1"
                  />
                  <b-form-input
                    class="m-1 text-center form-control rounded"
                    v-on:keyup="inputenter(4)"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    type="number"
                    id="input4"
                    v-model="value4"
                    maxlength="1"
                  />
                  <b-form-input
                    class="m-1 text-center form-control rounded"
                    v-on:keyup="inputenter(5)"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    type="number"
                    id="input5"
                    v-model="value5"
                    maxlength="1"
                  />
                  <b-form-input
                    class="m-1 text-center form-control rounded"
                    v-on:keyup="inputenter(6)"
                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                    type="number"
                    v-model="value6"
                    id="input6"
                    maxlength="1"
                  />
                </div>

                <div class="mt-4">
                  <button
                    @click="onValidate"
                    :disabled="
                      !value1 || !value2 || !value3 || !value4 || !value5
                    "
                    class="btn btn-danger px-4 validate"
                  >
                    {{ $t("OTP.Validate") }}
                  </button>
                </div>
                <div
                  class="
                    mt-3
                    content
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                >
                  <span> {{ $t("OTP.DonotgetOTP") }} ? </span>
                  <a href="#" class="text-decoration-none ms-3">
                    {{ $t("OTP.Resend") }}(1/3)</a
                  >
                </div>
              </b-col>
            </b-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: null,
      value6: null,
    };
  },
  computed: {
    OTPInput() {
      return (
        this.value1.toString() +
        this.value2.toString() +
        this.value3.toString() +
        this.value4.toString() +
        this.value5.toString() +
        this.value6.toString()
      );
    },
  },
  methods: {
    onValidate() {
      //   console.log("OTP INPUT", this.OTPInput);
      console.log(this.OTPInput, this.OTPInput.toString().length);
      if (this.OTPInput.length < 6) {
        this.$store.set("modalAlert", {
          state: true,
          text: "please enter OTP",
          type: "alert",
        });
        return;
      }
    },
    inputenter(id) {
      const inputs = document.querySelectorAll("#otp > *[id]");
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("keydown", function (event) {
          if (event.key === "Backspace") {
            inputs[i].value = "";
            if (i !== 0) inputs[i - 1].focus();
          } else {
            if (i === inputs.length - 1 && inputs[i].value !== "") {
              return true;
            } else if (event.keyCode > 47 && event.keyCode < 58) {
              inputs[i].value = event.key;
              if (i !== inputs.length - 1) inputs[i + 1].focus();
              event.preventDefault();
            } else if (event.keyCode > 64 && event.keyCode < 91) {
              inputs[i].value = String.fromCharCode(event.keyCode);
              if (i !== inputs.length - 1) inputs[i + 1].focus();
              event.preventDefault();
            }
          }
        });
      }
    },
  },
};
</script>

<style>
</style>