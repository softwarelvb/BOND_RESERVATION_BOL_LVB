
<template>
  <div class="center">
    <vs-button border primary flat @click="(active = !active), onCloseMenu()">
      <country-flag
        :country="getLange == 'vi' ? 'vn' : getLange == 'en' ? 'us' : getLange"
        size="small"
      />
      {{ $t("nameLang") }}
    </vs-button>
    <vs-dialog not-close v-model="active">
      <template #header>
        <h4 class="not-margin">{{ $t("Lang.selectLang") }}</h4>
      </template>
      <vs-row justify="center">
        <vs-col w="4">
          <vs-button border @click="ChangeLang('la')">
            <country-flag country="la" size="small" /> ພາສາລາວ
          </vs-button>
        </vs-col>
        <vs-col w="4">
          <vs-button border @click="ChangeLang('vi')">
            <country-flag country="vn" size="small" /> Tieng Viet
          </vs-button>
        </vs-col>
        <vs-col w="4">
          <vs-button border @click="ChangeLang('en')">
            <country-flag country="us" size="small" /> English
          </vs-button>
        </vs-col>
      </vs-row>

      <!-- <div class="con-form">
        <vs-input v-model="input1" placeholder="Email">
          <template #icon> @ </template>
        </vs-input>
        <vs-input type="password" v-model="input2" placeholder="Password">
          <template #icon>
            <i class="bx bxs-lock"></i>
          </template>
        </vs-input>
        <div class="flex">
          <vs-checkbox v-model="checkbox1">Remember me</vs-checkbox>
          <a href="#">Forgot Password?</a>
        </div>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block> Sign In </vs-button>

          <div class="new">New Here? <a href="#">Create New Account</a></div>
        </div>
      </template> -->
    </vs-dialog>
  </div>
</template>
<script>
import { get } from "vuex-pathify";
export default {
  data: () => ({
    active: false,
    input1: "",
    input2: "",
    checkbox1: false,
  }),
  computed: {
    getLange() {
      return this.$i18n.locale;
    },
  },
  methods: {
    onCloseMenu() {
      this.$emit("toggleMenu");
    },
    ChangeLang(lang) {
      this.$store.set("lang", lang);
      localStorage.setItem("lang", lang);
      this.$i18n.locale = lang;
      this.active = false;
    },
  },
};
</script>
<style lang="stylus" scoped>
getColor(vsColor, alpha = 1) {
  unquote('rgba(var(--vs-' + vsColor + '), ' + alpha + ')');
}

getVar(var) {
  unquote('var(--vs-' + var + ')');
}

.not-margin {
  margin: 0px;
  font-weight: normal;
  padding: 10px;
}

.con-form {
  width: 100%;

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      font-size: 0.8rem;
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }
    }
  }

  .vs-checkbox-label {
    font-size: 0.8rem;
  }

  .vs-input-content {
    margin: 10px 0px;
    width: calc(100%);

    .vs-input {
      width: 100%;
    }
  }
}

.footer-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(100%);

  .new {
    margin: 0px;
    margin-top: 20px;
    padding: 0px;
    font-size: 0.7rem;

    a {
      color: getColor('primary') !important;
      margin-left: 6px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .vs-button {
    margin: 0px;
  }
}
</style>
        