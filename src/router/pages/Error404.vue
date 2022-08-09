<script>
export default {
  name: "Contact",
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
    console.log(process.env.VUE_APP_ROOT_API);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>

<template>
  <section
    class="section height-100vh"
    id="contact"
    :style="windowWidth <= 820 ? 'height: 100%' : ''"
  >
    <div class="display-table">
      <div class="display-table-cell">
        <div class="container">
          <div class="account-card">
            <div class="card-body">
              <h4
                class="text-center text-primary"
                style="font-size: calc(2vw + 2vh + 2vmin)"
              >
                Oops!! <br />404
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>