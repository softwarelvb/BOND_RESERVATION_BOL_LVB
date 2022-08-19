<template>
  <div>
    <b-card class="shadow">
      <h4 style="font-size: 20px" class="text-center text-primary">
        <font-awesome-icon icon="fa-solid fa-address-book"/>
        {{ $t("Register.FormRegister") }}
      </h4>
      <div class="pl-3 pb-4 pr-3">
        <b-row>
          <b-col class="pt-2" sm="12" lg="4" md="4">
            <label for="firstname"> {{ $t("Register.NameAndLastName") }}</label>
            <b-form-input
                type="text"
                name="inputName"
                v-validate="'required|min:5'"
                class="form-control"
                :placeholder="$t(`Register.PleaseEnterNameAndLastName`)"
                v-model="inputName"
            />
            <span class="text-danger validate-message">{{
                errors.first("inputName")
                    ? $t("Register.PleaseEnterNameAndLastName")
                    : ""
              }}</span></b-col>
          <b-col class="pt-2" sm="12" lg="8" md="8">
            <label for="email">{{ $t("Register.Address") }}</label>
            <b-form-input
                type="text"
                v-model="inputAddress"
                v-validate="'required|min:5'"
                name="inputAddress"
                class="form-control"
                :placeholder="$t(`Register.PleaseEnterAddress`)"
            />
            <span class="text-danger validate-message">{{
                errors.first("inputAddress")
                    ? $t("Register.PleaseEnterAddress")
                    : ""
              }}</span></b-col
          >
        </b-row>
        <b-row>
          <b-col class="pt-2" sm="12" lg="4" md="4">
            <label for="email">
              {{ $t("Register.Email") }}
            </label>
            <b-form-input
                type="email"
                name="email"
                v-model="inputEmail"
                v-validate="'required|email'"
                :class="[errors.has('email') ? 'text-danger' : '']"
                :placeholder="$t(`Register.Email`)"
            />
            <span class="text-danger validate-message">{{
                errors.first("email")
                    ? $t(`Register.PleaseEnterCollectEmail`)
                    : ""
              }}</span>
          </b-col>
          <b-col class="pt-2" sm="12" lg="4" md="4">
            <label for="userpassword">{{ $t(`Register.Password`) }} </label>
            <b-form-input
                type="password"
                name="inputPassword"
                class="form-control"
                v-model="inputPassword"
                v-validate="{
                required: true,
                min: 8,
                regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).*$/,
              }"
                :placeholder="$t(`Register.Password`)"
            />
            <span class="text-danger validate-message">{{
                errors.first("inputPassword")
                    ? $t(`Register.PleaseEnterCollectPassword`)
                    : ""
              }}</span>
          </b-col>
          <b-col class="pt-2" sm="12" lg="4" md="4">
            <label for="userpassword">{{
                $t("Register.ConfirmPassword")
              }}</label>
            <b-form-input
                type="password"
                class="form-control"
                name="inputConfirmPassword"
                v-model="inputConfirmPassword"
                v-validate="{
                required: true,
                min: 8,
                regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).*$/,
              }"
                :placeholder="$t(`Register.ConfirmPassword`)"
            />
            <span class="text-danger validate-message">{{
                errors.first("inputConfirmPassword")
                    ? $t(`Register.PleaseEnterCollectPassword`)
                    : ""
              }}</span>
            <span
                v-if="checkPassword && !errors.has(`inputConfirmPassword`)"
                class="text-danger validate-message"
            >{{ $t("Register.NotSamePassword") }}</span
            >
          </b-col>
        </b-row>
        <b-row>
          <b-col class="pt-2" sm="12" lg="4" md="4">
            <label for="phone">{{ $t("Register.Phone") }}</label>
            <b-form-input
                type="number"
                v-model="inputPhone"
                v-validate="'required|numeric|min:6|max:13'"
                name="inputPhone"
                class="form-control"
                :placeholder="$t(`Register.Phone`)"
            />
            <span class="text-danger validate-message">{{
                errors.first("inputPhone") ? $t("Register.PleaseEnterPhone") : ""
              }}</span>
          </b-col>
          <b-col class="pt-2" sm="12" lg="4" md="4">
            <b-form-group>
              <label for="">{{ $t("Register.SelectCustomerType") }}</label>
              <div>
                <b-form-radio-group
                    v-model="selected"
                    :options="options"
                    class="mb-3"
                    value-field="item"
                    text-field="name"
                    disabled-field="notEnabled"
                ></b-form-radio-group>
              </div>
            </b-form-group>
          </b-col>
        </b-row>
        <div class="mt-2">
          <button @click="btnRegister" class="btn btn-custom btn-block">
            {{ $t("Register.Register") }}
          </button>
        </div>
        <div class="mt-4 mb-0 text-center">
          <p class="mb-0">
            {{ $t("Register.DoyouhaveAccount") }} ?
            <router-link tag="a" to="/login" class="text-danger">{{
                $t("Register.Login")
              }}
            </router-link>
          </p>
        </div>
      </div>
    </b-card>
    <section class="section-sm"></section>
  </div>
</template>

<script>
import {get} from 'vuex-pathify';
import RestApi from "@/API/RestApi";

export default {
  data() {
    return {
      inputName: "",
      inputEmail: "",
      inputPassword: "",
      inputConfirmPassword: "",
      inputPhone: "",
      inputAddress: "",
      selected: "I",
      options: [
        {name: this.$t("Register.IndividualCustomer"), item: "I"},
        {name: this.$t("Register.CorporateCustomer"), item: "C"},
      ],
      showPassword: false,
      showConfirmPassword: false,
    };
  },
  computed: {
    checkPassword() {
      return this.inputConfirmPassword !== ""
          ? this.inputPassword !== this.inputConfirmPassword
          : false;
    },
    typePassword() {
      return this.showPassword === false ? "password" : "text";
    },
  },
  mounted() {
    this.$store.set("reqRegisterData", "");
  },
  methods: {
    async btnRegister() {
      const invalid = await this.$validator.validate();
      console.log(this.errors);
      if (!invalid || this.errors.any()) {
        this.$store.set("modalAlert", {
          state: true,
          text: this.$t("Modal.PleaseEnterValue"),
          type: "alert",
        });
        return;
      }
      if (this.inputPassword !== this.inputConfirmPassword) {
        this.$store.set("modalAlert", {
          state: true,
          text: this.$t("Register.NotSamePassword"),
          type: "alert",
        });
        return;
      }
      let req = {
        name: this.inputName,
        email: this.inputEmail,
        password: this.inputPassword,
        confirm_Password: this.inputConfirmPassword,
        phone: this.inputPhone,
        address: this.inputAddress,
        id_org: this.selected === 'I' ? 'N' : 'Y',
        type: "REGISTER"
      };
      console.log(req);
      const loading = this.$vs.loading({
        text: this.$t("Loading.text"),
      });
      RestApi.doRegister(req)
          .then((res) => {
            if (res && res.data.error_code !== '00') {
              this.$store.set("modalAlert", {state: true, text: res.data.error_desc, type: 'alert'});
              loading.close();
            } else {
              this.$store.set("registerData", res.data.data);
              this.$store.set("reqRegisterData", req);
              this.$emit("NextStep");
              loading.close();
            }
          })
          .catch((err) => {
            loading.close();
            this.$store.set("modalAlert", {state: true, text: err, type: 'alert'});
            console.log(err);
          });
    },
  },
};
</script>

<style>
</style>