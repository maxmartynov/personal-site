<style scoped lang="less">
  .app-content {
    margin-top: 4em;

    .divider-horisontal {
      width: 7rem;
      display: block;
      clear: both;
      margin: 0;
      padding: 0 0 1rem 0;
      border-color: #bbb;
    }

    p {
      font-family: 'Arimo', sans-serif;
      text-indent: 0.5em;
      font-size: 1.4rem;
      line-height: 2.2rem;
      margin-bottom: 2rem;
      padding: 0 1rem;
    }

    .social-buttons-wrapper {
      margin: 3em 0 5em;

      .social-buttons {
        list-style: none;
        text-align: center;
        padding: 0;
        margin: 0;

        li {
          display: inline-block;
          padding: 0 1rem; 
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
          }

          &:hover a img {
            opacity: 0.7;
            transition: all 0.15s cubic-bezier(0.48, 0.25, 0.35, 0.98);
            -webkit-transition: all 0.15s cubic-bezier(0.48, 0.25, 0.35, 0.98);
            -moz-transition: all 0.15s cubic-bezier(0.48, 0.25, 0.35, 0.98);
            -o-transition: all 0.15s cubic-bezier(0.48, 0.25, 0.35, 0.98);
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

    <div class="row social-buttons-wrapper">
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
            
            <img src="static/images/logo-instagram.svg" alt="GitHub">
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
        links: {
          upwork: VARIABLES.LINKS.UPWORK,
          github: VARIABLES.LINKS.GITHUB,
          instagram: VARIABLES.LINKS.INSTAGRAM,
          email: VARIABLES.LINKS.EMAIL
        }
      }
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

