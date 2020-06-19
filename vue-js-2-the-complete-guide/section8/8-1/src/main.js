import Vue from 'vue'
import App from './App.vue'

/*
    名前付きの定数
      この eventBus は兄弟間のコンポーネントでデータを更新するために使用する
      下記、Vue.jsのインスタンスよりも先に宣言する必要がある
      宣言しないとエラーになって使用できない
      ※あとに宣言するとVue.jsのインスタンスが感知出来ないため
        new Vue({
          el: '#app',
          render: h => h(App)
        })
 */
export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age)
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
