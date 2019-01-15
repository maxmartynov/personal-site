<template>
<label class="btn-locale unselectable">
  <input
    type="checkbox"
    v-model="isChecked"
    @change="onChange($event)">

  <div class="slider">
    <span class="left">
      {{ values[0].label }}
    </span>

    <span class="right">
      {{ values[1].label }}
    </span>
  </div>
</label>
</template>

<script>

export default {
  props: {
    currentLanguage: {
      type: String,
      required: true
    },
    values: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isChecked: this.currentLanguage === this.values[1].value
    }
  },
  methods: {
    onChange ($event) {
      let lang = this.currentLanguage === this.values[0].value
        ? this.values[1].value
        : this.values[0].value

      this.$emit('change', lang)
    }
  }
}
</script>

<style scoped lang="less">
@import url("~@/styles/_variables.less");

@color-active: @color-blue-lighten-1;
@color-default: @color-grey-lighten-1;

.btn-locale {
  position: relative;
  display: inline-block;
  overflow: hidden;
  font-size: 1.4rem;
  width: 4.3em;
  height: 2.1em;
  margin: 0;
  padding: 0;
  cursor: pointer;

  input {
    display: none;
    width: 100%;

    &:checked + .slider {
      span.right {
        color: @color-active;
      }

      span.left {
        color: @color-default;
      }
    }

    &:focus + .slider {
      box-shadow: 0 0 1px #2196F3;
    }

    &:checked + .slider:before {
      -webkit-transform: translateX(calc(50% + 9px));
      -ms-transform: translateX(calc(50% + 9px));
      -o-transform: translateX(calc(50% + 9px));
      transform: translateX(calc(100% + 9px));
    }
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    -webkit-transition: .4s;
    transition: .4s;

    span {
      line-height: 2.1em;
      font-family: @font-family-base;
      font-size: 1em;
      position: absolute;
      width: 50%;
      text-align: center;
      -webkit-transition: all 0.2s ease-out;
      -moz-transition: all 0.2s ease-out;
      -o-transition: all 0.2s ease-out;
      transition: all 0.2s ease-out;

      &.left {
        left: 0;
        color: @color-active;
      }

      &.right {
        right: -1px;
        color: @color-default;
      }

      &:hover {
        color: @color-light-blue-base !important;
        opacity: 0.7;
      }
    }

    &:before {
      position: absolute;
      content: "";
      height: 1.6em;
      width: ~"calc(50% - 8px)";
      left: 4px;
      top: 0;
      border-bottom: solid 1px @color-default;
      -webkit-transition: .2s;
      -moz-transition: .2s;
      -o-transition: .2s;
      transition: .2s;
    }
  }

  &:after {
    content: "";
    width: 1px;
    height: calc(100% - 2px * 2);
    display: block;
    position: absolute;
    left: 50%;
    top: 2px;
    border-left: solid 1px @color-default;
  }
}
</style>
