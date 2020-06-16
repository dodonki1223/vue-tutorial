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
import Servers from './Servers.vue'
import ServerDetails from './ServerDetails.vue'
import AppHeader from './Header.vue'
import AppFooter from './Footer.vue'

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
