<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
/*
    パスが同じで同じコンポーネントを呼び出す時は再作成されないため以下のデータが変わらない事象が発生します
       data() {
         return {
           id: this.$route.params.id
         }
       },
    watch を使用して id が変わるようにします
      $route の値が変わるたび変更するようにします
    vue-router 2.2 以降だと props でルートパラメータを抽出することができるようになったので公式のサンプル
    を参考にすると違うやり方ができます
      https://github.com/vuejs/vue-router/tree/dev/examples/route-props
 */
export default {
  methods: {
    navigateToHome() {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
