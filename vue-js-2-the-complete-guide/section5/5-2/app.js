/*
    Vue.jsのライフサイクルの関係を見るためのサンプルです
 */
new Vue({
  el: '#app',
  data: {
    title: 'The VueJS Instance'
  },
  // Vue.js にインスタンスを作成前
  beforeCreate: function() {
    console.log('beforeCreate()')
  },
  // Vue.js にインスタンスを作成
  created: function() {
    console.log('created()')
  },
  // ブラウザに表示される内容はまだ反映されていない
  beforeMount: function() {
    console.log('beforeMount()')
  },
  // マウントされてブラウザに表示される
  mounted: function() {
    console.log('mounted()')
  },
  /*
    更新対象がない場合はUpdate関連のメソッドは実行されない
      `Update Title` のボタンの２回目のクリック時は実行されない
   */
  // 一部のデータが更新される前
  beforeUpdate: function() {
    console.log('beforeUpdate()')
  },
  // 一部のデータが更新された時
  updated: function() {
    console.log('updated()')
  },
  // Vue.jsのインスタンスを破棄する前に実行される
  beforeDestroy: function() {
    console.log('beforeDestroy()')
  },
  // Vue.jsのインスタンスを破棄する時
  destroyed: function() {
    console.log('destroyed()')
  },
  methods: {
    destroy: function() {
      /*
          このメソッドを実行するとVue.jsの管理化からはずれ
          `Update Title` のボタンをクリックしても反応しなくなります
       */
      this.$destroy()
    }
  }
})
