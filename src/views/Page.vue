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
import AppHeader from './Page.header.vue'
import AppContent from './Page.content.vue'
import AppFooter from './Page.footer.vue'

export default {
  components: {
    AppHeader,
    AppContent,
    AppFooter
  },
  mounted () {
    this.trackRoute()
  },
  watch: {
    '$route.name' (name) {
      this.trackRoute()
    }
  },
  methods: {
    trackRoute () {
      this.$gtag.pageview({
        page_location: window.location.href,
        page_path: this.$route.path,
        page_title: this.$route.name
      })
    }
  }
}
</script>

<style scoped lang="less">
@import url("~@/styles/_variables.less");

.app-container {
  height: 100vh;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  > .wrap {
    overflow: hidden;
    position: relative;
    height: calc(100% - @footer__height);
  }
}
</style>
