<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable vuejs-accessibility/alt-text -->
<template>
  <section class="delete-head  m-t-20">
    <div class="container">
      <router-link to="/Requests">
        <img style="width: 30px" src="../../assets/imgs/XVector.svg">
      </router-link>

      <div class="m-r-20 justfy-c">
        <h3 class="" style="font-size:19px; color: #396FB5;"> طلب رقم {{ partnerId }}</h3>
      </div>
      <button id="shareButton" class="" style="background-color: transparent;">
        <img src="../../assets/imgs/shareing.png" alt="Share" style="width: 30px">
      </button>
    </div>
  </section>
  <section class="slider-sec">
    <div class="container">
      <div class="slider-container">
        <div class="slider">
          <div class="slide"><img src="../../assets/imgs/1.png" alt="Image 1" class="slider-img"></div>
          <div class="slide"><img src="../../assets/imgs/2.png" alt="Image 2" class="slider-img"></div>
          <div class="slide"><img src="../../assets/imgs/3.png" alt="Image 3" class="slider-img"></div>
          <div class="slide"><img src="../../assets/imgs/4.png" alt="Image 4" class="slider-img"></div>
          <div class="slide"><img src="../../assets/imgs/5.png" alt="Image 5" class="slider-img"></div>
        </div>
        <button class="prev"><img src="">❯</button>
        <button class="next"><img src="">❮</button>
        <div class="slider-nav"></div>
      </div>
    </div>
  </section>
  <section class="Request-info">
    <div class="container">

      <div class="info-header">
        <h2 class="info-head">{{ property_type }}</h2>

        <!-- <div class="filed-data">
                    <img src="../assets/imgs/to-do-list.png" class="icone-resize">
                    <h2 class="data-lable"> &nbsp;رقم الطلب &nbsp;:&nbsp;</h2>
                    <h3 class="data-value">10009&nbsp;</h3>
                    <p class="Request-num min-Request-num">(استثمار)</p>
                </div> -->
        <div class="Request-box">
          <img src="../../assets/imgs/to-do-list.png" class="icone-resize" style="margin-left: 5px;">
          <p class="Request-label">رقم الطلب : </p>
          <p class="Request-num">{{ partnerId }}</p>
        </div>

      </div>

      <div class="owner-name-header">
        <div class="owner-name-head">
          <div class="owner-name"> سلطان العتيبي </div>
          <!-- <div class="owner-prop"> ( وسيط عقاري )</div> -->
        </div>
        <div class="stars">
          <img src="../../assets/imgs/full-star.png" class="star-photo">
          <img src="../../assets/imgs/full-star.png" class="star-photo">
          <img src="../../assets/imgs/full-star.png" class="star-photo">
          <img src="../../assets/imgs/full-star.png" class="star-photo">
          <img src="../../assets/imgs/empaty-star.png" class="star-photo">
        </div>
      </div>

      <div class="client-num">
        <div class="client-box">
          <img src="../../assets/imgs/AvatarPurbile.svg" class="client-image">
          <img src="../../assets/imgs/AvatarPurbile.svg" class="client-image">
          <img src="../../assets/imgs/AvatarPurbile.svg" class="client-image">
          <img src="../../assets/imgs/Avatar.svg" class="client-image">
        </div>
      </div>
    </div>
  </section>
  <section class="details-sections">
    <div class="container">
      <header class="data-head">
        <div class="link" @click="change()" @keydown="handleKeyDown" :class="{ 'link-active': RenderAd() }">تفاصيل الشراكة
        </div>
        <div class="link" @click="change2()" @keydown="handleKeyDown" :class="{ 'link-active': RenderDetails() }">تفاصيل
          العقار</div>
      </header>

      <div class="data-catcher">
        <div class="aqar-details" v-if="RenderDetails()">

          <div class="data-filed">
            <div class="filed-flex">
              <img src="../../assets/imgs/location.png" class="icone-resize marg-l-5">
              <h2 class="data-lable">المدينة</h2>
            </div>
            <!-- Check if partner and city are defined before accessing name_ar -->
            <h3 class="data-value">{{ partner && partner.city && partner.city.name_ar }}</h3>
          </div>

          <div class="data-filed">
            <div class="filed-flex">
              <img src="../../assets/imgs/location.png" class="icone-resize marg-l-5">
              <h2 class="data-lable">الحي</h2>
            </div>
            <h3 class="data-value">{{ partner.neighborhood_name }}</h3>
          </div>

          <div class="data-filed">
            <div class="filed-flex">
              <img src="../../assets/imgs/house.png" class="icone-resize marg-l-5">
              <h2 class="data-lable">النوع</h2>
            </div>
            <h3 class="data-value">{{ property_type }}</h3>
          </div>

          <div class="data-filed">
            <div class="filed-flex">
              <img src="../../assets/imgs/sign.png" class="icone-resize marg-l-5">
              <h2 class="data-lable">رقم المخطط</h2>
            </div>
            <h3 class="data-value">{{ partner.plan_number }}</h3>
          </div>

          <div class="data-filed">
            <div class="filed-flex">
              <img src="../../assets/imgs/tag.png" class="icone-resize marg-l-5">
              <h2 class="data-lable">رقم القطعة</h2>
            </div>
            <h3 class="data-value">{{ partner.property_number }}</h3>
          </div>

          <div class="data-filed">
            <div class="filed-flex">
              <img src="../../assets/imgs/work-tools.png" class="icone-resize marg-l-5">
              <h2 class="data-lable">عرض الشارع</h2>
            </div>
            <h3 class="data-value">7 م</h3>
          </div>

          <div class="data-filed">
            <div class="filed-flex">
              <img src="../../assets/imgs/area.png" class="icone-resize marg-l-5">
              <h2 class="data-lable">المساحة</h2>
            </div>
            <h3 class="data-value">{{ partner.property_area }} متر مربع</h3>
          </div>

          <div class="data-filed">
            <div class="filed-flex">
              <img src="../../assets/imgs/cubeI.png" class="icone-resize marg-l-5">
              <h2 class="data-lable"> الواجهة</h2>
            </div>
            <h3 class="data-value">شرق</h3>
          </div>

          <div class="data-filed">
            <div class="filed-flex">
              <img src="../../assets/imgs/hourglass.png" class="icone-resize marg-l-5">
              <h2 class="data-lable">عمر العقار</h2>
            </div>
            <h3 class="data-value">1 سنة</h3>
          </div>

          <div class="data-filed">
            <div class="filed-flex">
              <img src="../../assets/imgs/hallway.png" class="icone-resize marg-l-5">
              <h2 class="data-lable">عدد الوحدات</h2>
            </div>
            <h3 class="data-value"> 5 وحدات</h3>
          </div>
          <div class="data-filed">
            <div class="filed-flex">
              <img src="../../assets/imgs/building.png" class="icone-resize marg-l-5">
              <h2 class="data-lable">عدد الادوار</h2>
            </div>
            <h3 class="data-value"> 3 دور</h3>
          </div>

          <div class="data-filed">
            <div class="filed-flex">
              <img src="../../assets/imgs/apartment.png" class="icone-resize marg-l-5">
              <h2 class="data-lable">عدد الشقق</h2>
            </div>
            <h3 class="data-value"> 10 شقق</h3>
          </div>

          <div class="data-filed">
            <div class="filed-flex">
              <img src="../../assets/imgs/store.png" class="icone-resize marg-l-5">
              <h2 class="data-lable">عدد المحلات</h2>
            </div>
            <h3 class="data-value"> 5 محلات </h3>
          </div>

          <div class="data-filed">
            <div class="filed-flex">
              <img src="../../assets/imgs/workspace.png" class="icone-resize marg-l-5">
              <h2 class="data-lable">عدد المكاتب</h2>
            </div>
            <h3 class="data-value"> 7 مكاتب</h3>
          </div>

          <div class="data-filed">
            <h2 class="data-lable">الموقع علي الخريطة</h2>
            <img src="../../assets/imgs/1000x500.png" class="map-photo">
          </div>

        </div>
        <div class="ad-details" v-if="RenderAd()">
          <div class="data-filed">
            <div class="filed-flex">
              <img src="../../assets/imgs/calendar.png" class="icone-resize marg-l-5">
              <h2 class="data-lable">تاريخ إضافة الطلب</h2>
            </div>
            <h3 class="data-value">2022/11/22</h3>
          </div>
          <!--
                <div class="data-filed">
                    <h2 class="data-lable">الغرض</h2>
                    <h3 class="data-value">سكني</h3>
                </div> -->

          <div class="data-filed">
            <div class="filed-flex">
              <img src="../../assets/imgs/money.png" class="icone-resize marg-l-5">
              <h2 class="data-lable">مبلغ الشراكة </h2>
              <div class="talk"> ( لكل شريك)</div>
            </div>
            <div class="data-value">
              <h3 class="value">200,000 ريال</h3>
              <div class="talk">قابل للتفاوض</div>
            </div>
          </div>

          <div class="general-chat-handle">
            <div class="filed-flex">
              <img src="../../assets/imgs/team.png" class="icone-resize marg-l-5">
              <h2 class="data-lable">عدد الشركاء الحاليين</h2>
              <div class="talk">3/4</div>
            </div>
            <!-- <a href="payment.html" class="nav-link" style="text-align: center;">
                        <img src="../assets/imgs/chat-box.png" class="" width="50px">
                        <h3 class="bottom-nav-word" style="color: #396FB5;"> فتح الدردشة</h3>
                    </a> -->
          </div>
          <!--  -->

          <!-- 0 time line -->
          <section class="bullets  m-t-20">
            <div class="container">
              <!-- 0 head-box -->
              <div class="head-box">
                <div class="head-box-flex">
                  <div class="circle circle-active ">
                    <p>1</p>
                  </div>
                  <div class="head-titlte ">
                    انتظار الموافقة علي الشركاء
                  </div>
                </div>
                <routerLink to="/AcceptList" class="small-btn head-box-flex">
                  قائمة الانتظار <p>&nbsp;(+10)</p>
                </routerLink>

              </div>
              <!-- 1 head-box -->
              <div class="line"></div>

              <!-- 0 head-box -->
              <div class="head-box">
                <div class="head-box-flex">
                  <div class="circle circle-active ">
                    <p>2</p>
                  </div>
                  <div class="head-titlte ">
                    دفع رسوم الخدمة
                  </div>
                </div>
                <routerLink to="/PaymentGetWays" class="small-btn head-box-flex">ادفع</routerLink>
              </div>
              <!-- 1 head-box -->
              <div class="line"></div>

              <!-- 0 head-box -->
              <div class="head-box">
                <div class="head-box-flex">
                  <div class="circle circle-active ">
                    <p>3</p>
                  </div>
                  <div class="head-titlte ">
                    انتظار دفع الشركاء
                  </div>
                </div>
                <routerLink to="/PaymentList" class="small-btn head-box-flex">
                  تفاصيل الدفع<p>&nbsp;(2/5)</p>
                </routerLink>
              </div>
              <!-- 1 head-box -->
              <div class="line "></div>
              <!-- 0 head-box -->
              <div class="head-box ">
                <div class="head-box-flex">
                  <div class="circle circle-active ">
                    <p class="">4</p>
                  </div>
                  <div class="head-titlte ">
                    تم الانضمام
                  </div>
                </div>
                <router-link to="/Converztions" class="small-btn head-box-flex ">
                  الدخول
                  للمحادثة
                </router-link>

              </div>
              <!-- 1 head-box -->

            </div>
          </section>

          <!-- 1 time line -->

        </div>

      </div>

    </div>
  </section>

  <!-- <div class="container">
