<template>
<div class="avatar">
  <div class="image"></div>
</div>
</template>

<style lang="less">
.avatar {
  display: inline-block;
  font-size: 2rem;
  width: 10em;
  height: 10em;

  .image {
    width: 100%;
    height: 100%;
    background-image: url(~@/assets/img/avatar.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
}

@media (max-width: 600px) {
  .avatar .image {
    background-image: url(~@/assets/img/avatar-xs.png);
  }
}
</style>
