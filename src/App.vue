<template>
<router-view :app-version="appVersion"></router-view>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    appVersion: require('@/../package.json').version
  })
}
</script>
