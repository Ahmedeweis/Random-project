<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable max-len -->
<template>
  <ChatHeader/>
<section class="talker-body">
    <div class="container">
        <!--  -->
        <div class="message-holder">
            <div class="talker-img-div">
                <img src="../../assets/imgs/robot.png" class="talker-img" width="50px" alt="robot">
            </div>
            <div class="talker-sec">
                <div class="talker-info">
                    <h3 class="talker-name">النظام</h3>
                    <span class="message-time">11:30pm</span>
                </div>
                <div class="talker-message">
                    <p class="message" style="text-align: start;">
                        كل مشروك مبروك .. !
                        مبارك عليكم الشراكة
                        <br>
                        اذكركم اذا اتفقت الاراء يوجد لدينا قسم خاص
                        بالوسطاء العقاريين داخل الموقع
                        ل انهاء وتوثيق الشراكة
                        من خلال الرابط
                        <br>
                        <a href="main.html" style="font-weight: bold; font-size: 20px; color: #396FB5;">قسم الوسطاء العقاريين</a>
                    </p>
                </div>
            </div>
        </div>
        <!--  -->

        <!--  -->
        <div class="message-holder">
            <div class="talker-img-div">
                <img src="../../assets/imgs/profile-pic-II.jpg" class="talker-img icone-resize" alt="damage">
            </div>
            <div class="talker-sec">
                <div class="talker-info">
                    <h3 class="talker-name">أمجد سليم</h3>
                    <span class="message-time">11:31pm</span>
                </div>
                <div class="talker-message">
                    <p class="message">مرحبا
                    </p>
                </div>
            </div>
        </div>
        <!--  -->
        <!--  -->
        <div class="message-holder" style="align-self: flex-end; flex-direction: row-reverse;">
            <div class="talker-img-div">
                <img src="@/assets/imgs/profil-pic.jpg" class="talker-img icone-resize" alt="">
            </div>
            <div class="talker-sec">
                <div class="talker-info" style="align-self: flex-end;flex-direction: row-reverse;">
                    <h3 class="talker-name">تميم زهير </h3>
                    <span class="message-time">11:32pm</span>
                </div>
                <div class="talker-message">
                    <p class="message">مرحبا
                        شريكي سعيد بالعمل معك من اين نبدأ
                    </p>
                </div>
            </div>
        </div>
        <!--  -->
        <!--  -->
        <div class="message-holder">

            <div class="talker-img-div">
                <img src="@/assets/imgs/profile-pic-II.jpg" class="talker-img icone-resize" alt="">
            </div>
            <div class="talker-sec">
                <div class="talker-info">
                    <h3 class="talker-name">أمجد سليم</h3>
                    <span class="message-time">1:31pm</span>
                </div>

                <div class="talker-message">
                  <p class="message">
                    هذه الصورة لا تعكس كامل الصورة للعقار
                </p>
                    <p class="message">
                        <img src="@/assets/imgs/msan.jpg" style="width: 100%;" alt="">
                    </p>
                </div>
            </div>
        </div>
        <!--  -->
        <!--  -->
        <div class="message-holder" style="align-self: flex-end; flex-direction: row-reverse;">
            <div class="talker-img-div">
                <img src="@/assets/imgs/profil-pic.jpg" class="talker-img icone-resize" alt="">
            </div>
            <div class="talker-sec">
                <div class="talker-info" style="align-self: flex-end;flex-direction: row-reverse;">
                    <h3 class="talker-name">تميم زهير </h3>
                    <span class="message-time">3:00pm</span>
                </div>
                <div class="talker-message">
                    <p class="message">
                        لا هذه صورة قديمة
                        س ارسل لك صورة حديثة للعقار
                    </p>
                </div>
            </div>
        </div>
        <!--  -->
        <!--  -->
        <div class="message-holder" style="align-self: flex-end; flex-direction: row-reverse;">
            <div class="talker-img-div">
                <img src="@/assets/imgs/profil-pic.jpg" class="talker-img icone-resize" alt="" >
            </div>
            <div class="talker-sec">
                <div class="talker-info" style="align-self: flex-end;flex-direction: row-reverse;">
                    <h3 class="talker-name">تميم زهير </h3>
                    <span class="message-time">3:33pm</span>
                </div>
                <div class="talker-message">
                    <p class="message">
                        <img src="@/assets/imgs/building.jpg" style="width: 100%;" alt="">
                    </p>
                </div>
            </div>
        </div>
        <!--  -->
    </div>
</section>
<MessageInput />
</template>

<script>
import MessageInput from './MessageInputView.vue';
import ChatHeader from './ChatHeaderView.vue';

export default {
  data() {
    return {
      name: '',
      access_token: '',
      avatar_url: '',
    };
  },
  mounted() {
    const user = localStorage.getItem('user');
    this.access_token = localStorage.getItem('access_token');
    this.name = JSON.parse(user).name;
    // eslint-disable-next-line max-len
    this.avatar_url = JSON.parse(user).avatar_url;
  },
  components: {
    MessageInput,
    ChatHeader,
  },
};
</script>
