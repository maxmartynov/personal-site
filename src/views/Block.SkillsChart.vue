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
  ['JavaScript', 97],
  ['Node.js', 90],
  ['HTML/CSS', 96],
  ['Dart', 75],

  ['divider'],

  ['Vue.js', 95],
  ['Flutter', 85],
  ['Angular', 75],
  ['Ionic Framework', 75],

  ['divider'],

  // ['Wireframing', 50],
  // ['Prototyping', 75],
  // ['Machine Learning', 55],
  ['Design', 75],
  ['DevOps', 85],

  ['divider'],

  ['Communication', 95],
  ['Self-management', 87],
  ['Team management', 80],

  ['divider'],

  ['Charts making', 200]
]

export default {
  data () {
    return {
      isShowChart: false,
      skills: SKILLS
    }
  },
  mounted () {
    setTimeout(() => this.isShowChart = true, 50)
  }
}
</script>

<style lang="less">
@import url("~@/styles/_variables.less");

.skills-chart {
  padding: 0 1rem;

  ul {
    list-style: none;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      left: -1px;
      top: -15px;
      bottom: -15px;
      display: block;
      width: 100%;
      border-right: 1px solid @color-grey-lighten-1;
      z-index: 0;
    }

    li {
      display: block;
      position: relative;
      z-index: 2;
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
      font-family: @font-family-primary;
      letter-spacing: 1px;
      overflow: visible;
      white-space: nowrap;
      transition-property: max-width;
      transition-duration: 0.8s;
      transition-timing-function: ease-out;

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
        max-width: 200% !important;
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
