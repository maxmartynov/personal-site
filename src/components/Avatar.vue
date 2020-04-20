<template>
<div class="avatar">
  <div class="image"></div>
</div>
</template>

<script>
import { preloadImages } from '@/helpers'

export default {
  beforeCreate () {
    preloadImages([
      require('@/assets/img/avatar.png')
    ])
  },
  data () {
    return {
    }
  }
}
</script>

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
</style>
