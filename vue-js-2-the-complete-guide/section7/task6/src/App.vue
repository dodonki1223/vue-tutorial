<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-header></app-header>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
          <server-detail v-for="index in 5" :key="index" :serverIndex="index"></server-detail>
        </ul>
      </div>
      <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12">
        <app-footer></app-footer>
      </div>
    </div>
  </div>
</template>

<script>
import ServerDetail from './ServerDetail.vue'
import AppHeader from './Header.vue'
import AppFooter from './Footer.vue'

export default {
  components: {
    'server-detail': ServerDetail,
    'app-header': AppHeader,
    'app-footer': AppFooter,
  }
}
</script>

<style>

</style>
