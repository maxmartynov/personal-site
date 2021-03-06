<template>
<div
  class="block-about"
  :class="{
    'mode--two-cols': isShowMoreInfo
  }">

  <Avatar :alt="VUE_APP_AUTHOR_NAME"/>

  <div class="content">
    <hr class="divider-horisontal">

    <span class="main-text" v-html="contentText"></span>

    <a
      v-if="!isShowMoreInfo && !overlapText"
      class="unselectable display-block"
      href="#"
      rel="nofollow"
      @click.prevent="onClickMoreToggle">

      <b>{{ $t('more') }}</b>
    </a>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
import Avatar from '@/components/Avatar.vue'

export default {
  components: {
    Avatar
  },
  props: {
    overlapText: String
  },
  data () {
    return {
      experienceYears: new Date(new Date() - new Date('01/01/2013')).getFullYear() - 1970,
      VUE_APP_AUTHOR_NAME: process.env.VUE_APP_AUTHOR_NAME,
    }
  },
  computed: {
    ...mapState({
      currentLanguage: state => state.currentLanguage
    }),
    isShowMoreInfo () {
      return this.$route.name === 'about'
    },
    contentText () {
      if (this.overlapText) {
        return this.overlapText
      } else {
        const text = this.$t(
          'home.content.text_about',
          {years: this.experienceYears}
        )

        const firstParagraphIndex = text.indexOf('<br/>')
        return this.isShowMoreInfo ? text : text.substr(0, firstParagraphIndex)
      }
    },
  },
  methods: {
    onClickMoreToggle () {
      if (this.$route.name === 'about') {
        this.$router.push({name: 'home'})
      } else {
        this.$router.push({name: 'about'})
      }
    }
  }
}
</script>

<style lang="less">
@import url("~@/styles/_variables.less");

@keyframes animateOverlay {
  to {
    opacity: 1;
    top: 0;
  }
}

.block-about .avatar,
.block-about .content {
  transition-property: top, left, width, margin, padding;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
}

.block-about {
  display: inline-block;
  text-align: center;
  height: 100%;
  width: 100%;
  overflow: visible;
  position: relative;
  box-sizing: border-box;

  .avatar {
    padding: 4rem 0 1.5rem;
    width: 20rem;
    left: calc(50% - (20rem / 2));
    max-height: 20rem;
    height: 25vh;
    position: absolute;
    top: 0;
    animation: fadein .5s;
  }

  .content {
    max-width: 65ch;
    margin-top: calc(25vh + 6rem);
    overflow-y: auto;
    padding: 2em 1em 2em;
    box-sizing: border-box;
    display: inline-block;

    .divider-horisontal {
      width: 8rem;
      display: none;
      clear: both;
      margin: 0 auto 1.3em;
      padding: 0;
      border-color: @color-grey-darken-1;
    }

    .main-text {
      display: inline-block;
      text-align: left;
      font-family: @font-family-primary;
      font-size: 1.6rem;
      font-weight: 300;
      line-height: 2.2rem;
      padding: 0;
      color: @color-grey-darken-4;
      text-align: center;

      b {
        color: @color-grey-darken-3;
      }
    }

    a {
      display: inline-block;
      opacity: 0.8;
      margin-top: 2rem;
      letter-spacing: 0.1px;

      &:hover {
        opacity: 1;
      }
    }

    ul {
      list-style: disc outside;
      padding-left: 2em;

      li {
        margin: 0;
        text-indent: 0;
      }
    }
  }

  &.mode--two-cols {
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
      margin-top: 1rem;
      padding-top: 0;
      padding-bottom: 10rem;
      width: 75%;
      text-align: center;
      height: 100%;
      mask-image: linear-gradient(to bottom, #fff calc(100% - 10rem), transparent 100%);

      .main-text {
        text-align: left;
      }
    }
  }
}

@media (max-width: 550px) {
  .block-about {
    .avatar {
      padding-top: 5rem;
      width: 16rem;
      left: calc(50% - (16rem / 2));
    }
  }

  .block-about,
  .block-about.mode--two-cols {
    .content {
      width: 100%;
      padding-left: 0;
      padding-right: 0.3em;
    }
  }

  .block-about.mode--two-cols {
    .avatar {
      display: none;
    }
  }
}

@media (min-width: 1100px) {
  .block-about.mode--two-cols {
    .avatar {
      left: 2rem;
    }
  }
}

@media (max-height: 650px) {
  .block-about {
    .avatar {
      padding-top: 4rem;
      width: 14rem;
      left: calc(50% - (14rem / 2));
    }
    .content {
      margin-top: calc(14rem + 3rem);
      padding-bottom: 1rem;

      a {
        margin-top: 1rem;
      }
    }
  }
}

@media (max-height: 550px) {
  .block-about {
    .avatar {
      padding-top: 3rem;
      width: 10rem;
      left: calc(50% - (10rem / 2));
    }
    .content {
      margin-top: calc(10rem + 1rem);
      padding-bottom: 1rem;

      a {
        margin-top: 1rem;
      }
    }
  }
}
</style>
