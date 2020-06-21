<template>
  <div>
    <!--  
      外部から渡されるコンテンツをレンダリングすることができる方法
      下記のような形でこの components を使用すると <app-quote> で囲んだ中身が
      <slot> の部分にレンダリングされるようになる
        <app-quote>
          <h2>The Quote</h2>
          <p>A wonderful Quote</p>
        </app-quote>
     -->
    <slot></slot>
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
</style>
