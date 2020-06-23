<template>
  <div class="container">
    <app-quote-grid :quotes="quotes"></app-quote-grid>
    <app-new-quote
      @newQuote="newQuote($event)">
    </app-new-quote>
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
