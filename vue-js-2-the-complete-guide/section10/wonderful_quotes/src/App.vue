<template>
  <div class="container">
    <!--  
      newQuote($event)の($event)は省略できる
      Vue.js が暗黙的に解釈してくれるため
      -->
    <app-new-quote
      @quoteAdded="newQuote">
    </app-new-quote>
    <app-quote-grid :quotes="quotes"></app-quote-grid>
  </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue'
import NewQuote from './components/NewQuote.vue'

export default {
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
  },
  data: function() {
    return {
      quotes: [
        'Just a Quote to see something',
        'Second Quote'
      ],
      maxQuotes: 10
    }
  },
  methods: {
    newQuote(quote) {
      this.quotes.push(quote)
    }
  }
}
</script>

<style>
</style>
