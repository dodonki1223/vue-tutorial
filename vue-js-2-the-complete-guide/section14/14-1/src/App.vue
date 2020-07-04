<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr>
        <!--  
            動的なアニメーションを実行するために selectbox で選択したもので
            アニメーションされるようにする
            :name, :type を使用すれば動的に名前と属性を設定してアニメーションを実行することができる
          -->
        <select v-model="alertAnimation" class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br>
        <br>
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <br>
        <br>
        <!--  
            transition は１つの要素のみにしか適用できない
            ２つの div を含ませると console にエラーが吐かれます
            CSSトランジションプロパティを使用した方法
              v-if,v-show どちらでもアニメーションを使用することができる
          -->
        <transition :name="alertAnimation">
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
            異なるCSSクラス名を使用した場合は以下のように設定することができます
              animated.css のクラスを使用しています
              詳しい使い方についてはこちら:https://github.com/animate-css/animate.css/blob/9254c0d535e71df6cbd9aabfc7173a26802c48b5/docsSource/sections/01-usage.md
          -->
        <transition 
          appear
          enter-active-class="animate__animated animate__bounce"
          leave-active-class="animate__animated animate__shakeY">
          <div class="alert alert-info" v-show="show">This is some Info</div>
        </transition>
        <!--  
            v-if、v-else を使用しないと正しく表示されない(v-if、v-else は最終的に１つの要素を表示するためです)
              v-show は display:none するだけなので要素が消えないため
            key の指定をすること
              同じタグ名を持つ要素同士でトグルする時、key属性を指定することで、個別の要素であることをVueに伝えなければいけない
              Vue のコンパイラは効率化のために要素の内容だけを置き換えようとするため
            mode="out-in"
              詳しくはここを：https://jp.vuejs.org/v2/guide/transitions.html#%E3%83%88%E3%83%A9%E3%83%B3%E3%82%B8%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%A2%E3%83%BC%E3%83%89
              「最初に現在の要素がトランジションアウトして、それが完了したら、新しい要素がトランジションインする」
              div それぞれで実行されてしまうため１つ目の div が終わった後、２つ目の div が実行されるため、変な空きができてしまうのを防ぐやり方
          -->
        <transition :name="alertAnimation" mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">This is some Info</div>
          <div class="alert alert-warning" v-else key="warning">This is some Warning</div>
        </transition>
        <hr>
        <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
        <br>
        <br>
        <!--  
            JavaScriptでフックする方法です
              CSS以外の方法だと以下のようにイベントをフックしてアニメーションを追加することができる
              詳しくはここを：https://jp.vuejs.org/v2/guide/transitions.html#JavaScript-%E3%83%95%E3%83%83%E3%82%AF
              CSSでのアニメーションをスキップするためには :css="false" を記述すること
          -->
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"

          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false">
          <div style="width: 300px; height: 100px; background-color: lightgreen" v-if="load"></div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      load: true,
      alertAnimation: 'fade',
      elementWidth: 100
    }
  },
  methods: {
    beforeEnter(el) {
      console.log('beforeEnter')
      this.elementWidth = 100
      el.style.width = this.elementWidth + 'px'
    },
    enter(el, done) {
      console.log('enter')
      let round = 1
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth + round * 10) + 'px'
        round++
        if (round > 20) {
          clearInterval(interval)
          done()
        }
      }, 20)
    },
    afterEnter(el) {
      console.log('afterEnter')
    },
    enterCancelled(el) {
      console.log('enterCancelled')
    },
    beforeLeave(el) {
      console.log('beforeLeave')
      this.elementWidth = 300
      el.style.width = this.elementWidth + 'px'
    },
    leave(el, done) {
      console.log('leave')
      let round = 1
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth - round * 10) + 'px'
        round++
        if (round > 20) {
          clearInterval(interval)
          done()
        }
      }, 20)
    },
    afterLeave(el) {
      console.log('afterLeave')
    },
    leaveCancelled(el) {
      console.log('leaveCancelled')
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
  transition: opacity 1s;
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
