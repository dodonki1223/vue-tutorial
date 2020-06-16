<template>
  <li class="list-group-item">
    Server #{{ serverIndex }}
  </li>
</template>

<script>
export default {
  props: {
    serverIndex: {
      type: Number,
      required: Number,
    }
  }
}
</script>

<style>

</style>
