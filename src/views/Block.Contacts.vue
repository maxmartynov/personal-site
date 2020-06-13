<template>
<div class="contacts-block row unselectable">
  <ul class="social-buttons">
    <li
      v-for="btn of btns"
      :key="btn.name">

      <a
        :href="btn.href"
        @click="analyticsEvent('press', 'contact.btn', btn.name)"
        target="blank"
        rel="external">

        <img
          :src="btn.icon"
          :alt="btn.label"
          :title="btn.label"/>
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
        linkedin: process.env.VUE_APP_LINK_LINKEDIN,
        instagram: process.env.VUE_APP_LINK_INSTAGRAM,
        stackexchange: process.env.VUE_APP_LINK_STACKEXCHANGE,
        email: process.env.VUE_APP_LINK_EMAIL
      },
      btns: [
        {
          name: 'upwork',
          label: 'Upwork',
          icon: require('@/assets/img/logo-upwork.svg'),
          href: process.env.VUE_APP_LINK_UPWORK
        },
        {
          name: 'github',
          label: 'GitHub',
          icon: require('@/assets/img/logo-github.svg'),
          href: process.env.VUE_APP_LINK_GITHUB
        },
        {
          name: 'linkedin',
          label: 'LinkedIn',
          icon: require('@/assets/img/logo-linkedin.svg'),
          href: process.env.VUE_APP_LINK_LINKEDIN
        },
        {
          name: 'instagram',
          label: 'Instagram',
          icon: require('@/assets/img/logo-instagram.svg'),
          href: process.env.VUE_APP_LINK_INSTAGRAM
        },
        {
          name: 'stackexchange',
          label: 'Stack Exchange',
          icon: require('@/assets/img/logo-stackexchange.svg'),
          href: process.env.VUE_APP_LINK_STACKEXCHANGE
        },
        {
          name: 'email',
          label: 'Email',
          icon: require('@/assets/img/logo-mail.svg'),
          href: `mailto:${process.env.VUE_APP_LINK_EMAIL}`
        }
      ]
    }
  },
  beforeCreate () {
    preloadImages([
      require('@/assets/img/logo-upwork.svg'),
      require('@/assets/img/logo-github.svg'),
      require('@/assets/img/logo-linkedin.svg'),
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

<style lang="less">
.contacts-block {
  text-align: center;
  animation: fadein .5s;

  .social-buttons {
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 0;
    display: inline-block;

    li {
      display: inline-block;
      padding: 1rem;
      margin: 0;
      cursor: pointer;

      a {
        cursor: pointer;
        font-size: 2rem;

        img {
          display: inline-block;
          vertical-align: middle;
          width: 1.7em;
          height: auto;
          opacity: 0.9;
          transition: opacity 0.2s ease-out;
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
