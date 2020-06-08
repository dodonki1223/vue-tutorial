new Vue({
  el: '#exercise',
  data: {
    value: 0
  },
  methods: {
    changeValue: function(event) {
      this.value = event.target.value
    }
  },
  computed: {
    result: function() {
      return this.value === 37 ? 'done' : 'not there yet'
    }
  },
  watch: {
    value: function(value) {
      var vm = this
      setTimeout(function() {
        vm.value = 0
      }, 5000)
    }
  }
})
