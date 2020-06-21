<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr>
        <p>{{ selectedComponent }}</p>
        <!-- 
            <動的コンポーネント>
              テンプレート内のパーツを別のパーツに置き換える方法
              component は Vue.js の予約語
              コンポーネント名で動的に切り替えることができる
          -->
        <component :is="selectedComponent">
          <p>Default Content</p>
        </component>
        <!-- <app-quote>
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p>A wonderful Quote</p>
        </app-quote> -->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote.vue'
import Author from './components/Author.vue'
import New from './components/New.vue'

export default {
  data: function() {
    return {
      quoteTitle: 'The Quote',
      selectedComponent: 'appQuote',
    }
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New,
  }
}
</script>

<style>
</style>
