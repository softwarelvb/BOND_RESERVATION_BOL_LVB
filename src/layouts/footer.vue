<script>
/**
 * Footer component
 */
export default {
  name: "Footer",
  methods: {
    onGotoMenu(v) {
      this.$router.push(v);
    },
  },
};
</script>

<template>
  <div>
    <!--START FOOTER-->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 margin-t-5">
            <h4>{{ $t("Footer.Header1") }}</h4>
            <div class="text-muted margin-t-20">
              <ul class="list-unstyled footer-list">
                <li>
                  <a href="#">{{ $t("Footer.RoleAndPolicy") }}</a>
                </li>
                <li>
                  <a
                    href="https://www.laovietbank.com.la/la/page/%E0%BB%81%E0%BA%99%E0%BA%B0%E0%BA%99%E0%BA%B3%E0%BA%A5%E0%BA%A7%E0%BA%A1-1.html"
                    >{{ $t("Footer.AboutBank") }}</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.laovietbank.com.la/la/category/career-opportunities.html"
                    >{{ $t("Footer.ApplyJob") }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 margin-t-5">
            <h4>{{ $t("Footer.Header2") }}</h4>
            <div class="text-muted margin-t-20">
              <ul class="list-unstyled footer-list">
                <li>
                  <a @click="gotoMenu('form-online')">{{
                    $t("Footer.CreateOnlineForm")
                  }}</a>
                </li>
                <li>
                  <a
                    href="https://www.laovietbank.com.la/la/category/laovietbank-qr-pay.html"
                    >LaoVietBank QR Pay</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.laovietbank.com.la/la/category/dich-vu-mobile-banking.html"
                    >{{ $t("Footer.LVBDigiBank") }}</a
                  >
                </li>
                <li>
                  <a href="#">{{ $t("Footer.TransferwithMobileBanking") }}</a>
                </li>
                <li>
                  <a
                    href="https://www.laovietbank.com.la/la/category/dich-vu-thanh-toan-tien-nuoc.html"
                    >{{ $t("Footer.BillPayment") }}</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.laovietbank.com.la/la/category/sms-messaging-service.html"
                    >{{ $t("Footer.LSMS") }}</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.laovietbank.com.la/la/category/topup-service.html"
                    >{{ $t("Footer.TOPUP") }}</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.laovietbank.com.la/la/category/foreign-currency-trading-services.html"
                    >{{ $t("Footer.ExchangeMoney") }}</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.laovietbank.com.la/la/category/salary-payment-service.html"
                    >{{ $t("Footer.SalaryPayment") }}</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.laovietbank.com.la/la/category/dich-vu-mobile-bankplus.html"
                    >Mobile BankPlus</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 margin-t-5">
            <h4>{{ $t("Footer.Header3") }}</h4>
            <div class="text-muted margin-t-20">
              <ul class="list-unstyled footer-list">
                <li>
                  <a
                    href="https://www.laovietbank.com.la/la/category/payment-account.html"
                    >{{ $t("Footer.DialyAccountDepost") }}</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.laovietbank.com.la/la/category/savings-account.html"
                    >{{ $t("Footer.SavingDepost") }}</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.laovietbank.com.la/la/category/personal-loan-products.html"
                    >{{ $t("Footer.IndividualLoan") }}</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.laovietbank.com.la/la/category/card.html"
                    >{{ $t("Footer.ATMCard") }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 margin-t-5">
            <h4>{{ $t("Footer.Header4") }}</h4>
            <div class="text-muted margin-t-20">
              <ul class="list-unstyled footer-list">
                <li>
                  <a
                    href="https://www.laovietbank.com.la/la/category/payment-account-enterprise.html"
                    >{{ $t("Footer.BusinessAccountPayment") }}</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.laovietbank.com.la/la/category/business-savings.html"
                    >{{ $t("Footer.BusinessSaving") }}</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.laovietbank.com.la/la/category/loan-products.html"
                    >{{ $t("Footer.BusinessLoan") }}</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.laovietbank.com.la/la/category/international-payments.html"
                    >{{ $t("Footer.InternationalPayment") }}</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.laovietbank.com.la/la/category/guarantee-service.html"
                    >{{ $t("Footer.Doc") }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!--END FOOTER-->

    <!--START FOOTER ALTER-->
    <div class="footer-alt">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="float-left pull-none">
              <p class="copy-rights text-muted mb-3 mb-sm-0">
                2022 - {{ new Date().getFullYear() }} © Laovietbank
              </p>
            </div>
            <div class="float-right pull-none">
              <ul class="list-inline social m-0">
                <li class="list-inline-item">
                  <a href class="social-icon">
                    <i class="mdi mdi-facebook text-white"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href class="social-icon">
                    <i class="mdi mdi-twitter text-white"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href class="social-icon">
                    <i class="mdi mdi-linkedin text-white"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href class="social-icon">
                    <i class="mdi mdi-google-plus text-white"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href class="social-icon">
                    <i class="mdi mdi-dribbble text-white"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
    <!--START FOOTER ALTER-->
  </div>
</template>