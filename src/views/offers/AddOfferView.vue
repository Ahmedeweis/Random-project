<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable max-len -->
<template>
  <section class="back-head  m-t-20">
    <div class="container">
      <div>
        <div @click="goBack" style="cursor: pointer;"><img class="icone-resize" src="../../assets/imgs/right-arrow.png" alt=""></div>
      </div>
      <div class="m-r-20">
        <h3>اضافة عرض شراكة </h3>
      </div>
    </div>
  </section>

  <h1 style="text-align: center;">
    نموذج عرض شراكة
  </h1>
  <section class="rod">
    <div class="container">
      <h2> هل مواصفات وموقع العقار مناسب ام لا</h2>
      <form class="roleForm">
        <label class="radio-lab">
          <input type="radio" name="aqar-type" value="1" class="radio-circle" v-model="iSpecificationsOK">
          نعم
        </label>
        <label class="radio-lab">
          <input type="radio" name="aqar-type" value="0" class="radio-circle" v-model="iSpecificationsOK" >
          لا
        </label>
      </form>

      <!-- Radio buttons for yes and no -->
      <h2>هل مبلغ الشراكة مناسب أم لا</h2>
      <form class="roleForm">
        <label class="radio-lab">
          <input type="radio" name="aqar-type" value="1" class="radio-circle" v-model="isAmountofMoneyOK">
          نعم
        </label>
        <label class="radio-lab">
          <input type="radio" name="aqar-type" value="0" class="radio-circle" v-model="isAmountofMoneyOK">
          لا
        </label>
      </form>
    </div>
  </section>

  <section v-if="isAmountofMoneyOK === '0' ">
    <div class="container">
      <div class="cell">
        <label for="myRange2" class="Renge-style">
          اختر المبلغ الذي تستطيع دفعه: <p style="margin-right: 5px;">{{ suggestedAmount }}</p>
          <p style="font-weight: bold;">&nbsp;&nbsp;صافي (يشمل الضريبة)</p>
        </label>
        <input type="range" min="100000" max="5000000" step="50000" class="styled-range" v-model="suggestedAmount">
      </div>
      <div class="Reng-flex">
        <div>100,000&nbsp;ريال</div>
        <div class="paddI"></div>
        <div class="paddI"></div>
        <div class="paddI"></div>
        <div class="padd"></div>
        <div class="padd">5,000,000&nbsp;ريال</div>
      </div>

    </div>
  </section>

  <section>
    <div class="container">
      <div style="display: flex; justify-content: space-between; padding:30px 0;">
        <button class="small-btn" @click="submitOffer">قدم عرض شراكة</button>
        <a @click="goBack" class="small-btn" style="background-color:transparent; color:var(--main-color); border:none; font-weight:bold;">رجوع</a>
      </div>
    </div>
  </section>
</template>

<script>
// import { BASE_URL } from '@/api-config';
import axios from 'axios';

export default {
  name: 'AddOffer',
  data() {
    return {
      suggestedAmount: 100000,
      iSpecificationsOK: '',
      isAmountofMoneyOK: '',
      commercial: 'ec9465e5-0c7e-4044-2df0-08dbfcecc3b0',
      real_estate_yes: 'ec9465e5-0c7e-4044-2df0-08dbfcecc3b0',
      real_estate_no: 'ec9465e5-0c7e-4044-2df0-08dbfcecc3b0',
      token: '',
      userId: 'ddfbfcd2-d3fc-420a-89d4-cac2f81a26ad',
    };
  },
  mounted() {
    this.token = localStorage.getItem('token');
    if (!this.token) {
    // Handle the case when the token is not available
      console.error('Token is not available.');
      // You might want to redirect the user to the login page or take appropriate action.
    }
    // this.userId = localStorage.getItem('userId');
  },
  methods: {
    goBack() {
    // Use Vue Router to go back
      this.$router.go(-1);
    },
    submitOffer() {
      const payload = {
        requester: 'ddfbfcd2-d3fc-420a-89d4-cac2f81a26ad',
        iSpecificationsOK: this.iSpecificationsOK === '1' ? 1 : 0,
        isAmountofMoneyOK: this.isAmountofMoneyOK === '1' ? 1 : 0,
        suggestedAmount: this.suggestedAmount,
        commercial: '',
        real_estate_yes: '',
        real_estate_no: 'ec9465e5-0c7e-4044-2df0-08dbfcecc3b0',
        Reques: 'string',
      };

      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      };

      axios.post('http://abdo6755-001-site1.anytempurl.com/Home/AddRequest_Real_Estate_No', payload, { headers })
        .then((response) => {
          console.log('Form saved', response.data);

          // Additional logging for troubleshooting
          console.log('Response object:', response);

          // Access response.data here
          if (response && response.data) {
          // Access response.data here
          } else {
            console.error('response or response.data is undefined.');
          }
        })
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Error status:', error.response.status);
            console.error('Error data:', error.response.data);
          } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error:', error.message);
          }
        });
    },
  },
};
</script>
