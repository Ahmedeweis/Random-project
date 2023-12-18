<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable max-len -->
<template>
  <section class="delete-head  m-t-20">
    <div class="container">
      <Button @click="goBack" class="b-t"><img style="width: 30px" src="../../assets/imgs/XVector.svg" alt=""></Button>
      <div class="m-r-20 justfy-c">
        <h3 class="" style="font-size:25px; color: #396FB5;"> تفاصيل دفع طلب رقم (10009) </h3>
      </div>
      <!-- <button id="shareButton" class="" style="background-color: transparent;">
            <img src="../../assets/imgs/shareing.png" alt="Share" style="width: 30px">
        </button> -->
    </div>
  </section>

  <section>
    <div class="container">
      <div class="group">
        <div class="group-head">
          <img src="../../assets/imgs/cashless-payment.png" class=" group-head-img" width="50px" alt="">
          <h1 class="group-head-h">انتظار الدفع (1)</h1>
        </div>
        <!--  -->
        <div class="member">
          <div class="member-flex-two">
            <a class="delete-sec profile member-prof">
              <div class="min-req-imge-delete">
                <img src="../../assets/imgs/profil-pic.jpg" class="icone-resize user-photo " alt="">
              </div>
              <div class="max-con">وليد حسن</div>
            </a>
            <div class="accept-cointener">
              <button class="small-btn accept-btn accept-btn-alt">حذف العرض</button>
              <a href="offer-detailes.html"><img src="../../assets/imgs/exclamation-mark.png" width="25px" alt=""></a>
            </div>
          </div>
          <div class="data-filed member-data-filed">
            <h2 class="data-lable resize-margin"> &nbsp; تاريخ العرض &nbsp;:&nbsp;</h2>
            <h3 class="data-value resize-margin member-h3-margin">2023/8/5</h3>
          </div>
        </div>
        <!--  -->

      </div>

      <!-- 1 group -->
    </div>
  </section>

  <section>
    <div class="container">
      <div class="group">
        <div class="group-head">
          <img src="../../assets/imgs/mobile-payment.png" class=" group-head-img" width="50px" alt="">
          <h1 class="group-head-h"> تم الدفع (2)</h1>
        </div>
        <!--  -->
        <div class="member">
          <div class="member-flex-two">
            <a class="delete-sec profile member-prof">
              <div class="min-req-imge-delete">
                <img src="../../assets/imgs/profil-pic.jpg" class="icone-resize user-photo " alt="">
              </div>
              <div class="max-con">علي</div>
            </a>
            <div class="accept-cointener">

              <button class="small-btn accept-btn "> تم الدفع</button>
              <a href="offer-detailes.html"><img src="../../assets/imgs/exclamation-mark.png" width="25px" alt=""></a>
            </div>
          </div>
          <div class="data-filed member-data-filed">
            <h2 class="data-lable resize-margin"> &nbsp; تاريخ العرض &nbsp;:&nbsp;</h2>
            <h3 class="data-value resize-margin member-h3-margin">2023/8/5</h3>
          </div>
        </div>
        <!--  -->

        <!--  -->
        <div class="member">
          <div class="member-flex-two">
            <a class="delete-sec profile member-prof">
              <div class="min-req-imge-delete">
                <img src="../../assets/imgs/profil-pic.jpg" class="icone-resize user-photo " alt="">
              </div>
              <div class="max-con">حسين</div>
            </a>
            <div class="accept-cointener">

              <button class="small-btn accept-btn "> تم الدفع</button>
              <a href="offer-detailes.html"><img src="../../assets/imgs/exclamation-mark.png" width="25px" alt=""></a>
            </div>
          </div>
          <div class="data-filed member-data-filed">
            <h2 class="data-lable resize-margin"> &nbsp; تاريخ العرض &nbsp;:&nbsp;</h2>
            <h3 class="data-value resize-margin member-h3-margin">2023/8/5</h3>
          </div>
        </div>
        <!--  -->

      </div>

      <!-- 1 group -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'PaymentList',
  methods: {
    goBack() {
      // Use Vue Router to go back
      this.$router.go(-1);
    },
  },
};
</script>
