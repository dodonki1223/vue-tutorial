<template>
  <div>
    <div class="title">
      <!--  
        外部から渡されるコンテンツをレンダリングすることができる方法
        下記のような形でこの components を使用すると <app-quote> で囲んだ中身が
        <slot> の部分にレンダリングされるようになる
          <app-quote>
            <h2>The Quote</h2>
            <p>A wonderful Quote</p>
          </app-quote>
      -->
      <slot name="title"></slot>
      <!--  
        名前付きslot で親コンポーネントから渡されなかった場合は slot の中身が表示されるようになる
        下記の場合は slot 内の The Subtitle が出力される
        -->
      <span style="color: #ccc"><slot name="subtitle">The Subtitle</slot></span>
    </div>
    <hr>
    <div>
      <!-- 
        名前のない slot はデフォルトslotになるため、指定の無い時はコイツにレンダリングされる
        -->
      <slot></slot>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  div {
    border :10x solid #ccc;
    box-shadow: 1px 1px 2px black;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }
  h2 {
    color: red;
  }
  .title {
    font-style: italic;
  }
</style>
