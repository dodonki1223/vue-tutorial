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
  components: {
    'servers': Servers,
    'server-details': ServerDetails,
    'app-header': AppHeader,
    'app-footer': AppFooter,
  }
}
</script>

<style>

</style>
