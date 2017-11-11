<template>
  <div :class="['VueTwitterCounter']">
    <span v-if="counterNumber !== false" :style="{ color: isInDanger ? danger : 'inherit' }">{{ counterNumber }}</span>
    <svg viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet">
      <circle cx="50%" cy="50%" r="8" fill="none" stroke-width="1" :stroke="underlay"></circle>
      <circle cx="50%" cy="50%" r="8" fill="none" stroke-width="2" :stroke="currentColor" :stroke-dasharray="dashArray" :style="animateStyle"></circle>
    </svg>
  </div>
</template>

<script>
  export default {
    props: {
      /*
       * The min length to start show the counter number.
       */
      startsAt: {
        type: Number,
        default: 20,
      },

      /*
       * The max length.
       */
      maxLength: {
        type: Number,
        default: 280,
      },

      /*
       * The current length of whatever you wan't to.
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
      },

      /*
       * Safe color.
       */
      safe: {
        type: String,
        default: '#1da1f2',
      },

      /*
       * Warn color.
       */
      warn: {
        type: String,
        default: '#ffad1f',
      },

      /*
       * Danger color.
       */
      danger: {
        type: String,
        default: '#e0245e',
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
        return this.maxLength - this.currentLength;
      },

      counterNumber () {
        if (this.rest <= this.startsAt) {
          return this.rest;
        }

        return false;
      },

      currentColor () {
        if (this.startsAt < this.rest) {
          return this.safe;
        }

        if (this.rest > 0) {
          return this.warn;
        }

        return this.danger;
      },

      dashArray () {
        const percent = this.currentLength * 50 / this.maxLength;

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
    },
  };
</script>

<style lang="scss">
  .VueTwitterCounter {
    svg {
      width: 20px;
    }
  }
</style>