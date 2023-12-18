<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable max-len -->
<template>
  <section class="delete-head refixed">
    <div class="container">
      <router-link to="/Converztions"><img style="width: 30px" src="../../assets/imgs/right-arrow.png" alt=""></router-link>
      <div class="m-r-20 justfy-c">
        <h3 class="" style="font-size: 1.5em; color: #396FB5;">محادثة رقم (10009)</h3>
      </div>
      <div style="position: relative;">
        <img @click="toggleHiddenDiv" src="../../assets/imgs/ellipsis.png" alt="Share" class="toggle-chat">
        <div v-if="isHidden" class="cheet">
          <div>
            <a href="converztions.html" class="hiddin-link"><img style="width: 30px" src="../../assets/imgs/flag.png"
                alt="">ابلاغ</a>
          </div>
          <div>
            <router-link to="/Converztions" class="hiddin-link"><img style="width: 30px" src="../../assets/imgs/logout.png" alt="">مغادرة</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ChatHeader',
  data() {
    return {
      isHidden: false, // Initialize as visible
    };
  },
  methods: {
    toggleHiddenDiv() {
      this.isHidden = !this.isHidden; // Toggle the visibility
    },
  },
};
</script>
