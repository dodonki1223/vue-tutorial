new Vue({
  el: '#exercise',
  data: {
    value: ''
  },
  methods: {
    clickedAlert: function() {
      alert('Alert!')
    },
    storeInputValue: function(event) {
      this.value = event.target.value
    }
  }
});
