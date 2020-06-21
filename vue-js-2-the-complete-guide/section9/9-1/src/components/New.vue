<template>
  <div>
    <h3>The New</h3>
    <!--  
        Quote では動的コンポーネントを使用しているが、切り替えているコンポーネントは
        新規に作成して破棄しています
        ボタンでコンポーネントを切り替えると Destroyed のログ毎回出力されます
      -->
    <button @click="counter++">Increase!</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 0
    }
  },
  destroyed() {
    console.log('Destroyed!')
  },
  // 別のコンポーネントの時に移動した時に実行される
  deactivated() {
    console.log('Deactivated!')
  },
  // コンポーネントが実行されている時に実行される
  activated() {
    console.log('Activated!')
  }
}
</script>

<style>
</style>
