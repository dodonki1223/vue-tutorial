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
              v-if,v-show どちらでもアニメーションを使用することができる
          -->
        <transition name="fade">
          <div class="alert alert-info" v-show="show">This is some Info</div>
        </transition>
        <!--  
            CSSアニメーションプロパティを使用した方法
            トランジションとアニメーションの両方を使う場合はVue.jsがどちらを使っているかわからないので
            明示的に type 属性を使用して指定すること （※これを指定しないと奇妙な動きになります）
            詳しくは:https://jp.vuejs.org/v2/guide/transitions.html#%E3%83%88%E3%83%A9%E3%83%B3%E3%82%B8%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%A8%E3%82%A2%E3%83%8B%E3%83%A1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%92%E4%B8%A1%E6%96%B9%E4%BD%BF%E3%81%86
          -->
        <transition name="slide" type="animation">
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition>
        <!--  
            appear 属性を追加することでページの初回ロード時にアニメーションが実行されるようになる
          -->
        <transition name="fade" appear>
          <div class="alert alert-info" v-show="show">This is some Info</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
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
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity .5s;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 3s;
  opacity: 0;
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
