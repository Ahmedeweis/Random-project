<!-- eslint-disable vuejs-accessibility/alt-text -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
  <section class="bottom-chat">
    <div class="container">
      <a href="" class="sent-icone">
        <img src="@/assets/imgs/communication.png" class="nav-bar-img active-bottom-link" alt="">
      </a>
      <div class="cell">
        <textarea name="email" class="auto-expand-textarea" placeholder="اكتب رسالتك هنا ..."></textarea>
        <label for="profile-image-input" class="file-input-label">
          <input id="profile-image-input" type="file" name="profile_image" >   <!-- onchange="previewImage(this)" -->
          <span class="camera-icon">
              <img width="30px" src="../../assets/imgs/att.png" class="attach-icon">
          </span>
      </label>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'MessageInput',
};
</script>

<style>
</style>
