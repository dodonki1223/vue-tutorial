<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ $route.params.id }}</p>
    <!--  
        遷移先の設定として以下の２つのやり方がある
          - "`/user/${$route.params.id}/edit`"
          - "{ name: 'userEdit', params: { id: $route.params.id } }"
        文字列でパスを生成する方法と routes.js で設定した名前付きルートを使う方法
      -->
    <router-link 
      tag="button" 
      :to="link"
      class="btn btn-primary">Edit User</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: { 
        name: 'userEdit', 
        params: { 
          id: this.$route.params.id 
        }, 
        query: { 
          locale: 'en', 
          q: 105 
        },
        /* 
            URLにフラグメント識別子ありで渡すことができる
              ただフラングメント識別子をただ渡すだけではスクロールされない
         */
        hash: '#data'
      }
    }
  }
}
</script>
