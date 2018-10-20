// here your code
Vue.component('template-cs', {
  template: '#comment-template',
  props: ['comment'],
  data: function() {
    return{
      plus: false,
      minus: false
    }
  },
  methods: {
    sundul: function() {
      this.plus = !this.plus
      this.minus = false
    },
    gandul: function() {
      this.minus = !this.minus
      this.plus = false
    }
  },
  computed: {
    coto: function() {
      if (this.plus) {
        this.comment.coto + 1
      } else if (this.minus) {
        this.comment.coto - 1
      } else {
        this.comment.coto
      }
    }
  }
});

var vm = new Vue({
  el: '#app',
  data: {
    comments: [
      { body: 'Ini komen pertama', time:'02-12-18', coto:0 },
      { body: 'Ini komen kedua', time:'03-12-18', coto:2 },
      { body: 'Ini komen ketiga', time:'02-14-18', coto:6 }
    ]
  }
});
