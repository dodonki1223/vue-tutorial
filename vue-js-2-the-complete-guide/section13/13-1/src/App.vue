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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'Hello there!'
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
  }
}
</script>

<style>

</style>
