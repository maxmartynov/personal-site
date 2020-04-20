<template>
<div
  class="page-content row"
  :class="{
    'scenario scenario--contacts': $route.name === 'contacts',
    'scenario scenario--skills': $route.name === 'skills'
  }">

  <BlockAbout
    :overlap-text="aboutTextOverlapMessage"
    :two-cols="$route.name === 'contacts'"/>

  <BlockContacts v-if="$route.name === 'contacts'"/>

  <BlockSkillsChart
    v-if="$route.name === 'skills'"
    :class="{disabled: $route.name !== 'skills'}"
  />
</div>
</template>

<script>
import BlockAbout from './Block.About.vue'
import BlockContacts from './Block.Contacts.vue'
import BlockSkillsChart from './Block.SkillsChart.vue'

export default {
  components: {
    BlockAbout,
    BlockSkillsChart,
    BlockContacts
  },
  computed: {
    aboutTextOverlapMessage () {
      if (this.$route.name === 'contacts') {
        return this.$t('home.content.text_contacts')
      } else if (this.$route.name === 'skills') {
        return this.$t('home.content.text_skills')
      }

      return false
    }
  }
}
</script>

<style lang="less">
@import url("~@/styles/_variables.less");

.page-content {
  text-align: center;
  position: relative;
  height: calc(100% - @app-header__height);

  .contacts-block {
    position: absolute;
    top: 60%;
    left: 0;
    right: 0;
  }

  .skills-chart {
    margin: 0 auto;
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

.page-content.scenario--contacts,
.page-content.scenario--skills {
  .block-about {
    height: auto;
    text-align: center;
    width: 100%;
    padding-top: 3rem;

    .avatar {
      width: 15%;
      padding: 1rem 2% 0;
      box-sizing: border-box;
      position: absolute;
      top: 3rem;
      left: 0;

      .image {
        background-position: top;
      }
    }

    .divider-horisontal {
      display: block;
    }

    .content {
      display: inline-block;
      vertical-align: top;
      margin-top: 1em;
      padding-top: 0;
      width: 90%;
      text-align: center;
      height: 100%;
      mask-image: linear-gradient(to bottom, #fff calc(100% - 10rem), transparent 100%);
    }
  }
}

.page-content.scenario--contacts {
  .block-about {
    .content {
      padding-bottom: 10rem;
    }
  }
}

.page-content.scenario--skills {
  overflow-x: hidden;
  overflow-y: auto;
  mask-image: linear-gradient(to bottom, #fff calc(100% - 5rem), transparent 100%);

  .block-about {
    .content {
      padding-bottom: 8rem;
      mask-image: none;
    }
  }

  .skills-chart {
    padding-bottom: 5rem;
  }
}

@media (max-width: 550px) {
  .page-content.scenario--contacts,
  .page-content.scenario--skills {
    .block-about {
      .avatar {
        display: none;
      }
    }
  }
}
</style>
