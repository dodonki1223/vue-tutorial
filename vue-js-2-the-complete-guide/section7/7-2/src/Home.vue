<template>
  <div>
    <app-server-status v-for="server in 5"></app-server-status>
  </div>
</template>

<script>
// ES6の記法を使用しコンポーネントのファイルを読み込みます
import ServerStatus from  './ServerStatus.vue'

export default {
  // import 後にはどのコンポーネントを使用するのかの情報を書き込みます
  components: {
    'app-server-status': ServerStatus
  }
}
</script>
