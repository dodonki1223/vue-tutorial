<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>スロット</h1>
    <div>
      
      <navigation-link url="/profile">
        <!-- Font Awesome のアイコンを追加 -->
        <span class="fa fa-user"></span>
        <!-- コンポーネントを使ってアイコンを追加 -->
        <font-awesome-icon icon="user" />
        Your Profile
      </navigation-link>
    </div>
  </div>
</template>

<script>
import NavigationLink from './components/NavigationLink.vue'

export default {
  name: 'app',
  components: {
    NavigationLink
  }
}
</script>

<style>
/* CDNでFont Awesomeを読み込む方法 */
@import "https://use.fontawesome.com/releases/v5.1.0/css/all.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
