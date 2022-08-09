<script>
export default {
  name: "Services",
};
</script>

<template>
  <div>
    <!--START SERVICES-->
    <section class="section bg-light" id="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <h1 class="section-title text-center">
              {{ $t("Service.Header") }}
            </h1>
            <div class="section-title-border margin-t-20"></div>
          </div>
        </div>
        <div class="row margin-t-10">
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-news-paper text-custom"></i>
                <div class="media-body ml-4">
                  <h4 class="text-primary">
                    {{ $t("Service.LoanIndividual") }}
                  </h4>
                  <p class="pt-2 text-muted">
                    {{ $t("Service.LoanIndividualDetial") }}
                    <b-link
                      href="https://www.laovietbank.com.la/la/category/payment-account.html"
                      disabled
                    >
                      <em> {{ $t("Service.Detial") }} ...</em>
                    </b-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-piggy text-custom"></i>
                <div class="media-body ml-4">
                  <h4 class="text-primary">
                    {{ $t("Service.CasaIndividual") }}
                  </h4>
                  <p class="pt-2 text-muted">
                    {{ $t("Service.CasaIndividualDetial") }}

                    <b-link
                      href="https://www.laovietbank.com.la/la/category/payment-account.html"
                      disabled
                    >
                      <em> {{ $t("Service.Detial") }} ...</em>
                    </b-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-piggy text-custom"></i>
                <div class="media-body ml-4">
                  <h4 class="text-primary">
                    {{ $t("Service.SavingIndividual") }}
                  </h4>
                  <p class="pt-2 text-muted">
                    {{ $t("Service.SavingIndividualDetial") }}
                    <b-link
                      href="https://www.laovietbank.com.la/la/category/payment-account.html"
                      disabled
                    >
                      <em> {{ $t("Service.Detial") }} ...</em>
                    </b-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-science text-custom"></i>
                <div class="media-body ml-4">
                  <h4 class="text-primary">
                    {{ $t("Service.AccountPaymentORG") }}
                  </h4>
                  <p class="pt-2 text-muted">
                    {{ $t("Service.AccountingPaymentDetailORG") }}
                    <b-link
                      href="https://www.laovietbank.com.la/la/category/payment-account-enterprise.html"
                      disabled
                    >
                      <em> {{ $t("Service.Detial") }} ...</em>
                    </b-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-news-paper text-custom"></i>
                <div class="media-body ml-4">
                  <h4 class="text-primary">
                    {{ $t("Service.LoanORG") }}
                  </h4>
                  <p class="pt-2 text-muted">
                    {{ $t("Service.LoanORGDetial") }}
                    <b-link
                      href="https://www.laovietbank.com.la/la/category/payment-account-enterprise.html"
                      disabled
                    >
                      <em> {{ $t("Service.Detial") }} ...</em>
                    </b-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-piggy text-custom"></i>

                <div class="media-body ml-4">
                  <h4 class="text-primary">
                    {{ $t("Service.SavingORG") }}
                  </h4>
                  <p class="pt-2 text-muted">
                    {{ $t("Service.SavingORGDetial") }}
                    <b-link
                      href="https://www.laovietbank.com.la/la/category/business-savings.html"
                      disabled
                    >
                      <em> {{ $t("Service.Detial") }} ...</em>
                    </b-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-global text-custom"></i>
                <div class="media-body ml-4">
                  <h4 class="text-primary">
                    {{ $t("Service.PaymentOversea") }}
                  </h4>
                  <p class="pt-2 text-muted">
                    {{ $t("Service.PaymentOverseaDetial") }}
                    <b-link
                      href="https://www.laovietbank.com.la/la/category/international-payments.html"
                      disabled
                    >
                      <em> {{ $t("Service.Detial") }} ...</em>
                    </b-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-phone text-custom"></i>
                <div class="media-body ml-4">
                  <h4 class="text-primary">
                    {{ $t("Service.DigiBank") }}
                  </h4>
                  <p class="pt-2 text-muted">
                    {{ $t("Service.DigiBankDetial") }}
                    <b-link
                      href="https://www.laovietbank.com.la/la/category/dich-vu-mobile-banking.html"
                      disabled
                    >
                      <em> {{ $t("Service.Detial") }} ...</em>
                    </b-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-timer text-custom"></i>
                <div class="media-body ml-4">
                  <h4 class="text-primary">{{ $t("Service.LVBQRPAY") }}</h4>
                  <p class="pt-2 text-muted">
                    {{ $t("Service.LVBQRPAYDetail") }}
                    <b-link
                      href="https://www.laovietbank.com.la/la/category/laovietbank-qr-pay.html"
                      disabled
                    >
                      <em> {{ $t("Service.Detial") }} ...</em>
                    </b-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-credit text-custom"></i>
                <div class="media-body ml-4">
                  <h4 class="text-primary">
                    {{ $t("Service.LVBATM") }}
                  </h4>
                  <p class="pt-2 text-muted">
                    {{ $t("Service.LVBATMDetail") }}
                    <b-link
                      href="https://www.laovietbank.com.la/la/category/product-card.html"
                      disabled
                    >
                      <em> {{ $t("Service.Detial") }} ...</em>
                    </b-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 margin-t-20">
            <div class="services-box">
              <div class="media">
                <i class="pe-7s-wallet text-custom"></i>
                <div class="media-body ml-4">
                  <h4 class="text-primary">{{ $t("Service.LVBExchange") }}</h4>
                  <p class="pt-2 text-muted">
                    {{ $t("Service.LVBExchangeDetail") }}
                    <b-link
                      href="https://www.laovietbank.com.la/la/category/foreign-currency-trading-services.html"
                      disabled
                    >
                      <em> {{ $t("Service.Detial") }} ...</em>
                    </b-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