<div style="display: flex; justify-content: space-between; padding:30px 0;">
    <a class="small-btn" href="succes.html">حفظ</a>
    <a class="small-btn" href="land.html"style="background-color:transparent; color:var(--main-color); border:none;">رجوع</a>
</div>
</div> -->

  <div class="container">
    <div style="display: flex; justify-content: space-between; padding:30px 0;">
      <a class="small-btn" href="myrequests.html">حسنا</a>
      <!-- <a class="small-btn" href="land.html"style="background-color:transparent; color:var(--main-color); border:none;">رجوع</a> -->
    </div>
  </div>
</template>
<script>
import { BASE_URL } from '@/api-config';
import axios from 'axios';

export default {
  name: 'FullRequest',
  data() {
    return {
      Ad: true,
      Details: false,
      access_token: '',
      // partnerId: null,
      partnerId: 'f341bc55-55de-4bec-9ecd-d70c78e4de5d',
      partner: {},
      property_type: 'عمارة شقق مفرزة',
    };
  },
  created() {
    // Access the partner_id parameter from the route
    const partnerId = this.$route.params.id;

    // Store the partnerId in your component's data
    this.partnerId = partnerId;
  },
  mounted() {
    this.change2();
    this.change();
    this.access_token = localStorage.getItem('access_token');
    this.getDataById();
  },
  computed: {
    activeClass() {
      return {
        'link-active': this.RenderAd(), // Apply the class if RenderAd is true
      };
    },
  },
  methods: {
    change() {
      if (this.Ad === false) {
        this.Ad = true;
        this.Details = false;
      }
    },
    change2() {
      if (this.Details === false) {
        this.Ad = false;
        this.Details = true;
      }
    },
    handleKeyDown(event) {
      // Check if the pressed key is 'Enter' (key code 13)
      if (event.keyCode === 13) {
        // Call the corresponding method based on the active tab or perform any other action
        if (this.Ad) {
          this.change();
        } else {
          this.change2();
        }
      }
    },
    RenderAd() {
      return this.Ad;
    },
    RenderDetails() {
      return this.Details;
    },

    getDataById() {
      const headers = {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${this.access_token}`,
      };
      axios.get(`${BASE_URL}partners/${this.partnerId}`, { headers })
        .then((response) => {
          this.partner = response.data.data;
          console.log(this.partner);
        })
        .catch((error) => {
          console.error('Error fetching partners:', error);
        });
    },
  },
};
</script>
