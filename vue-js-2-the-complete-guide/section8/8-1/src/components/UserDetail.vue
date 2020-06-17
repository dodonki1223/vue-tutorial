<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ name }}</p>
  </div>
</template>

<script>
export default {
  /*
      外部から受け取るためのプロパティになる
      重要なのは <p>User Name: {{ name }}</p> で使用している name と一致している
      必要があります
      Vue.jsが暗黙的に data オブジェクトと紐付けてくれる
   */
  props: ['name']
}
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
