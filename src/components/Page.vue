<template>
<div class="page">
  <Sidebar />
  <div>
    <slot />
  </div>
</div>
</template>

<script>
import Sidebar from './Sidebar';

export default {
  name: 'Page',

  components: {
    Sidebar,
  },
}
</script>

<style lang="scss">
@import '@style';
.page {
  height: 100vh;
  display: flex;
  background-color: $general-bg-color;
  color: $main-font-color;
}
</style>
