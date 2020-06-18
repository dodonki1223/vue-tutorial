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
      Vue.jsが暗黙的に dat a オブジェクトと紐付けてくれる
   */
  props: {
    /*
        props のデータの型を指定することができます今回の場合は文字列で設定しているますが
        数値を渡すと以下のようなエラーが console に表示されます
          vue.esm.js?efeb:628 [Vue warn]: Invalid prop: type check failed for prop "myName". Expected String with value "1", got Number with value 1.
        type 以外にも required、default なども使用が可能です
     */
    myName: {
      type: String
    }
  },
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
