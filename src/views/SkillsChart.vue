<template>
<div class="skills-chart">
  <ul :class="{visible: isShowChart}">
    <li
      v-for="([name, value], index) in skills"
      :key="index"
      :class="{divider: name === 'divider'}"
      :style="{
        width: `${value}%`
      }">

      {{ name }}
    </li>
  </ul>
</div>
</template>

<script>
const SKILLS = [
  ['JavaScript', 95],
  ['HTML/CSS', 90],

  // ['divider'],

  // ['Vue.js', 90],
  // ['AngularJS', 75],
  // ['Ionic', 70],

  ['divider'],

  ['Wireframing', 50],
  ['Prototyping', 75],
  ['DevOps', 80],
  ['Machine Learning', 55],

  ['divider'],

  ['Communication', 95],
  ['Project Documentation Writing', 90],

  ['divider']
]

export default {
  props: {
    isShowChart: {
      type: Boolean
    }
  },
  data () {
    return {
      skills: SKILLS
    }
  }
}
</script>

<style scoped lang="less">
@import url("~@/styles/_variables.less");

.skills-chart {
  ul {
    list-style: none;

    li {
      display: block;
      width: 0%;
      height: 2.5rem;
      line-height: 3.2rem;
      text-indent: 1rem;
      text-align: left;
      max-width: 0px;
      min-width: 0px;
      margin: 0.5rem 0;
      padding: 0;
      font-size: 1.3rem;
      background-color: @color-grey-darken-4;
      color: #fff;
      font-family: 'Raleway', sans-serif;
      letter-spacing: 1px;
      overflow: hidden;
      white-space: nowrap;
      transition: all 0.5s ease-out;
      -webkit-transition: all 0.5s ease-out;
      -moz-transition: all 0.5s ease-out;
      -o-transition: all 0.5s ease-out;

      &.divider {
        width: 100%;
        opacity: 0;
        height: 0.5rem;
      }

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    &.visible {
      li {
        max-width: 100% !important;
      }
    }
  }
}

@media (max-width: 40rem) {
  .skills-chart ul li {
    font-size: 1.2rem !important;
  }
}
</style>
