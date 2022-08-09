<template>
  <div>
    <div class="py-4 mt-2 py-sm-0">
      <div class="account-home-btn d-none d-sm-block">
        <a href="/" class="text-white">
          <i class="mdi mdi-home h1"></i>
        </a>
      </div>
      <section class="height-100vh">
        <div class="display-table">
          <div class="display-table-cell">
            <div class="container">
              <div class="card-body">
                <div class="text-center mt-1">
                  <font-awesome-icon
                      icon="fa-solid fa-envelope-circle-check"
                      size="4x"
                      color="#0064b7"
                  />
                  <h2 class="font-weight-bold">
                    <span style="font-size: 23px"> ການຢືນຢັນຕົວຕົນ </span>
                  </h2>

                  <p class="text-muted pt-1">
                    ປ້ອນລະຫັດ OTP ທີ່ລະບົບໄດ້ສົ່ງເຂົາອີເມວ
                    ********manix@gmail.com
                  </p>
                  <b-row class="justify-content-md-center">
                    <b-col md="6" sm="12" lg="6">
                      <b-card class="shadow-lg">
                        <b-form-input class="mt-3"></b-form-input>
                        <b-button class="mt-4" href="#" variant="primary">
                          <b-icon-check-circle></b-icon-check-circle>
                          ດຳເນີນການຕໍ່
                        </b-button
                        >
                      </b-card>
                    </b-col>
                  </b-row>
                </div>
                <div class="pl-3 pb-3 pr-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
    name:"OTP",

};
</script>

<style>
</style>