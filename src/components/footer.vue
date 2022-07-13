<script>
/**
 * Footer component
 */
export default {
  name: "Footer",
};
</script>

<template>
  <div>
    <!--START FOOTER-->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 margin-t-20">
            <h4>ຂໍ້ມູນຂ່າວສານ</h4>
            <div class="text-muted margin-t-20">
              <ul class="list-unstyled footer-list">
                <li>
                  <a href="#">ລະບຽບ & ນະໂຍບາຍຂອງທະນາຄານ</a>
                </li>
                <li>
                  <a href="#">ກ່ຽວກັບພວກເຮົາ</a>
                </li>
                <li>
                  <a href="#">ສະໝັກວຽກກັບ ທລວ</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 margin-t-20">
            <h4>ການບໍລິການ</h4>
            <div class="text-muted margin-t-20">
              <ul class="list-unstyled footer-list">
                <li>
                  <a href="#">ສ້າງແບບຟອມອອນໄລ</a>
                </li>
                <li>
                  <a href="#">LaoVietBank QR Pay</a>
                </li>
                <li>
                  <a href="#">ການ​ບໍ​ລິ​ການ LaoVietBank Digital Banking</a>
                </li>
                <li>
                  <a href="#"
                    >ບໍລິການໂອນເງິນລະຫວ່າງທະນາຄານຜ່ານ Mobile Banking</a
                  >
                </li>
                <li>
                  <a href="#">ບໍລິການຊຳລະໃບບິນ</a>
                </li>
                <li>
                  <a href="#">ບໍລິການ LSMS</a>
                </li>
                <li>
                  <a href="#">ບໍ​ລິ​ການ TOPUP</a>
                </li>
                <li>
                  <a href="#">ບໍລິການແລກປ່ຽນເງິນຕາ</a>
                </li>
                <li>
                  <a href="#">ບໍ​ລິ​ການ​​ຊຳ​ລະ​ເງິນ​ເດືອນ</a>
                </li>
                <li>
                  <a href="#">Mobile BankPlus</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 margin-t-20">
            <h4>ລູກຄ້າສ່ວນບຸກຄົນ</h4>
            <div class="text-muted margin-t-20">
              <ul class="list-unstyled footer-list">
                <li>
                  <a href="#">ເງິນຝາກ ກະເສລາຍວັນ</a>
                </li>
                <li>
                  <a href="#">ບັນຊີເງິນຝາກປະຢັດ</a>
                </li>
                <li>
                  <a href="#">ຜະລິດຕະພັນການກູ້ຢືມເງິນສ່ວນບຸກຄົນ</a>
                </li>
                <li>
                  <a href="#">ຜະລິດຕະພັນບັດ ATM</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 margin-t-20">
            <h4>ລູກຄ້າວິສະຫະກີດ</h4>
            <div class="text-muted margin-t-20">
              <ul class="list-unstyled footer-list">
                <li>
                  <a href="#">ບັນ​ຊີຊຳລະວິສາຫະກິດ</a>
                </li>
                <li>
                  <a href="#">ບັນຊີເງິນຝາກປະຢັດ</a>
                </li>
                <li>
                  <a href="#">ຜະລິດຕະພັນສິນ​ເຊື່​ອ</a>
                </li>
                <li>
                  <a href="#">ຊຳ​ລະ​ສະ​ສາ​ງ​ສາ​ກົນ</a>
                </li>
                <li>
                  <a href="#">ບໍລິການໜັງ​ສື​ຄ້ຳ​ປະ​ກັນ</a>
                </li>
              </ul>
            </div>
          </div>

          <!-- <div class="col-lg-3 margin-t-20">
            <h4>Support</h4>
            <div class="text-muted margin-t-20">
              <ul class="list-unstyled footer-list">
                <li>
                  <a href>FAQ</a>
                </li>
                <li>
                  <a href>Contact</a>
                </li>
                <li>
                  <a href>Disscusion</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 margin-t-20">
            <h4>Subscribe</h4>
            <div class="text-muted margin-t-20">
              <p>
                In an ideal world this text wouldn’t exist, a client would
                acknowledge the importance of having web copy before the design
                starts.
              </p>
            </div>
            <form class="form subscribe">
              <input placeholder="Email" class="form-control" required />
              <a href="#" class="submit">
                <i class="pe-7s-paper-plane"></i>
              </a>
            </form>
          </div> -->
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