<template>
  <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:label="label"
        v-on="inputListeners"
      >
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  model: {
    prop: 'label'
  },
  props: ['label'],
  computed: {
    inputListeners: function() {
      var vm = this
      // `Object.assign` が複数のオブジェクトを新しいオブジェクトにマージします
      return Object.assign({},
        // 親からのすべてのリスナを追加します
        this.$listeners,
        // そしてカスタムリスナを追加したり
        // すでに存在するリスナの振る舞いを変えることができます
        {
          // こうすることでコンポーネントが v-model と動作します
          input: function(event){
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  }
}
</script>
