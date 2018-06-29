<style scoped lang="less">
  @import url("~@/styles/_variables.less");

  /* Larger than mobile */
  @media (max-width: 400px) {
    .header {
      margin-top: @app-header-margin-top * 1.5 !important;
    }
  }

  .header {
    margin-top: @app-header-margin-top;
    position: relative;

    .logo-wrapper {
      display: inline-block;

      .logo {
        margin: 0;
        font-weight: 600;
        font-family: @font-family-base;
        letter-spacing: 1px;
        font-size: 1.8em;
        color: @color-grey-darken-4;

        &:hover {
          color: @color-grey-darken-3;
          transition: all 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);
          -webkit-transition: all 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);
          -moz-transition: all 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);
          -o-transition: all 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);
        }
      }

      .sub-logo {
        margin: 0;
        font-size: 1.1rem;
        line-height: 1.1rem;
        font-family: @font-family-base, ;
        color: @color-grey-darken-4;
        letter-spacing: normal;
        margin-left: 1px;

        &.animate-rotate {
          transition-delay: 0s;
          transition-duration: 0.5s;
          transition-property: transform;
          transition-timing-function: cubic-bezier(0.25, 0.8, 0.5, 1);
          transform-origin: left bottom;
        }
      }

      .logo:hover + .sub-logo,
      .sub-logo:hover {
        transform: rotate(10deg);
      }
    }

    .locale-buttons {
      position: absolute;
      right: 0;
      top: 0.1em;
      padding: 0.5em 0 0 0;

      a {
        color: @color-grey-lighten-1;
        font-size: 1em;

        &.active {
          color: @color-blue-lighten-1;
        }
        &:hover {
          cursor: pointer;
          color: @color-light-blue-base;
          opacity: 0.7;
          transition: all 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);
          -webkit-transition: all 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);
          -moz-transition: all 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);
          -o-transition: all 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);
        }
      }

      .vr {
        width: 1px;
        background-color: @color-grey-lighten-1;
        display: inline-block;
      }
    }
  }
</style>

<template>
  <div class="header row">
    <div class="logo-wrapper row">
      <h1 class="row logo">
        Max Martynov
      </h1>

      <h2 class="row sub-logo animate-rotate">
        Web &amp; Mobile Developer
      </h2>
    </div>

    <div class="locale-buttons unselectable">
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
