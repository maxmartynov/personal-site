<style scoped lang="less">
  @import url("~@/styles/_variables.less");

  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;

    .center-text {
      display: inline-block;
    }

    .copyright {
      float: right;
      padding-right: 1rem;
      font-size: 1.2rem;
    }
  }
</style>

<template>
  <div class="footer">
    <div class="center-text"></div>

    <div class="copyright row">
      © 2013-{{ year }} Maksim Martynov
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        year: new Date().getFullYear()
      }
    }
  }
</script>
