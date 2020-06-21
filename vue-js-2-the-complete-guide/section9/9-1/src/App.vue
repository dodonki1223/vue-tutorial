<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <!--  
          Dataオブジェクトは子コンポーネントで正しくレンダリングされる
          ただし、style に関しては子コンポーネント側のものしか正しく動作しない
         -->
        <app-quote>
          <!-- 
            <名前付きslot>
              slot="title" とすることで 子コンポーネント内の <slot name="title"></slot> の部分にレンダリングされるようになります 
            -->
          <h2 slot="title">{{ quoteTitle }}</h2>
          <p>A wonderful Quote</p>
        </app-quote>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from './components/Quote.vue'

export default {
  data: function() {
    return {
      quoteTitle: 'The Quote'
    }
  },
  components: {
    appQuote: Quote
  }
}
</script>

<style>
</style>
