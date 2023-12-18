<!-- eslint-disable max-len -->
<template>
  <LogInHeader/>
  <FilterSearch />
  <section class="Speach">
    <div class="container">
      <div class="Frame5">
        <div class="Card">
          <!--  -->
          <router-link to="/Chat" class="Listitem">
            <div class="container-msg">
              <div class="Newmessage">
                <div class="Badge">
                  <div class="Text">5</div>
                </div>
                <div class="Label">
                  <div class="">8:53 AM</div>
                </div>
              </div>
              <div class="LeftContent">
                <div class="Avatar">
                  <img class="Avatar" src="@/assets/imgs/40x40.png" alt="" />
                </div>
                <div class="ListitemText">
                  <div class="con-head">فلة للبيع دورين مفصولة (رقم العرض 10009)</div>
                  <div class="massage-short">مرحبا شريكي اريد ان اشارك بعض البيانات عن العقار</div>
                </div>
              </div>
            </div>
          </router-link>
          <!--  -->
          <!--  -->
          <router-link to="/Chat" class="Listitem">
            <div class="container-msg">
              <div class="Newmessage">
                <div class="Badge">
                  <div class="Text">5</div>
                </div>
                <div class="Label">
                  <div class="">8:53 AM</div>
                </div>
              </div>
              <div class="LeftContent">
                <div class="Avatar">
                  <img class="Avatar" src="@/assets/imgs/40x40.png" alt="" />
                </div>
                <div class="ListitemText">
                  <div class="con-head">فلة للبيع دورين مفصولة (رقم العرض 10009)</div>
                  <div class="massage-short">مرحبا شريكي اريد ان اشارك بعض البيانات عن العقار</div>
                </div>
              </div>
            </div>
        </router-link>
          <!--  -->
        </div>
      </div>
    </div>
  </section>
  <bottom-nav />
</template>

<script>
import LogInHeader from '@/components/LogInHeader.vue';
import BottomNav from '@/components/BottomNav.vue';
// import { createToaster } from '@meforma/vue-toaster';
import FilterSearch from '@/components/MainComponents/FilterSearch.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Converztions',
  components: {
    LogInHeader,
    BottomNav,
    FilterSearch,
  },
};
</script>
