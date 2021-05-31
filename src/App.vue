<template>
<router-view/>
</template>

<script>
export default {
  name: 'app',
  beforeMount () {
    document.getElementsByTagName('html')[0]
      .setAttribute('app-version', require('@/../package.json').version)
  }
}
</script>
