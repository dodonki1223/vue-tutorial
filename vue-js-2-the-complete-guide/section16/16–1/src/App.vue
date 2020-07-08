<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Routing</h1>
        <!-- 
            名前付きビュー
              詳しくはこちら: https://router.vuejs.org/ja/guide/essentials/named-views.html#%E3%83%8D%E3%82%B9%E3%83%88%E3%81%95%E3%82%8C%E3%81%9F%E5%90%8D%E5%89%8D%E4%BB%98%E3%81%8D%E3%83%93%E3%83%A5%E3%83%BC
          -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
