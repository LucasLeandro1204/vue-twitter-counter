<template>
  <div :class="['VueTwitterCounter']">
    <span v-if="counterNumber !== false" :style="{ color: isInDanger ? danger : 'inherit' }">{{ counterNumber }}</span>
    <svg viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet">
      <circle cx="50%" cy="50%" r="8" fill="none" stroke-width="1" :stroke="underlay"></circle>
      <transition name="fade">
        <circle cx="50%" cy="50%" r="8" fill="none" stroke-width="2" :stroke-linecap="linecap" :stroke="currentColor" :stroke-dasharray="dashArray" :style="animateStyle" v-show="show"></circle>
      </transition>
    </svg>
  </div>
</template>

<script>
  const colorValidator = color => /#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(color);

  export default {
    props: {
      /*
       * The min rest to show the warns.
       */
      warnLength: {
        type: Number,
        default: 20,
      },

      /*
       * The length to be in danger.
       */
      dangerAt: {
        type: Number,
        default: 280,
      },

      /*
       * The current length of whatever you want to.
       */
      currentLength: {
        type: Number,
        required: true,
      },

      /*
       * Underlay counter color.
       */
      underlay: {
        type: String,
        default: '#ccd6dd',
        validator: colorValidator,
      },

      /*
       * Safe color.
       */
      safe: {
        type: String,
        default: '#1da1f2',
        validator: colorValidator,
      },

      /*
       * Warn color.
       */
      warn: {
        type: String,
        default: '#ffad1f',
        validator: colorValidator,
      },

      /*
       * Danger color.
       */
      danger: {
        type: String,
        default: '#e0245e',
        validator: colorValidator,
      },

      /*
       * Round progress circle edges.
       */
      round: {
        type: Boolean,
        default: false,
      },

      /*
       * Animate the progress circle.
       */
      animate: {
        type: Boolean,
        default: false,
      },

      /*
       * The animation speed in ms.
       */
      speed: {
        type: Number,
        default: 150,
      },
    },

    computed: {
      rest () {
        return this.dangerAt - this.currentLength;
      },

      counterNumber () {
        if (this.rest <= this.warnLength) {
          return this.rest;
        }

        return false;
      },

      currentColor () {
        if (this.warnLength < this.rest) {
          return this.safe;
        }

        if (this.rest > 0) {
          return this.warn;
        }

        return this.danger;
      },

      dashArray () {
        const percent = Math.min(this.currentLength * 50 / this.dangerAt, 50);

        return `${percent},100`;
      },

      isInDanger () {
        return this.rest <= 0;
      },

      animateStyle () {
        if (this.animate) {
          return {
            transition: `${this.speed}ms`,
          };
        }
      },

      show () {
        return this.currentLength > 0;
      },

      linecap () {
        return this.round ? 'round' : 'inherit';
      },
    },
  };
</script>

<style lang="scss">
  .VueTwitterCounter {
    svg {
      width: 20px;
      transform: rotate(-90deg);
    }
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>