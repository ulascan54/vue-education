<template>
    <ul v-if="itemList.length > 0">
      <li v-for="item in itemList" :key="item.id" class="d-flex justify-content-between align-content-center">
        <span>{{ item.title }}</span>
        <button class="sm red" @click="onDelete(item)">Sil</button>
      </li>      
    </ul>
    <div v-else class="bg-blue text-white">herhangi bir ürün yoktur</div>
</template>
<script>
export default {
  inject:["onDelete"],
  props:["itemList"]
  
}
</script>