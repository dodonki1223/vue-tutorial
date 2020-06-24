<template>
  <div class="container">
    <app-header></app-header>
    <!--  
      newQuote($event)の($event)は省略できる
      Vue.js が暗黙的に解釈してくれるため
      -->
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
    <div class="col-sm-12 text-center">
      <div class="alert alert-info">Info: Click on a Quote to delete it!</div>
    </div>
  </div>
</template>

<script>
import Header    from './components/Header.vue'
import QuoteGrid from './components/QuoteGrid.vue'
import NewQuote  from './components/NewQuote.vue'

export default {
  components: {
    appHeader: Header,
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
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1)
    }
  }
}
</script>

<style>
</style>
