var data = { status: 'Critical' }

Vue.component('my-cmp', {
  /*
      new Vueの時は下記のような記述だったのにComponentでは関数なのか？
      ------------------------------------------- 
        data: {
          status: 'Critical'
        }
      ------------------------------------------- 
      関数でオブジェクトをラップすることで他から
      データに干渉しないようにするためである
   */
  data: function() {
    /*
        var data = { status: 'Critical' } を使用すると
        Vue.component('my-cmp', {
          data: return data
        })
        上記のようにすると……
        ２つあるコンポーネントのボタンをクリックすると両方とも更新されてしまう
        なので　data は必ず関数で返す必要がある
     */
    return {
      status: 'Critical'
    }
  },
  template: '<p>Server Status: {{ status }} (<button @click="changeStatus">Change</button>)</p>',
  methods: {
    changeStatus: function() {
      this.status = 'Normal'
    }
  }
})

new Vue({
  el: '#app',
})
