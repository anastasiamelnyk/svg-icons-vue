<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-role="presentation"
    aria-hidden="true"
    :aria-label="`${iconName} icon`"
    :viewbox="icon.viewBox"
    :width="width"
    :height="height"
    :fill="fill"
    :stroke="stroke"
  >
    <use :xlink:href="`#${icon.id}`" />
    <symbol
      v-if="gradients.length > 0"
      v-html="gradientsData"
    />
  </svg>
</template>

<script>
export default {
  name: 'Icon',

  props: {
    iconName: {
      type: String,
      required: true,
    },

    fill: {
      type: String,
      default: 'currentColor',
    },

    stroke: {
      type: String,
      default: 'none',
    },

    width: {
      type: String,
      default: '25px',
    },

    height: {
      type: String,
      default: '20px',
    },

    gradients: {
      type: Array,
      default: () => [],
    },
  },

  data: () => ({
    icon: {},
    gradientsData: [],
  }),

 mounted() {
    this.icon = require(`../images/icons/${this.iconName}.svg?sprite`).default;

    if (this.gradients.length > 0) {
      this.gradientsData = this.gradients
        .map(cur => require(`../images/icons/gradients/${cur}-gradient.svg?inline`))
        .join('');
    }
  },
}
</script>
