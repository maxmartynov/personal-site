<style scoped lang="less">
  @import url("~@/styles/_variables.less");

  .app-container {
    min-height: 100%;
    overflow: auto;
    position: relative;

    > .wrap {
      margin-top: -@app-header-margin-top;
      padding-top: @app-header-margin-top;
      position: relative;
    }
  }
</style>

<template>
  <div class="app-container container">
    <div class="wrap row">
      <app-header></app-header>
      <app-content></app-content>
    </div>

    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppHeader from '@/components/App.header.vue'
  import AppContent from '@/components/App.content.vue'
  import AppFooter from '@/components/App.footer.vue'

  export default {
    components: {
      AppHeader,
      AppContent,
      AppFooter
    },
    mounted () {
      this.$ga.page({
        page: '/',
        title: 'Home',
        location: window.location.href
      })
    }
  }
</script>
