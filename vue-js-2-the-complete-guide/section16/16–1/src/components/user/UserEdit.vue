<template>
  <div>
    <h3>Edit the User</h3>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Analytics: {{ $route.query.q }}</p>
    <hr>
    <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
    <div style="height: 700px"></div>
    <p id="data">Some extra Data</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      confirmed: false
    }
  },
  beforeRouteLeave(to, from, next) {
    /* 
        編集が完了しているかどうかで画面の遷移ができるかどうかを制御している
          confirm ボタンを押した時はそのまま遷移する
          confirm ボタンを押していない時は confirm を表示させて遷移を制御する
     */
    if (this.confirmed) {
      next()
    } else {
      if (confirm('Are you sure?')) {
        next()
      } else {
        next(false)
      }
    }
  }
}
</script>
