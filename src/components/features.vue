<script>
/**
 * Features component
 */
export default {
  name: "Features",
  methods: {
    onGotoMenu(v) {
      this.$router.push(v);
    },
  },
};
</script>

<template>
  <!--START FEATURES-->
  <section class="section" id="features">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 order-2 order-lg-1">
          <div class="features-box mt-5 mt-lg-0">
            <h3>{{ $t("Feature.Header") }}</h3>
            <p class="text-muted web-desc">
              {{ $t("Feature.DetialHeader") }}
            </p>
            <ul class="text-muted list-unstyled margin-t-30 features-item-list">
              <li class>
                {{ $t("Feature.List1") }}
              </li>
              <li class>
                {{ $t("Feature.List2") }}
              </li>
              <li class>
                {{ $t("Feature.List3") }}
              </li>
            </ul>
            <a
              @click="onGotoMenu('form-online')"
              class="btn btn-custom margin-t-30 text-white"
            >
              {{ $t("Feature.Detial") }}
              <i class="mdi mdi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div class="col-lg-7 order-1 order-lg-2">
          <div class="features-img mx-auto mr-lg-0">
            <img
              src="@/assets/images/growth-analytics.svg"
              alt="macbook image"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--END FEATURES-->
</template>