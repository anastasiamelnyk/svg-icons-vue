<template>
  <Page>
    <div>
      <h1 class="main-page__header">
        <IconInline
          ref="iconInline"
          iconName="magic-wand"
          width="150"
          height="150"
          class="svg-icon"
          @mouseenter.native="magicWandMouseEnter"
          @mouseleave.native="magicWandMouseLeave"
        />
        Perfect new year party recipe
      </h1>
    </div>
  </Page>
</template>

<script>
export default {
  name: 'app',

  computed: {
    magicWandIcon() {
      const { iconInline } = this.$refs;
      const pathClasses = ['.path1', '.path4', '.path2', '.path5'];
      const getSelector = this.getBySelector(iconInline.$el);

      return pathClasses.reduce((prev, cur, i) => {
        return {
          ...prev,
          [`star${i+1}rtl`]: getSelector(cur),
        }
      },{})
    },
  },

  methods: {
    getBySelector(el) {
      return el.querySelector.bind(el)
    },

    magicWandMouseEnter() {
      this.magicWandIcon.star1rtl.setAttribute('transform', 'translate(150 -30)');
      this.magicWandIcon.star2rtl.setAttribute('transform', 'translate(-50 -30)');
      this.magicWandIcon.star3rtl.setAttribute('transform', 'translate(0 30)');
      this.magicWandIcon.star4rtl.setAttribute('transform', 'translate(110 210)');
    },

    magicWandMouseLeave() {
      this.magicWandIcon.star1rtl.setAttribute('transform', 'translate(0)');
      this.magicWandIcon.star2rtl.setAttribute('transform', 'translate(0)');
      this.magicWandIcon.star3rtl.setAttribute('transform', 'translate(0)');
      this.magicWandIcon.star4rtl.setAttribute('transform', 'translate(0)');
    },
  },
}
</script>

<style lang="scss">
@import '@style';

.main-page__header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.svg-icon {
  margin-right: 30px;
  fill: gold;
  stroke: goldenrod;
  stroke-width: 3;
  transition: all .5s;

  &:hover {
    fill: antiquewhite;
    stroke: goldenrod;
    stroke-width: 9;
  }
}
</style>
