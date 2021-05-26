<template>
<div class="contacts-block row">
  <ul class="social-buttons unselectable">
    <li
      v-for="btn of btns"
      :key="btn.name"
    >

      <a
        :href="btn.href"
        @click="analyticsEvent('press', 'contact.btn', btn.name)"
        target="blank"
        rel="external noopener"
      >
        <img
          :src="btn.icon"
          :alt="btn.label"
          :title="btn.label"
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
          icon: require('@/assets/img/logo-upwork.svg'),
          href: process.env.VUE_APP_LINK_UPWORK,
        },
        {
          name: 'github',
          label: 'GitHub',
          icon: require('@/assets/img/logo-github.svg'),
          href: process.env.VUE_APP_LINK_GITHUB,
        },
        {
          name: 'linkedin',
          label: 'LinkedIn',
          icon: require('@/assets/img/logo-linkedin.svg'),
          href: process.env.VUE_APP_LINK_LINKEDIN,
        },
        {
          name: 'instagram',
          label: 'Instagram',
          icon: require('@/assets/img/logo-instagram.svg'),
          href: process.env.VUE_APP_LINK_INSTAGRAM,
        },
        {
          name: 'stackexchange',
          label: 'Stack Exchange',
          icon: require('@/assets/img/logo-stackexchange.svg'),
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
      require('@/assets/img/logo-upwork.svg'),
      require('@/assets/img/logo-github.svg'),
      require('@/assets/img/logo-linkedin.svg'),
      require('@/assets/img/logo-instagram.svg'),
      require('@/assets/img/logo-stackexchange.svg'),
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
          font-size: 1.4rem;
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
