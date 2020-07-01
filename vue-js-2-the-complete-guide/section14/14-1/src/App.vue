<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <br>
        <br>
        <!--  
            transition は１つの要素のみにしか適用できない
            ２つの div を含ませると console にエラーが吐かれます
          -->
        <transition name="fade">
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>

<style>
/*  
    transition タグの name 属性と prefix が一致する
    それぞれの enter, enter-active, leave, leave-active などの
    イベントを自動で感知してくれる
 */
.fade-enter {
  /* opacity のデフォルトは 1 です */
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave {
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
</style>
