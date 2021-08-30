<template>
  <!-- <a href="/">Anasayfa</a>
  <a href="/hakkimda">Hakkimda</a> -->
  <div class="container">
    <div class="mb-2">
        <router-link class="nav-link" active-class="active" to="/">
        Anasayfa
        </router-link>
        <router-link class="nav-link" active-class="active" to="/hakkimda">
        hakkimda
        </router-link>        
        <router-link class="nav-link" active-class="active" to="/detay/21321">
        Detay
        </router-link>  
    </div>
    <router-view></router-view>
  </div>
</template>

<style>
  .nav-link{
    padding: 5px 10px;
    text-decoration: none;
    border:1px solid #fa6558;
    color:#fa6558;
    margin: 5px;
    display:inline-block;
  }
  .active{
    background-color: #fa6558;
    color: #fff;
  }
</style>