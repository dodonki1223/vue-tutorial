/*
  $elについて
    div#app1を参照している
    監視対象のHTMLの情報を保持している
  $dataについて
    データプロパティを保持するオブジェクト
    下記のようにVueのインスタンスの外側で設定することができる
    データの初期化の１つの方法

  Vue.jsは固有結界だけを作るのではなく、普通のJavaScriptとなんらかわらない
  通常のJavaScriptと使えるってことが重要なこと！！！！
  最小構成で設定することができることが重要です！！！！
  通常のJavaScriptと共存させられる
 */
var data = {
    title: 'The VueJS Instance',
    showParagraph: false
}

var vm1 = new Vue({
  el: '#app1',
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      /*
        Vue.jsが管理しているhtml要素に簡単にアクセスする方法が $refs プロパティです
        Vueが管理している html 要素に ref="xxxx" を設定してあげるだけでアクセスできるようになる
        QuerySelectorを使用しないでクソ簡単にhtml要素にアクセスできるようになる
       */
      this.$refs.myButton.innerText = 'Test'
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
  vm1.show()
}, 3000)

vm1.$refs.heading.innerText = 'Something else'

/*
  プロパティを追加することはできるがこれは通常のJavaScriptの動作
  こんな形で追加されたプロパティはVue.jsが管理していないプロパティ
  なので使うことができない
 */
vm1.newProp = 'New!'
console.log(vm1.$data === data)

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
