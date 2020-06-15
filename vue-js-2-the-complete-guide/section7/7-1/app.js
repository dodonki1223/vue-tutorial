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
    return {
      status: 'Critical'
    }
  },
  template: '<p>Server Status: {{ status }}</p>'
})

new Vue({
  el: '#app',
})
