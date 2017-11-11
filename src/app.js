import Vue from 'vue';
import VueTwitterCounter from './components/VueTwitterCounter.vue';

window.app = new Vue({
  el: '#app',

  components: {
    VueTwitterCounter,
  },

  data () {
    return {
      message: '',
    };
  },

  computed: {
    message_length () {
      return this.message.length;
    },
  },
});
