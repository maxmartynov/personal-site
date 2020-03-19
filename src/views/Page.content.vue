<template>
<div
  class="page-content row"
  :class="{
    'scenario scenario__contacts': $route.name === 'contacts',
    'scenario scenario__skills': $route.name === 'skills'
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

  <contacts-block v-if="$route.name === 'contacts'"/>

  <skills-chart
    :class="{disabled: $route.name !== 'skills'}"
    :isShowChart="$route.name === 'skills'">
  </skills-chart>


  <div class="btns__wrapper">
    <button
      class="btn__skills"
      v-if="$route.name === 'home'"
      @click="$router.push('skills')"
      v-text="$t('skills')">
    </button>

    <button
      class="btn__skills"
      v-if="$route.name === 'home'"
      @click="$router.push('contacts')"
      v-text="$t('contacts')">
    </button>

    <button
      class="btn__home"
      v-if="$route.name !== 'home'"
      @click="$router.push('home')"
      v-text="`<- ${$t('back')}`">
    </button>
  </div>

</div>
</template>

<script>
import Avatar from './Avatar.vue'
import ContactsBlock from './ContactsBlock.vue'
import SkillsChart from './SkillsChart.vue'

export default {
  components: {
    Avatar,
    SkillsChart,
    ContactsBlock
  },
  data () {
    return {
      experienceYears: new Date(new Date() - new Date('01/01/2013')).getFullYear() - 1970
    }
  },
  computed: {
    contentTextParagraphs () {
      let paragraphs = []

      if (this.$route.name === 'contacts') {
        paragraphs = [this.$t('home.content.text_contacts')]
      } else if (this.$route.name === 'skills') {
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
  }
}
</script>

<style scoped lang="less">
@import url("~@/styles/_variables.less");

.page-content {
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

.page-content * {
  transition: all 0.2s ease-out;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
}

.page-content.scenario {
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

.page-content.scenario__contacts {
  .contacts-block {
    margin-bottom: 2em;
  }

  .contacts-block {
    margin-top: 20vh;
  }
}

.page-content.scenario__skills {
  .skills-chart {
    margin-top: 5em;
  }
}

@media (max-width: 550px) {
  .page-content.scenario {
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

  .page-content.scenario__contacts {
    .contacts-block {
      margin-top: 15vh;
    }
  }

  .page-content.scenario__skills {
    .skills-chart {
      margin-top: 4em;
    }
  }
}

@media (max-width: 550px) {
  .page-content {
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
  .page-content {
    overflow-y: auto;
  }
}
</style>
