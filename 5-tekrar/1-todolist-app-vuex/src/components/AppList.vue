<template>
    <ul v-if="itemListCount > 0">
      <li  v-for="item in itemList" :key="item" class="d-flex justify-content-between align-content-center">
        <span>{{ item.title }}</span>
        <button class="sm red" @click="onDelete(item.id)">Sil</button>
      </li>      
    </ul>
    <div v-else class="bg-blue text-white">herhangi bir ürün yoktur</div>
</template>
<script>
import {mapGetters} from "vuex"
import axios from "axios"
export default {
  mounted() {
       axios.get("http://localhost:3000/items")
      .then((item_response)=>{
        this.$store.dispatch("getItemFromAxios", item_response.data)
      })
  },
  methods: {
    async onDelete(id){
     await this.$store.dispatch("deleteItemFromAxios",id)
       await axios.get("http://localhost:3000/items")
        .then(( item_response)=>{
         this.$store.dispatch("getItemFromAxios", item_response.data)
      })
    }
  },
  computed:{
    ...mapGetters({
      itemList:"_itemList",
      itemListCount:"_itemListCount"
    })
  }
}
</script>