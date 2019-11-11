<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MyComponent
      v-on:welcome="sayHi" 
      v-on:my-event="sayHi"
      v-model="lovingVue"
      v-on:change="nowChecked"
    ></MyComponent>
    <BaseInput
      v-model="label"
    ></BaseInput>
  </div>
</template>

<script>
import MyComponent from './components/MyComponent.vue'
import BaseInput from './components/BaseInput.vue'

export default {
  name: 'app',
  components: {
    MyComponent,
    BaseInput
  },
  data: function() {
    return {
      lovingVue: true,
      label: 'ゴリラ',
    }
  },
  methods: {
    sayHi: function() {
      alert('Hi')
    },
    nowChecked: function(checked) {
      alert(checked)
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
