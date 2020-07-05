<template>
<div class="container">
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1 class="text-center">The Super Quiz</h1>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"></div>
      <component :is="mode"></component>
  </div>
</div>
</template>

<script>
import Question from './components/Question.vue'
import Answer from './components/Answer.vue'

export default {
  data() {
    return {
      mode: 'app-question',
    }
  },
  components: {
    appQuestion: Question,
    appAnswer: Answer,
  }
}
</script>

