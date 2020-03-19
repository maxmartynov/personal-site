<template>
<div class="contacts-block row unselectable">
  <ul class="social-buttons">
    <li>
      <a
        target="blank"
        :href="links.upwork"
        @click="analyticsEvent('press', 'contact.btn', 'upwork')">

        <img
          :src="require('@/assets/img/logo-upwork.svg')"
          alt="Upwork"
          title="Upwork">
      </a>
    </li>

    <li>
      <a
        target="blank"
        :href="links.github"
        @click="analyticsEvent('press', 'contact.btn', 'github')">

        <img
          :src="require('@/assets/img/logo-github.svg')"
          alt="GitHub"
          title="GitHub">
      </a>
    </li>

    <li>
      <a
        class="social-link-instagram"
        target="blank"
        :href="links.instagram"
        @click="analyticsEvent('press', 'contact.btn', 'instagram')">

        <img
          :src="require('@/assets/img/logo-instagram.svg')"
          alt="Instagram"
          title="Instagram">
      </a>
    </li>

    <li>
      <a
        class="social-link-stackexchange"
        target="blank"
        :href="links.stackexchange"
        @click="analyticsEvent('press', 'contact.btn', 'stackexchange')">

        <img
          :src="require('@/assets/img/logo-stackexchange.svg')"
          alt="Stack Exchange"
          title="Stack Exchange">
      </a>
    </li>

    <li>
      <a
        :href="`mailto:${links.email}`"
        @click="analyticsEvent('press', 'contact.btn', 'email')">

        <img
          :src="require('@/assets/img/logo-mail.svg')"
          alt="Email"
          title="Email">
      </a>
    </li>
  </ul>
</div>
</template>

<script>
import { preloadImages } from '@/helpers'

export default {
  data () {
    return {
      links: {
        upwork: process.env.VUE_APP_LINK_UPWORK,
        github: process.env.VUE_APP_LINK_GITHUB,
        instagram: process.env.VUE_APP_LINK_INSTAGRAM,
        stackexchange: process.env.VUE_APP_LINK_STACKEXCHANGE,
        email: process.env.VUE_APP_LINK_EMAIL
      }
    }
  },
  beforeCreate () {
    preloadImages([
      require('@/assets/img/logo-upwork.svg'),
      require('@/assets/img/logo-github.svg'),
      require('@/assets/img/logo-instagram.svg'),
      require('@/assets/img/logo-stackexchange.svg'),
      require('@/assets/img/logo-mail.svg')
    ])
  },
  methods: {
    analyticsEvent (eventAction, eventCategory, eventLabel, value) {
      this.$gtag.event(eventAction, {
        event_category: eventCategory,
        event_label: eventLabel,
        value
      })
    }
  }
}
</script>

<style scoped lang="less">
.contacts-block {
  text-align: center;

  .social-buttons {
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 0;
    display: inline-block;

    li {
      display: inline-block;
      padding: 0 1rem 1rem;
      margin: 0;
      cursor: pointer;

      a {
        cursor: pointer;
        font-size: 2rem;

        img {
          display: inline-block;
          vertical-align: middle;
          width: 1.7em;
          opacity: 0.9;
          transition: all 0.2s ease-out;
          -webkit-transition: all 0.2s ease-out;
          -moz-transition: all 0.2s ease-out;
          -o-transition: all 0.2s ease-out;
        }

        &.social-link-instagram img {
          width: 1.5em;
          opacity: 0.8;
        }

        &.social-link-stackexchange img {
          width: 2.5em;
          opacity: 0.8;
          margin-bottom: -0.3rem;
        }
      }

      &:hover a img {
        opacity: 1 !important;
      }
    }

    &:hover {
      li a img {
        opacity: 0.4;
      }
    }
  }
}
</style>
