<template>
    <div class="my-2">
      <input type="text" @keydown.enter="onSave" placeholder="ne alacaksın" >
    </div>
</template>
<script>
import axios from "axios"
export default {
  methods: {
   async  onSave(e){
      await this.$store.dispatch("saveItemToAxios",e.target.value)
      e.target.value=""
      e.target.focus()
      await  axios.get("http://localhost:3000/items")
      .then((item_response)=>{
        this.$store.dispatch("getItemFromAxios", item_response.data)
      })
    }
  },
}
</script>