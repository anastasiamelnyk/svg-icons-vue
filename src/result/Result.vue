<template>
  <Page>
    <h1>
      Result
    </h1>
    <p class="result__text">
      Enjoy!
      <IconInline
        class="result__icon"
        iconName="diamond"
        fill="transparent"
        stroke="rgb(72, 61,65)"
      />
    </p>
  </Page>
</template>

<script>
export default {
  name: 'Result',
}
</script>

<style lang="scss">
@import '@style';

.result__text {
  display: flex;
  align-items: center;
  font-size: 20px;
}

@keyframes animateDasharray {
  from {
    stroke-dasharray: 300;
  }

  to {
    stroke-dasharray: 3000;
  }
}

.result__icon {
  margin-left: 30px;
  stroke-width: 7;
  animation-name: animateDasharray;
  animation-duration: 3s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
}
</style>
