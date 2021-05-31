<template>
<div class="avatar">
  <img
    srcset="/img/avatar-xs.png 500w,
            /img/avatar.png 624w"
    sizes="(max-width: 600px) 250px, 312px"
    :alt="alt"
    width="200px"
    height="200px"
  />
</div>
</template>

<script>
export default {
  props: {
    alt: {
      type: String
    }
  }
}
</script>

<style lang="less">
.avatar {
  display: inline-block;
  font-size: 2rem;
  width: 10em;
  height: 10em;

  img {
    width: 100%;
    height: auto;
  }
}
</style>
