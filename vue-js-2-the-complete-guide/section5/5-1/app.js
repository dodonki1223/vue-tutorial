var vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
})

// 外部からVueのインスタンスにアクセスする方法
setTimeout(function() {
  vm1.title = 'Changed by Timer'
}, 3000)

// １つの画面に複数のVueインスタンスを作成することは可能
var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second Instance'
  },
  methods: {
    // 外部からVueのインスタンスにアクセスする方法
    onChange: function() {
      vm1.title = 'Changed!'
    }
  }
})
