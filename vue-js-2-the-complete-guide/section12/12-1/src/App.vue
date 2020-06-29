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
          -->
        <p v-highlight:background="'red'">Color thing</p>
        <p v-highlight="'green'">Color thing</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>
