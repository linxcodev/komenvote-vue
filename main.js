// here your code
Vue.component('template-cs', {
  template: '#comment-template',
  props: ['comment'],
  data: function() {
    return{
      plus: false
    }
  },
  methods: {
    sundul: function() {
      this.plus = !this.plus
    }
  },
  computed: {
    coto: function() {
      if (this.plus) {
        return this.comment.coto + 1
      } else {
        return this.comment.coto
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
    ],
    text_comment: ''
  },
  methods: {
    postComment: function(){
      this.comments.push(
        { body: this.text_comment, time:'02-14-18', coto:0 }
      )
      this.text_comment = ''
    }
  }
});
