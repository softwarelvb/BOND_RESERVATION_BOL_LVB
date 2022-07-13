<script>
/**
 * Contact component
 */
export default {
  name: "Contact",
};
</script>

<template>
  <!-- CONTACT FORM START-->
  <section class="section" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <h1 class="section-title text-center">ຕິດຕໍ່ທະນາຄານ</h1>
          <div class="section-title-border margin-t-20"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="mt-4 pt-4">
            <!-- <p class="mt-4">
              <span class="h5">Office Address 1:</span>
              <br />
              <span class="text-muted d-block mt-2">4461 Cedar Street Moro, AR 72368</span>
            </p> -->
            <p class="mt-1">
              <span class="h5">
                <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
                  />
                </svg>
                ສະຖານທີ່ຕັ້ງທະນາຄານ:</span
              >
              <br />
              <span class="text-muted d-block mt-2">
                44 ຖະໜົນລ້ານຊ້າງ, ເມືອງ ຈັນທະບູລີ, ນະຄອນຫຼວງວຽງຈັນ
                <br />New Orleans, LA 70171
              </span>
            </p>
            <p class="mt-4">
              <span class="h5">
                <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                  />
                </svg>
                ຂໍ້ມູນຕີດຕໍ່:</span
              >
              <br />
              <span class="text-muted d-block mt-2">
                ໂທຣ/whatsApp: +856 20 52220222 <br />
                Hotline: 1440 ext 888
                <br />Website: www.laovietbank.com.la <br />
                Fanpage: facebook.com/laovietbank
              </span>
            </p>
            <p class="mt-4">
              <span class="h5">
                <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"
                  />
                </svg>
                ເວລາເປີດ-ປິດ ການບໍລິການ:</span
              >
              <br />
              <span class="text-muted d-block mt-2">8:30AM To 16:00PM</span>
            </p>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="custom-form mt-4 pt-4">
            <div id="message"></div>
            <form
              method="post"
              action="php/contact.php"
              name="contact-form"
              id="contact-form"
            >
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group mt-2">
                    <input
                      name="name"
                      id="name"
                      type="text"
                      class="form-control"
                      placeholder="ຊື່*"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group mt-2">
                    <input
                      name="email"
                      id="email"
                      type="email"
                      class="form-control"
                      placeholder="ອີເມວ*"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input
                      type="text"
                      class="form-control"
                      id="subject"
                      placeholder="ຫົວຂໍ້.."
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <textarea
                      name="comments"
                      id="comments"
                      rows="4"
                      class="form-control"
                      placeholder="ລາຍລະອຽດ..."
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 text-right">
                  <input
                    type="submit"
                    id="submit"
                    name="send"
                    class="submitBnt btn btn-custom"
                    value="ສົ່ງຂໍ້ຄວາມ"
                  />
                  <div id="simple-msg"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- CONTACT FORM END-->
</template>