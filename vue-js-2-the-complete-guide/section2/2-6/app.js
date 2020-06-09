new Vue({
  el: '#app',
  data: {
    color: 'gray',
    width: 100
  },
  computed: {
    myStyle: function() {
      // Objectで返す必要がある
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
      }
    }
  }
})
