<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <!-- 
        通常のプロパティのように使用できる  
     -->
    <p>User Name: {{ switchName() }}</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetFn()">Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from '../main'

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
    },
    resetFn: Function,
    userAge: Number
  },
  methods: {
    switchName() {
      return this.myName.split("").reverse().join("")  
    },
    resetName() {
      /*
          プロパティが文字列、数値、bool値などのプリミティブではなく
          オブジェクトまたは配列の場合は参照型です
            参照型はメモリに１つだけ存在する
          オブジェクトや配列などを変数に格納するとそれはメモリ内の場所へのポインタのみを格納する
          親から子コンポーネントにオブジェクトまたは配列を渡す場合は実際にはメモリ内のその場所へのポインタを渡している
          子コンポーネントで変更するとメモリ内のオブジェクトが変更される
            this.myName = 'Max' こういう感じで記述すると ポインタ値 が 文字列 で変更されてしまう
            本来ならポインタ値の中の値を変更する必要があるので上の書き方だと正しく動作しない（親コンポーネントのボタンで名前の変更ができなくなる）
       */
      this.myName = 'Max'
      this.$emit('nameWasReset', this.myName)
    }
  },
  created() {
    /*
        eventBus で ageWasEdited イベントの時に age をセットするようにする
        データは eventBus で管理する仕組み グローバルな扱いになりそう
        $on で ageWasEdited イベントを監視している
     */
    eventBus.$on('ageWasEdited', (age) => {
      this.userAge = age
    })
  }
}
</script>

<style scoped>
  div {
    background-color: lightcoral;
  }
</style>
