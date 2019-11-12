<template>
  <div>
    <span>子供だよ：<button @click="updateValue">Reverse String Update {{ title }}</button></span>
    <p>{{ animal }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    animal: String
  },
  methods: {
    updateValue: function() {
      this.$emit('update:title', this.title.split('').reverse().join(''))
    }
  }
}
</script>
