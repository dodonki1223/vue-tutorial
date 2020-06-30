<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built-in Directives</h1>
        <p v-text="'Some Text'"></p>
        <!--  
            クロスサイトスクリプティングにあうため、ちゃんとサニタイズされたものが表示されるようにしないと危ないです
          -->
        <p v-html="'<strong>Some strong text</strong>'"></p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <!-- 
            中の値は文字列にする必要があるため、シングルクォーテーションで囲むこと 
            ここで渡す値はすべて binding の値になります
            v-highlight:background="'red'"
              :background が引数扱いになりますなのでカスタムディレクティブ側では
              binding.arg を使用して引数を取得することが出来ます
            モディファイの指定は以下の通りにすること
              v-highlight:background.delayed="'red'"（delayedモディファイを追加している）
              複数のモディファイを使用する場合は v-highlight:background.delayed.another="'red'"
              などのように指定すること
              カスタムディレクティブでは binding.modifiers でモディファイ配列を取得することができる
          -->
        <p v-highlight:background.delayed="'red'">Color this</p>
        <p v-highlight="'green'">Color this</p>
        <p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}">Color this, too</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // ローカルディレクティブ
  directives: {
    'local-highlight': {
      bind(el, binding, vnode) {
        let delay = 0
        if (binding.modifiers['delayed']) delay = 3000;
        if (binding.modifiers['blink']) {
          let mainColor    = binding.value.mainColor
          let secondColor  = binding.value.secondColor
          let currentColor = mainColor
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor
              if (binding.arg == 'background') {
                el.style.backgroundColor = currentColor
              } else {
                el.style.color = currentColor
              }
            }, binding.value.delay)
          }, delay)
        } else {
          setTimeout(() => {
            if (binding.arg == 'background') {
              el.style.backgroundColor = binding.value.mainColor
            } else {
              el.style.color = binding.value.mainColor
            }
          }, delay)
        }
      }
    }
  }
}
</script>

<style>

</style>
