<template>
  <div>
    <vs-dialog
      width="550px"
      v-if="modalDetial && modalDetial.type == 'confirm'"
      not-center
      @close="handleClose"
      :value="modalDetial.state"
    >
      <template #header>
        <h4 class="not-margin pt-3 text-center" style="font-size: 18px">
          <strong>
            <strong>
              <font-awesome-icon icon="fa-solid fa-bell" />
              {{ $t("Modal.Alert") }}
            </strong>
          </strong>
        </h4>
      </template>
      <div class="con-content text-center">
        <p style="font-size: 15px">{{ modalDetial.text }}</p>
      </div>

      <template #footer>
        <div class="con-footer">
          <vs-button @click="confirm" transparent>
            {{ $t("Modal.Confirm") }}
          </vs-button>
          <vs-button @click="handleClose" dark transparent>
            {{ $t("Modal.Cancle") }}
          </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>

<script>
import { get } from "vuex-pathify";
export default {
  computed: {
    modalDetial: get("modalAlert"),
  },
  methods: {
    handleClose() {
      this.$store.set("modalAlert", null);
    },
    confirm() {
      console.log("ok");
      this.$emit("onConfirm", true);
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

.con-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .vs-button {
    margin: 0px;

    .vs-button__content {
      padding: 10px 30px;
    }

    ~ .vs-button {
      margin-left: 10px;
    }
  }
}

.not-margin {
  margin: 0px;
  font-weight: normal;
  padding: 10px;
  padding-bottom: 0px;
}

.con-content {
  width: 100%;

  p {
    font-size: 0.8rem;
    padding: 0px 10px;
  }

  .vs-checkbox-label {
    font-size: 0.8rem;
  }

  .vs-input-parent {
    width: 100%;
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
        