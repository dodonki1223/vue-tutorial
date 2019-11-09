<template>
  <div>
    <h2>カスタムイベント</h2>
    <!-- イベント名 -->
    <div>
      <div>
        <p>動くイベント</p>
        <button v-on:click="$emit('welcome')">
          Click me to be webcomed
        </button>
      </div>
      <div>
        <!-- 
          v-onイベントリスナは自動的に小文字に変換されます（HTMLが大文字小文字を判別しないため） 
          v-on:myEventはv-on:myeventになりmyEventにリスナが反応することができなくなります
          上記理由から `いつもケバブケース(kebab-case)`を使うことをお薦めします
        -->
        <p>動かないイベント</p>
        <button v-on:click="$emit('myEvent')">
          Click me to be webcomed
        </button>
      </div>
    </div>
    <!-- v-model を使ったコンポーネントのカスタマイズ -->
    <div>
      <input
        type="checkbox"
        v-bind:checked="checked"
        v-on:change="$emit('change', $event.target.checked)"
      >
      <p>現在のチェックボックスの値：{{ checked }}</p>
    </div>
  </div>
  
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  }
}
</script>
