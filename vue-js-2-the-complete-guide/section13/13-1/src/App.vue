<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!--  
            グローバル、ローカルの filters の使用方法
            toUppercase（ローカル）ですべて大文字に変換し to-lowercase（グローバル）で
            すべて小文字に変換します
            下記のやり方が filters のチェーンの仕方でもあります
          -->
        <p>{{ text | toUppercase | to-lowercase }}</p>
        <!--  
            Mixin で使用している fruits に値を追加するとすべての Mixin で値が追加されるわけではない
            コピーされるため、対象の Mixin にだけデータが追加される
            Button をクリックすると挙動を確認することができます
          -->
        <button @click="fruits.push('Berries')">Add New Item</button>
        <!--  
            filters の代替手段は computed を使用すること
            v-for のようなものに filters を使用するとパフォーマンスが悪すぎるのでおすすめしない
          -->
        <input v-model="filterText">
        <ul>
          <li v-for="(fruit, index) in filteredFruits" :key="index">{{ fruit }}</li>
        </ul>
        <hr>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import List from './List.vue'
import { fruitMixin } from './fruitMixin'

export default {
  /*
      data と mixin の値が被っても Vue.js 側でちゃんとマージしてくれる
      実行される順序が必ず先に Mixin が実行され最後に Component が実行されるためである
      Mixin が破壊的に壊されることがない理由です
   */
  mixins: [fruitMixin],
  data() {
    return {
      text: 'Hello there!',
      fruits: ['Apple', 'Banana', 'Mango', 'Melon'],
      filterText: ''
    }
  },
  /*
      filters は data オブジェクト値を加工したい時に使用する
      今回の場合だと、text を大文字に変換したいが data オブジェクトの
      textは変更したくないが加工したい時に使用する
   */
  filters: {
    toUppercase(value) {
      return value.toUpperCase()
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((element) => {
        return element.match(this.filterText)
      })
    }
  },
  components: {
    appList: List
  }
}
</script>

<style>

</style>
