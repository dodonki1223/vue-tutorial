<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- v-modelを使ったコンポーネントのカスタマイズ -->
    <MyComponent
      v-on:welcome="sayHi" 
      v-on:my-event="sayHi"
      v-model="lovingVue"
      v-on:change="nowChecked"
    ></MyComponent>
    <!-- コンポーネントにネイティブイベントをバインディング -->
    <BaseInput
      v-model="label"
    ></BaseInput>
    <!-- .sync修飾子 -->
    <!-- 子供のコンポーネントから親のプロパティ値を更新することができる -->
    <div>
      <!-- 単体の値の場合 -->
      <TextDocument v-bind:title.sync="doc.title"></TextDocument>
      <!-- オブジェクトの値をすべて与える場合 -->
      <TextDocument v-bind.sync="doc"></TextDocument>
      <span>大人だよ：<input v-model="doc.title"></span>
    </div>
  </div>
</template>

<script>
import MyComponent from './components/MyComponent.vue'
import BaseInput from './components/BaseInput.vue'
import TextDocument from './components/TextDocument.vue'

export default {
  name: 'app',
  components: {
    MyComponent,
    BaseInput,
    TextDocument
  },
  data: function() {
    return {
      lovingVue: true,
      label: 'ゴリラ',
      doc: {
        title: 'キリン',
        animal: 'カバ'
      }
    }
  },
  methods: {
    sayHi: function() {
      alert('Hi')
    },
    nowChecked: function(checked) {
      alert(checked)
    },
    handleChange: function(event) {
      this.doc.title = event.target.value
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
