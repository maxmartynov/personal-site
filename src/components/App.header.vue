<style scoped lang="less">
  @import url("../styles/_variables.less");

  /* Larger than mobile */
  @media (max-width: 400px) {
    .header {
      margin-top: @app-header-margin-top * 1.5 !important;
    }
  }

  .header {
    margin-top: @app-header-margin-top;
    position: relative;

    .logo {
      margin: 0;
      font-weight: bold;
      font-family: 'Open Sans', sans-serif;
      letter-spacing: 1px;
      font-size: 1.8em;
    }

    .sub-logo {
      margin: 0;
      font-size: 1.1rem;
      line-height: 1.1rem;
      font-family: 'Arimo', sans-serif;
      color: #525252;
      letter-spacing: normal;
      margin-left: 1px;
    }

    .locale-buttons {
      position: absolute;
      right: 0;
      top: 0.1em;
      padding: 0.5em 0 0 0;

      a {
        color: #bbb;
        font-size: 1em;

        &.active {
          color: #1EAEDB;
        }
        &:hover {
          cursor: pointer;
          color: #22CFFF;
          opacity: 0.7;
          transition: all 0.3s cubic-bezier(0.48, 0.25, 0.35, 0.98);
          -webkit-transition: all 0.3s cubic-bezier(0.48, 0.25, 0.35, 0.98);
          -moz-transition: all 0.3s cubic-bezier(0.48, 0.25, 0.35, 0.98);
          -o-transition: all 0.3s cubic-bezier(0.48, 0.25, 0.35, 0.98);
        }
      }

      .vr {
        width: 1px;
        background-color: #d8d8d8;
        display: inline-block;
      }
    }
  }
</style>

<template>
  <div class="header row">
    <div class="row">
      <h1 class="row logo">
        Max Martynov
      </h1>

      <h2 class="row sub-logo">
        Web &amp; Mobile Developer 
      </h2>
    </div>

    <div class="locale-buttons">
      <a
        @click="setLanguage('en'); analyticsEvent('language.btn', 'en')"
        :class="{'active': currentLanguage === 'en'}">
        EN
      </a>
      
      <div class="vr">&nbsp;</div>

      <a
        @click="setLanguage('ru'); analyticsEvent('language.btn', 'ru')"
        :class="{'active': currentLanguage === 'ru'}">
        RU
      </a>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapState({
        currentLanguage: state => state.currentLanguage
      })
    },
    methods: {
      ...mapActions([
        'setLanguage'
      ]),
      analyticsEvent (eventCategory, eventAction, eventLabel, eventValue) {
        this.$ga.event({
          eventCategory,
          eventAction,
          eventLabel,
          eventValue
        })
      }
    }
  }
</script>

