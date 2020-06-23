<template>
  <div class="row">
    <app-quote
      v-for="(quote, index) in quotes" 
      :key="index"
      :quote-index="index">
      {{ quote }}
    </app-quote>
  </div>  
</template>

<script>
import Quote from './Quote.vue'

export default {
  components: {
    appQuote: Quote
  },
  props: ['quotes']
}
</script>

<style>

</style>
