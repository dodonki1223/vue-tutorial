<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <servers></servers>
      <server-details></server-details>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
/* 
    より大きなプロジェクトに対応できるようにフォルダ分けをちゃんとすること
    機能単位で分けると良さそう
 */
import Servers from './components/Server/Servers.vue'
import ServerDetails from './components/Server/ServerDetails.vue'
import AppHeader from './components/Shared/Header.vue'
import AppFooter from './components/Shared/Footer.vue'

export default {
  /*
      Servers のみの指定でも動作します
        これは内部で Servers: Servers という形に変換されるらしい（Vue.jsの機能ではなくES6の機能）
      serverDetails: ServerDetails でも動作します
        Vue.js が内部で <server-details></server-details> に変換されて把握できるようになる
   */
  components: {
    Servers,
    serverDetails: ServerDetails,
    'app-header': AppHeader,
    'app-footer': AppFooter,
  }
}
</script>

<style>

</style>
