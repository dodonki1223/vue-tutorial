<template>
<div class="col-xs-12 col-sm-6">
  <ul class="list-group">
    <li class="list-group-item" v-for="index in 5" :key="index">
      Server #{{ index }}
    </li>
  </ul>
</div>
</template>

<script>
export default {
}
</script>

/*
    style scoped のようにすると下記のように data-v-5d5766d4 属性が追加される
    -------------------------------------------------------------------------------------------------------------------------------------------------
      <div data-v-5d5766d4="" class="col-xs-12 col-sm-6"><ul data-v-5d5766d4="" class="list-group"><li data-v-5d5766d4="" class="list-group-item">
            Server #1
          </li><li data-v-5d5766d4="" class="list-group-item">
            Server #2
          </li><li data-v-5d5766d4="" class="list-group-item">
            Server #3
          </li><li data-v-5d5766d4="" class="list-group-item">
            Server #4
          </li><li data-v-5d5766d4="" class="list-group-item">
            Server #5
          </li></ul></div>
      </div>
    -------------------------------------------------------------------------------------------------------------------------------------------------

    さらに data-v-5d5766d4 属性用のCSSが追加されることによりCSSがグローバルでバッティングすることがなくなる
    コンポーネントごとにCSSの設定ができるため非常に便利！！
    -------------------------------------------------------------------------------------------------------------------------------------------------
      <style type="text/css">
      div[data-v-5d5766d4] {
        border: 1px solid red;
      }
      </style>
    -------------------------------------------------------------------------------------------------------------------------------------------------

    コンポーネント単位でCSSが自動で追加されるようだ
    ただし何も記述していないものに関しては空のものが適用される
 */
<style scoped>
  div {
    border: 1px solid red;
  }
</style>
