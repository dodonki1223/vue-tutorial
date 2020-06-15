<template>
  <!-- 
    template 直下は必ずたった１つの要素だけにすること 
    そうしないとトランスパイル出来なくて落ちる
    -->
  <div>
    <p>Server Status: {{ status }}</p>
    <hr>
    <button @click="changeStatus">Change Status</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      status: 'Critical'
    }
  },
  methods: {
    /*
      changeStatus: function()の書き方でなくて下記のような書き方でもOK
      ES6からはObjectに関数を記述することができるようになったため、以下の書き方でOK
     */
    changeStatus() {
      this.status = 'Normal'
    }
  }
}
</script>
