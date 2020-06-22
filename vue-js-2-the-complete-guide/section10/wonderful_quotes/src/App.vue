<template>
  <div class="container">
    <quote-grid :quotes="quotes"></quote-grid>
  </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue'

export default {
  components: {
    QuoteGrid: QuoteGrid
  },
  data: function() {
    return {
      quotes: [
        'Just a Quote to see something',
        'Second Quote'
      ],
      maxQuotes: 10
    }
  }
}
</script>

<style>
</style>
