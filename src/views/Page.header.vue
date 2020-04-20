<template>
<div class="page-header row">
  <div class="logo-wrapper row">
    <h1 class="row logo">
      Max Martynov
    </h1>

    <h2 class="row sub-logo animate-rotate">
      Web &amp; Mobile Developer
    </h2>
  </div>

  <button-locale
    :currentLanguage="currentLanguage"
    :values="[
      {
        label: 'EN',
        value: 'en'
      },
      {
        label: 'RU',
        value: 'ru'
      }
    ]"
    @change="onChangeLang">
  </button-locale>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ButtonLocale from '@/components/ButtonLocale.vue'

export default {
  components: {
    ButtonLocale
  },
  computed: {
    ...mapState({
      currentLanguage: state => state.currentLanguage
    })
  },
  methods: {
    ...mapActions([
      'setLanguage'
    ]),
    analyticsEvent (eventAction, eventCategory, eventLabel, value) {
      this.$gtag.event(eventAction, {
        event_category: eventCategory,
        event_label: eventLabel,
        value
      })
    },
    onChangeLang (lang) {
      this.setLanguage(lang)
      this.analyticsEvent('press', 'language.btn', lang)
    }
  }
}
</script>

<style lang="less">
@import url("~@/styles/_variables.less");

.page-header {
  height: @app-header__height;
  max-height: @app-header__height;
  position: relative;

  .logo-wrapper {
    padding-top: @app-header__padding-top;
    display: inline-block;

    .logo {
      margin: 0;
      font-weight: 600;
      font-family: @font-family-primary;
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
      line-height: 1.3rem;
      font-family: @font-family-primary;
      color: @color-grey-darken-4;
      letter-spacing: normal;
      margin-left: 1px;
      margin-top: -1px;

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

  .btn-locale {
    position: absolute;
    right: 0;
    top: calc(@app-header__padding-top + 0.5em);
  }
}

@media (max-width: 400px) {
  .header {
    .logo-wrapper {
      padding-top: @app-header__padding-top * 1.7;
    }

    .btn-locale {
      top: @app-header__padding-top * 2.4;
      font-size: 1rem;
    }
  }
}
</style>
