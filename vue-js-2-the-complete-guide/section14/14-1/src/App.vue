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
            CSSトランジションプロパティを使用した方法
          -->
        <transition name="fade">
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition>
        <!--  
            CSSアニメーションプロパティを使用した方法
          -->
        <transition name="slide">
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
    CSSトランジションプロパティを使用した方法
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

/*  
    CSSアニメーションプロパティを使用した方法
 */
.slide-enter {
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
