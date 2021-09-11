<template>
<nav class="filter-nav">
  <button @click="filterUpdate('All')" :class="{ 'active': activeTab==='All'}">Bütün Yapılacaklar</button>
  <button @click="filterUpdate('complate')" :class="{ 'active': activeTab==='complate'}">Tamamlanan Yapılacaklar</button>
  <button @click="filterUpdate('loading')" :class="{ 'active': activeTab==='loading'}">Devam Eden Yapılacaklar</button>
</nav>
</template>

<script>
  export default {
    props:['activeTab'],
    methods: {
      filterUpdate(state){
        this.$emit('filterState',state)
      }
    },
  }
</script>

<style scoped>
.filter-nav button{
  background: none;
  border: none;
  color: #bbb;
  outline: none;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}
.filter-nav button.active{
  color:#555
}
</style>