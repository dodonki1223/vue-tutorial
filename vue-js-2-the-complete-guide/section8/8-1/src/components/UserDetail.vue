<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <!-- 
        通常のプロパティのように使用できる
     -->
    <p>User Name: {{ switchName() }}</p>
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
  props: ['myName'],
  methods: {
    switchName() {
      return this.myName.split("").reverse().join("")
    }
  }
}
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
