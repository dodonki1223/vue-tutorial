<template>
  <ul class="nav nav-pills">
    <!-- 
        router-link は <a> に置き換えられます 
        ページのリロードが走らないです
        Vue-Routerがなんだかんだいってやってくれている

        exact を追加することで URL の完全一致になります
          /user/id のようなものの場合は user リンクがアクティブになっているのが望ましいので包含的なマッチでアクティブになっている
          このドキュメントを参考にするとよい: https://router.vuejs.org/ja/api/#exact
      -->
    <router-link to="/"       tag="li" active-class="active" exact><a>Home</a></router-link>
    <router-link to="/user/1" tag="li" active-class="active"      ><a>User 1</a></router-link>
    <router-link to="/user/2" tag="li" active-class="active"      ><a>User 2</a></router-link>
  </ul>
</template>
