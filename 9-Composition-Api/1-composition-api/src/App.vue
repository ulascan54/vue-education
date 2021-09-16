<template>
<h3>{{title}}</h3>
  <input type="text" v-model="title">    
  <button @click="show=!show">TIk</button>
  <p v-if="show">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus quasi, veniam magnam velit dolorem nihil, quia ut delectus qui quisquam quas corporis nesciunt voluptatum numquam optio veritatis natus quis voluptatem.
  </p>
</template>
<script>
  import {ref} from 'vue'

export default {
  // data() {
  //   return {
        // title:"başlık"
  //   }
  // },
  setup() {
    const title=ref('Başlık');
      const show=ref(true)
    return{
      title,
      show,
    }
  }
}
</script>