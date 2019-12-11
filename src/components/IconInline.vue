<template>
<svg
  xmlns="http://www.w3.org/2000/svg"
  aria-role="presentation"
  aria-hidden="true"
  :aria-label="`${iconName} icon`"
  :fill="fill"
  :stroke="stroke"
  :width="width"
  :height="height"
>
  <svg v-html="iconString"></svg>
  <symbol
      v-if="gradients.length > 0"
      v-html="gradientsData"
    />
</svg>
</template>

<script>
export default {
name: 'IconInline',

props: {
  iconName: {
    type: String,
    required: true,
  },

  fill: {
    type: String,
    default: 'rgb(72, 61,65)',
  },

  stroke: {
    type: String,
    default: '',
  },

  width: {
    type: String,
    default: '100',
  },

  height: {
    type: String,
    default: '100',
  },

  gradients: {
    type: Array,
    default: () => [],
  },
},

data: () => ({
  iconString: '',
  gradientsData: [],
}),

mounted() {
  this.iconString = require(`../images/icons/${this.iconName}.svg?inline`);

  if (this.gradients.length > 0) {
      this.gradientsData = this.gradients
        .map(cur => require(`../images/icons/gradients/${cur}-gradient.svg?inline`))
        .join('');
    }
},
}
</script>
