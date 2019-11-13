<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>スロット</h1>
    <!-- スロットコンテンツ -->
    <div>
      <navigation-link url="/profile">
        <!-- Font Awesome のアイコンを追加 -->
        <span class="fa fa-user"></span>
        <!-- コンポーネントを使ってアイコンを追加 -->
        <font-awesome-icon icon="user" />
        Your Profile
      </navigation-link>
    </div>
    <!-- コンパイルスコープ -->
    <div>
      <!-- 
        親テンプレート内のすべてのものは親のスコープでコンパイルされ、
        子テンプレート内の全てのものは子のスコープでコンパイルされる 
      -->
      <div>
        <navigation-link url="/profile">
          Logged in as {{ user.name }}
        </navigation-link>
      </div>
      <div>
        <navigation-link url="/profile">
          Clicking here will send you to: {{ url }}
          <!-- 
            `url` はundefinedになります。というのも、このコンテンツは
            <navigation-link>コンポーネント _の中で_ 定義されるのではなく、
            <navigation-link>コンポーネント _に_ 渡されるからです
           -->
        </navigation-link>
      </div>
    </div>
    <!-- フォールバックコンテンツ -->
    <div>
      <!-- コンテンツの指定なし -->
      <submit-button></submit-button>
      <!-- コンテンツの指定 -->
      <submit-button>Save</submit-button>
    </div>
    <!-- 名前付きスロット -->
    <div>
      <!-- デフォルトのスロットに何も指定しないバージョン -->
      <div>
        <base-layout>
          <template v-slot:header>
            <h1>Here might be a page title</h1>
          </template>

          <p>A paragraph for the main content.</p>
          <p>And another one.</p>

          <template v-slot:footer>
            <p>Here's some contact info</p>
          </template>
        </base-layout>
      </div>  
      <!-- デフォルトのスロットに指定するバージョン -->
      <div>
        <base-layout>
          <template v-slot:header>
            <h1>Here might be a page title</h1>
          </template>

          <template v-slot:default>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>            
          </template>

          <template v-slot:footer>
            <p>Here's some contact info</p>
          </template>
        </base-layout>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationLink from './components/NavigationLink.vue'
import SubmitButton from './components/Button.vue'
import BaseLayout from './components/BaseLayout.vue'

export default {
  name: 'app',
  components: {
    NavigationLink,
    SubmitButton,
    BaseLayout
  },
  data: function() {
    return {
      user: {
        name: 'ゴリラ'
      }
    }
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
