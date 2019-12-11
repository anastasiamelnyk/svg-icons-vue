<template>
  <Page>
    <h1>Process</h1>
    <div class="process__lab-icon">
      <IconInline
        iconName="lab"
        ref="iconLab"
        class="icon-lab"
        width="100%"
        height="100%"
        :gradients="gradientsInlineIcon"
        @click.native="animateLab"
    />
  </div>
  </Page>
</template>

<script>
export default {
  name: 'Process',

  data: () => ({
    gradientsInlineIcon: ['lab'],
    iconLab: null,
    queryLab: null,
  }),

  mounted() {
    const { iconLab: iconLabRef } = this.$refs;

    this.iconLab = iconLabRef.$el;
    this.queryLab = this.iconLab.querySelector.bind(this.iconLab);
  },

  computed: {
    labIcon({ queryLab, iconLab }) {
      return {
        svg: iconLab,
        path: queryLab('.lab-path'),
        circle1: queryLab('.lab-circle1'),
        circle2: queryLab('.lab-circle2'),
        circle3: queryLab('.lab-circle3'),
        gradientStop1: queryLab('.stop1'),
        gradientStop3: queryLab('.stop3'),
      };
    },
  },

  methods: {
    handleClass(el, cl, action) {
      const el1 = el.classList;
      el1[action].call(el1, cl);
    },

    manipulateClass(el, arr, action) {
      arr.forEach((cur) => {
        this.handleClass(el[cur], cur, action);
      });
    },

    animateLab() {
      const { circle3 } = this.labIcon;

      this.labIcon.svg.setAttribute('fill', 'url(#lab-primary)');
      this.labIcon.gradientStop1.classList.add('gradient-animation');
      this.labIcon.gradientStop3.classList.add('gradient-animation-reversed');
      this.manipulateClass(this.labIcon, ['circle1', 'circle2', 'circle3'], 'add');

      setTimeout(() => {
        this.labIcon.svg.setAttribute('fill', 'rgb(72, 61,65)');
        this.labIcon.gradientStop1.classList.remove('gradient-animation');
        this.labIcon.gradientStop3.classList.remove('gradient-animation-reversed');
        this.manipulateClass(this.labIcon, ['circle1', 'circle2', 'circle3'], 'remove');
      }, 3000);
    },
  },
}
</script>

<style lang="scss">
@import '@style';

.process__lab-icon {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 350px;
}

// animation for lab icon
@keyframes labGradients {
  from {
    stop-color: rgb(72, 61,65);
  }

  to {
    stop-color: #ff8888;
  }
}

.gradient-animation {
  animation-name: labGradients;
  animation-duration: 3s;
}

.gradient-animation-reversed {
  animation-name: labGradients;
  animation-duration: 3s;
  animation-direction: reverse;
}

@keyframes animateCircle1 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-10px);
  }
}
.circle1 {
  animation-name: animateCircle1;
  animation-duration: 2s;
  animation-delay: .5s;
  animation-fill-mode: forwards;
}

@keyframes animateCircle2 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-13px);
  }
}
.circle2 {
  animation-name: animateCircle2;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

@keyframes animateCircle3 {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-15px);
  }
}
.circle3 {
  animation-name: animateCircle3;
  animation-duration: 2.2s;
  animation-delay: .3s;
  animation-fill-mode: forwards;
}
</style>
