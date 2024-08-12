<template>
<div class="contacts-block row">
  <ul class="contacts-block__buttons unselectable">
    <li
      v-for="btn of btns"
      :key="btn.name"
    >

      <a
        :href="btn.href"
        target="blank"
        rel="external noopener"
        @click="analyticsEvent('press', 'contact.btn', btn.name)"
      >
        <img
          :src="btn.icon"
          :alt="btn.label"
          :title="btn.label"
          width="34"
          height="34"
        />
      </a>
    </li>

    <li class="text-link">
      <a
        :href="emailBtn.href"
        title="Email"
        @click="analyticsEvent('press', 'contact.btn', emailBtn.name)"
        target="blank"
        rel="external noopener"
        v-text="emailBtn.label"
      />
    </li>
  </ul>
</div>
</template>

<script>
import { preloadImages } from '@/helpers'

export default {
  data () {
    return {
      btns: [
        {
          name: 'upwork',
          label: 'Upwork',
          icon: '/img/logo-upwork.svg',
          href: process.env.VUE_APP_LINK_UPWORK,
        },
        {
          name: 'telegram',
          label: 'Telegram',
          icon: '/img/logo-telegram.svg',
          href: 'https://ttttt.me/maxmartynov_channel',
        },
        {
          name: 'github',
          label: 'GitHub',
          icon: '/img/logo-github.svg',
          href: process.env.VUE_APP_LINK_GITHUB,
        },
        {
          name: 'linkedin',
          label: 'LinkedIn',
          icon: '/img/logo-linkedin.svg',
          href: process.env.VUE_APP_LINK_LINKEDIN,
        },
        // INFO: temporarily hide
        // {
        //   name: 'instagram',
        //   label: 'Instagram',
        //   icon: '/img/logo-instagram.svg',
        //   href: process.env.VUE_APP_LINK_INSTAGRAM,
        // },
        {
          name: 'stackexchange',
          label: 'Stack Exchange',
          icon: '/img/logo-stackexchange.svg',
          href: process.env.VUE_APP_LINK_STACKEXCHANGE,
        },
      ],
      emailBtn: {
        name: 'email',
        label: process.env.VUE_APP_LINK_EMAIL,
        icon: null,
        href: `mailto:${process.env.VUE_APP_LINK_EMAIL}`,
      }
    }
  },
  beforeCreate () {
    preloadImages([
      '/img/logo-upwork.svg',
      '/img/logo-github.svg',
      '/img/logo-linkedin.svg',
      '/img/logo-instagram.svg',
      '/img/logo-stackexchange.svg',
      '/img/logo-telegram.svg',
    ])
  },
  methods: {
    analyticsEvent (eventAction, eventCategory, eventLabel, value) {
      this.$gtag.event(eventAction, {
        event_category: eventCategory,
        event_label: eventLabel,
        value,
      })
    }
  }
}
</script>

<style lang="less">
.contacts-block {
  text-align: center;
  animation: fadein .5s;
  font-size: 1.8rem;

  .contacts-block__buttons {
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 0;
    display: inline-block;
    font-size: inherit;

    li {
      display: inline-block;
      padding: 0.5em;
      margin: 0;
      cursor: pointer;
      font-size: inherit;

      a {
        cursor: pointer;
        font-size: inherit;
        transition: opacity 0.2s ease-out;

        img {
          display: inline-block;
          vertical-align: middle;
          width: 1.7em;
          height: auto;
          opacity: 0.9;
        }
      }

      &.text-link {
        display: block;

        a {
          font-size: 0.7em;
          line-height: 1.4em;
        }
      }

      &:hover a {
        opacity: 1 !important;
      }
    }

    &:hover {
      li a {
        opacity: 0.4;
      }
    }
  }
}
</style>
