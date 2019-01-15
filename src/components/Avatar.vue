<template>
<div class="avatar">
</div>
</template>

<script>
import {preloadImages} from '@/helpers'

export default {
  props: {
    isShowChart: {
      type: Boolean
    }
  },
  beforeCreate () {
    preloadImages([
      '/static/images/avatar.png',
      '/static/images/avatar2.png'
    ])
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="less">
.avatar {
  display: inline-block;
  font-size: 2rem;
  width: 10em;
  height: 10em;
  background-image: url(/static/images/avatar.png);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  // transition: background-image 0.1s ease-out;
  // -webkit-transition: background-image 0.1s ease-out;
  // -moz-transition: background-image 0.1s ease-out;
  // -o-transition: background-image 0.1s ease-out;

  &:hover {
    background-image: url(/static/images/avatar2.png);
  }
}
</style>
