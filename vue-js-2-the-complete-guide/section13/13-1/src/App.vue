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
        <hr>
        <!--  
            filters の代替手段は computed を使用すること
            v-for のようなものに filters を使用するとパフォーマンスが悪すぎるのでおすすめしない
          -->
        <input v-model="filterText">
        <ul>
          <li v-for="(fruit, index) in filteredFruits" :key="index">{{ fruit }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  }
}
</script>

<style>

</style>
