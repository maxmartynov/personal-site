<template>
<div
  class="app-content row"
  :class="{
    'scenario scenario__contacts': isShowContact,
    'scenario scenario__skills': isShowSkillsChart
  }">

  <avatar></avatar>

  <div class="row text-block">

    <hr class="divider-horisontal">

    <p
      class="eight columns"
      v-for="(paragraph, index) in contentTextParagraphs"
      :key="index"
      v-text="paragraph">
    </p>
  </div>

  <div
    v-if="contentType === 'contacts'"
    class="row social-buttons-wrapper unselectable">

    <ul class="social-buttons">
      <li>
        <a
          target="blank"
          :href="links.upwork"
          @click="analyticsEvent('contact.btn', 'upwork')">

          <img
            src="static/images/logo-upwork.svg"
            alt="Upwork"
            title="Upwork">
        </a>
      </li>

      <li>
        <a
          target="blank"
          :href="links.github"
          @click="analyticsEvent('contact.btn', 'github')">

          <img
            src="static/images/logo-github.svg"
            alt="GitHub"
            title="GitHub">
        </a>
      </li>

      <li>
        <a
          class="social-link-instagram"
          target="blank"
          :href="links.instagram"
          @click="analyticsEvent('contact.btn', 'instagram')">

          <img
            src="static/images/logo-instagram.svg"
            alt="Instagram"
            title="Instagram">
        </a>
      </li>

      <li>
        <a
          class="social-link-stackexchange"
          target="blank"
          :href="links.stackexchange"
          @click="analyticsEvent('contact.btn', 'stackexchange')">

          <img
            src="static/images/logo-stackexchange.svg"
            alt="Stack Exchange"
            title="Stack Exchange">
        </a>
      </li>

      <li>
        <a
          :href="`mailto:${links.email}`"
          @click="analyticsEvent('contact.btn', 'email')">

          <img
            src="static/images/logo-mail.svg"
            alt="Email"
            title="Email">
        </a>
      </li>
    </ul>
  </div>


  <skills-chart
    :class="{disabled: !isShowSkillsChart}"
    :isShowChart="isShowSkillsChart">
  </skills-chart>


  <div class="btns__wrapper">
    <button
      class="btn__skills"
      v-if="contentType === 'home'"
      @click="isShowSkillsChart = !isShowSkillsChart"
      v-text="$t('skills')">
    </button>

    <button
      class="btn__skills"
      v-if="contentType === 'home'"
      @click="isShowContact = !isShowContact"
      v-text="$t('contacts')">
    </button>

    <button
      class="btn__home"
      v-if="contentType !== 'home'"
      @click="goHome"
      v-text="`<- ${$t('back')}`">
    </button>
  </div>

</div>
</template>

<script>
import {preloadImages} from '@/helpers'
import VARIABLES from '@/../VARIABLES.json'
import Avatar from './Avatar.vue'
import SkillsChart from './SkillsChart.vue'

export default {
  components: {
    Avatar,
    SkillsChart
  },
  data () {
    return {
      isShowContact: false,
      isShowSkillsChart: false,
      links: {
        upwork: VARIABLES.LINKS.UPWORK,
        github: VARIABLES.LINKS.GITHUB,
        instagram: VARIABLES.LINKS.INSTAGRAM,
        stackexchange: VARIABLES.LINKS.STACKEXCHANGE,
        email: VARIABLES.LINKS.EMAIL
      },
      experienceYears: new Date(new Date() - new Date('01/01/2013')).getFullYear() - 1970
    }
  },
  computed: {
    contentType () {
      if (this.isShowContact) {
        return 'contacts'
      } else if (this.isShowSkillsChart) {
        return 'skills'
      } else {
        return 'home'
      }
    },
    contentTextParagraphs () {
      let paragraphs = []

      if (this.isShowContact) {
        paragraphs = [this.$t('home.content.text_contacts')]
      } else if (this.isShowSkillsChart) {
        paragraphs = [this.$t('home.content.text_skills')]
      } else {
        paragraphs = [
          this.$t('home.content.text_about_1', {
            years: this.experienceYears
          }),
          this.$t('home.content.text_about_2')
        ]
      }

      return paragraphs
    }
  },
  beforeCreate () {
    preloadImages([
      'static/images/logo-upwork.svg',
      'static/images/logo-github.svg',
      'static/images/logo-instagram.svg',
      'static/images/logo-stackexchange.svg',
      'static/images/logo-mail.svg'
    ])
  },
  methods: {
    goHome () {
      this.isShowContact = false
      this.isShowSkillsChart = false
    },
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

<style scoped lang="less">
@import url("~@/styles/_variables.less");

.app-content {
  text-align: center;
  position: relative;
  height: calc(100% - @header__height);
  overflow-y: hidden;

  .avatar {
    margin-top: 1em;
    margin-bottom: 1.5em;
    font-size: 2rem;
  }

  .divider-horisontal {
    width: 5rem;
    display: block;
    clear: both;
    margin: 0;
    padding: 0 0 1rem 0;
    border-color: #bbb;
    border-color: @color-grey-darken-1;
    margin-left: 4%;
  }

  .text-block {
    text-align: left;

    p {
      font-family: @font-family-base;
      text-indent: 0.5em;
      font-size: 1.4rem;
      line-height: 2.2rem;
      margin-bottom: 2rem;
      padding: 0 1rem;
    }
  }

  .social-buttons-wrapper {
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

  .btns__wrapper {
    width: 100%;
    margin-top: 5em;
    margin-bottom: 3em;

    button {
      margin: 0 1rem;
      text-transform: uppercase;
      font-size: 1.2rem;
      font-family: 'Arimo', sans-serif;
    }
  }

  .btn__skills {
    margin-top: 1em;
    z-index: 8;
  }

  .skills-chart {
    max-width: 60rem;

    &.disabled {
      pointer-events: none;
      height: 0;
      overflow: hidden;
    }
  }
}

.app-content * {
  transition: all 0.2s ease-out;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
}

.app-content.scenario {
  .avatar {
    font-size: 0.8rem;
    margin-top: 4em;
    margin-right: ~"calc(99% - 10em)";
    margin-bottom: 0;
    pointer-events: none;
  }

  .text-block {
    padding-left: 7rem;
    margin-top: -6.2em;

    hr {
      margin-left: 1.5em;
      padding-bottom: 0.5em;
    }
  }
}

.app-content.scenario__contacts {
  .social-buttons-wrapper {
    margin-bottom: 2em;
  }

  .social-buttons-wrapper {
    margin-top: 20vh;
  }
}

.app-content.scenario__skills {
  .skills-chart {
    margin-top: 5em;
  }
}

@media (max-width: 550px) {
  .app-content.scenario {
    .avatar {
      font-size: 0.6rem;
      margin-top: 6em;
      margin-bottom: 0;
    }

    .text-block {
      padding-left: 7rem;
      margin-top: -5em;

      hr {
        margin-left: 0em;
      }
    }
  }

  .app-content.scenario__contacts {
    .social-buttons-wrapper {
      margin-top: 15vh;
    }
  }

  .app-content.scenario__skills {
    .skills-chart {
      margin-top: 4em;
    }
  }
}

@media (max-width: 550px) {
  .app-content {
    .avatar {
      margin-top: 1.5em;
    }

    .divider-horisontal {
      margin-left: 0;
    }

    .social-buttons li a {
      font-size: 1.8rem !important;
    }

    .btns__wrapper {
      margin-top: 2em;
      margin-bottom: 2em;
    }
  }
}

@media (max-height: 700px) {
  .app-content {
    overflow-y: auto;
  }
}
</style>
