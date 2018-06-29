<style scoped lang="less">
  @import url("~@/styles/_variables.less");

  .app-content {
    margin-top: 4em;

    .divider-horisontal {
      width: 5rem;
      display: block;
      clear: both;
      margin: 0;
      padding: 0 0 1rem 0;
      border-color: #bbb;
      border-color: @color-grey-darken-1;
    }

    p {
      font-family: @font-family-base;
      text-indent: 0.5em;
      font-size: 1.4rem;
      line-height: 2.2rem;
      margin-bottom: 2rem;
      padding: 0 1rem;
    }

    .social-buttons-wrapper {
      margin: 3em 0 5em;
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

          a {
            cursor: pointer;

            img {
              display: inline-block;
              vertical-align: middle;
              width: 3.5rem;
            }

            &.social-link-instagram img {
              width: 3rem;
              opacity: 0.9;
            }

            &.social-link-stackexchange img {
              width: 5rem;
              opacity: 0.9;
              margin-bottom: -0.3rem;
            }
          }

          &:hover a img {
            opacity: 0.8;
            transition: all 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);
            -webkit-transition: all 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);
            -moz-transition: all 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);
            -o-transition: all 0.2s cubic-bezier(0.25, 0.8, 0.5, 1);
          }
        }
      }
    }
  }
</style>

<template>
  <div class="app-content row">
    <div class="row">
      <hr class="divider-horisontal">

      <p
        class="seven columns"
        v-text="$t('home.content.text_1')">
      </p>

      <p
        class="seven columns"
        v-text="$t('home.content.text_2')">
      </p>
    </div>

    <div class="row social-buttons-wrapper unselectable">
      <ul class="social-buttons">

        <li>
          <a
            target="blank"
            :href="links.upwork"
            @click="analyticsEvent('contact.btn', 'upwork')">

            <img src="static/images/logo-upwork.svg" alt="Upwork">
          </a>
        </li>

        <li>
          <a
            target="blank"
            :href="links.github"
            @click="analyticsEvent('contact.btn', 'github')">

            <img src="static/images/logo-github.svg" alt="GitHub">
          </a>
        </li>

        <li>
          <a
            class="social-link-instagram"
            target="blank"
            :href="links.instagram"
            @click="analyticsEvent('contact.btn', 'instagram')">

            <img src="static/images/logo-instagram.svg" alt="Instagram">
          </a>
        </li>

        <li>
          <a
            class="social-link-stackexchange"
            target="blank"
            :href="links.stackexchange"
            @click="analyticsEvent('contact.btn', 'stackexchange')">

            <img src="static/images/logo-stackexchange.svg" alt="Stack Exchange">
          </a>
        </li>

        <li>
          <a
            :href="`mailto:${links.email}`"
            @click="analyticsEvent('contact.btn', 'email')">

            <img src="static/images/logo-mail.svg" alt="Email">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import VARIABLES from '@/../VARIABLES.json'

  export default {
    data () {
      return {
        isAnimateSocialButtons: false,
        links: {
          upwork: VARIABLES.LINKS.UPWORK,
          github: VARIABLES.LINKS.GITHUB,
          instagram: VARIABLES.LINKS.INSTAGRAM,
          stackexchange: VARIABLES.LINKS.STACKEXCHANGE,
          email: VARIABLES.LINKS.EMAIL
        }
      }
    },
    mounted () {
      setTimeout(() => {
        this.isAnimateSocialButtons = true
      }, 1000)
    },
    methods: {
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
