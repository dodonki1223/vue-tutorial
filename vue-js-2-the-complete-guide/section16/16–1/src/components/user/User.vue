<template>
  <div>
    <h1>The User Page</h1>
    <hr>
    <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
    <p>Loaded ID: {{ id }}</p>
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
 */
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  watch: {
    '$route'(to, from) {
      this.id = to.params.id
    }
  },
  methods: {
    navigateToHome() {
      this.$router.push('/')
    }
  }
}
</script>
