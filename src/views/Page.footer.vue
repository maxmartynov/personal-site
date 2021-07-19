<template>
<div
  class="page-footer"
  :class="{'page-footer--mobile': isMobile}"
>
  <AppNavbar/>

  <BlockContacts v-show="isShowContacts" />

  <div class="bottom-block">
    <div class="column ma-0 pl-5 text-left">
      <a :href="VUE_APP_REPO_URL" rel="external noopener" target="_blank">
        <img
          class="icon-img"
          :src="'/img/logo-github.svg'"
          alt="GitHub"
          title="GitHub"
          width="10"
          height="10"
        />

        <span class="ml-2">Source Code</span>
      </a>
    </div>

    <div class="column ma-0 pr-5 text-right">
      © {{ year }} Martynov Maksim
    </div>
  </div>
</div>
</template>

<script>
import AppNavbar from './Page.navbar.vue'
import BlockContacts from './Block.Contacts.vue'

export default {
  components: {
    AppNavbar,
    BlockContacts,
  },
  data () {
    return {
      year: new Date().getFullYear(),
      VUE_APP_REPO_URL: process.env.VUE_APP_REPO_URL,
      window: {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    }
  },
  computed: {
    isMobile () {
      return this.window.width < 800 || this.window.height < 550
    },
    isShowContacts () {
      return !this.isMobile || this.$route.name === 'home'
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onWindowResize)
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onWindowResize)
  },
  methods: {
    onWindowResize () {
      this.window = {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    }
  }
}
</script>

<style lang="less">
@import url("~@/styles/_variables.less");

@page-footer__bottom-block__height: 2.2rem;

.page-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: @app-footer__height;
  text-align: center;
  overflow: hidden;
  color: @color-grey-base;
  font-size: 1.1rem;

  .page-navbar {
    button {
      margin-top: 3rem;
      margin-bottom: 3rem;
    }
  }

  .contacts-block {
    position: relative;
    margin-top: 0.4rem;
    z-index: 10;
  }

  .bottom-block {
    height: @page-footer__bottom-block__height;
    line-height: @page-footer__bottom-block__height;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 5;

    .column {
      width: 50%;
    }

    .icon-img {
      width: 1.4rem;
      height: 1.4rem;
      margin-bottom: 0.1rem;
    }

    a {
      opacity: .8;
      color: @color-grey-base;
      transition: opacity 0.2s ease-out, color 0.2s ease-out;

      img {
        opacity: .5;
      }

      span,
      img {
        vertical-align: middle;
      }

      &:hover {
        color: @color-grey-darken-3;
        opacity: 1;

        img {
          opacity: 1;
        }
      }
    }
  }

  &--mobile {
    .page-navbar {
      margin-top: 3rem;
    }

    .bottom-block {
      .icon-img {
        width: 1.6rem;
        height: 1.6rem;
        margin-bottom: 0;
      }
    }
  }
}

@media (max-width: 550px) {
  .page-footer {
    height: @app-footer__height--small;
    font-size: 0.6em;

    .bottom-block {
      margin-left: -1rem;
      margin-right: -1rem;

      .column {
        &:first-child {
          padding-left: 1rem;
        }
        &:last-child {
          padding-right: 1rem;
        }
      }
    }

    &--mobile {
      .page-navbar {
        margin-top: 1rem;
      }
    }
  }
}

@media (max-height: 550px) {
  .page-footer {
    height: @app-footer__height--extra-small;
    font-size: 0.6em;

    &--mobile {
      .page-navbar {
        margin-top: 0;
      }
    }
  }
}

@media (max-width: 400px) {
  .bottom-block {
    margin-left: 0 !important;
    margin-right: 0 !important;

    .column {
      &:first-child {
        padding-left: 2rem !important;
      }
      &:last-child {
        padding-right: 2rem !important;
      }
    }
  }
}
</style>
