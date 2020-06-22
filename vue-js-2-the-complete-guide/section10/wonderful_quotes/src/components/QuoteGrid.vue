<template>
  <div class="row">
    <quote v-for="(quote, index) in quotes" :key="index">{{ quote }}</quote>
  </div>  
</template>

<script>
import Quote from './Quote.vue'

export default {
  components: {
    Quote: Quote
  },
  props: ['quotes']
}
</script>

<style>

</style>
