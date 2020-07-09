<template>
  <ul class="nav nav-pills">
    <!-- 
        router-link は <a> に置き換えられます 
        ページのリロードが走らないです
        Vue-Routerがなんだかんだいってやってくれている
      -->
    <li class="nav-item"><router-link to="/">Home</router-link></li>
    <li class="nav-item"><router-link to="/user">User</router-link></li>
  </ul>
</template>
