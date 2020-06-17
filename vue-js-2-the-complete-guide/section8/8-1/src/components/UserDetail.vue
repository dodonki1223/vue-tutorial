<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <!-- 
        myName などにしても動作します……が単一のテンプレートのみ大丈夫です
        これは dom 仕様で正しく動作しなくなるのでキャメルケースは控えたほうがよいでしょう
     -->
    <p>User Name: {{ myName }}</p>
  </div>
</template>

<script>
export default {
  /*
      外部から受け取るためのプロパティになる
      重要なのは <p>User Name: {{ myName }}</p> で使用している myName と一致している
      必要があります
      Vue.jsが暗黙的に data オブジェクトと紐付けてくれる
   */
  props: ['myName']
}
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
