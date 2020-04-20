<template>
<div class="page-navbar">
  <button
    v-if="$route.name === 'home'"
    @click="$router.push('skills')"
    v-text="$t('Skills')">
  </button>

  <button
    v-if="$route.name === 'home'"
    @click="$router.push('contacts')"
    v-text="$t('Contacts')">
  </button>

  <button
    v-if="$route.name !== 'home'"
    @click="$router.push('home')"
    v-text="`<- ${$t('Back')}`">
  </button>
</div>
</template>

<style lang="less">
@import url("~@/styles/_variables.less");

.page-navbar {
  width: 100%;
  box-sizing: border-box;

  button {
    width: 14rem;
    margin: 0 1rem;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-family: @font-family-secondary;
    animation: fadein .5s;
    padding: 0;
  }
}
</style>
