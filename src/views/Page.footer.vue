<template>
<div class="page-footer">
  <app-navbar></app-navbar>

  <div class="bottom-block">
    <div class="column ma-0 pl-5 text-left">
      <a :href="VUE_APP_REPO_URL" rel="external noopener" target="_blank">
        <img
          class="mb-1"
          :src="require('@/assets/img/logo-github.svg')"
          alt="GitHub"
          title="GitHub"
          width="11"/>

        <span class="ml-2">Source Code</span>
      </a>
    </div>

    <div class="column ma-0 pr-5 text-right">
      © 2013-{{ year }} &mdash; Maksim Martynov
    </div>
  </div>
</div>
</template>

<script>
import AppNavbar from './Page.navbar.vue'

export default {
  components: {
    AppNavbar
  },
  data () {
    return {
      year: new Date().getFullYear(),
      VUE_APP_REPO_URL: process.env.VUE_APP_REPO_URL
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
  color: @color-grey-darken-3;
  font-size: 1.1rem;

  .page-navbar {
    height: calc(@app-footer__height - @page-footer__bottom-block__height);
    padding-top: 3rem;
  }

  .bottom-block {
    height: @page-footer__bottom-block__height;
    line-height: @page-footer__bottom-block__height;

    .column {
      width: 50%;
    }

    a {
      opacity: .8;
      color: #000;

      &:hover {
        opacity: 1;
      }

      span,
      img {
        vertical-align: middle;
      }
    }
  }
}

@media (max-width: 550px) {
  .page-footer {
    height: @app-footer__height--small;
    font-size: 1rem;

    .page-navbar {
      height: calc(@app-footer__height--small - @page-footer__bottom-block__height);
    }

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
  }
}

@media (max-height: 550px) {
  .page-footer {
    height: @app-footer__height--extra-small;
    font-size: 1rem;

    .page-navbar {
      height: calc(@app-footer__height--extra-small - @page-footer__bottom-block__height);
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
