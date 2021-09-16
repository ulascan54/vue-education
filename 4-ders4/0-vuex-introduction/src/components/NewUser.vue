<template>
    <button @click="updateName">Yeni item ekle</button>
</template>
<script>
export default {
    methods: {
     updateName(){
       const userData={id:new Date().getTime(), title:"raf"+new Date().getTime(),type:"mobilya"}
       this.$store.commit("newItem",userData)
       this.$store.dispatch("newItem",userData)//* actionlar dispatch edilir mutationslar commmit edilir
        //  this.$store.state.itemList.push({id:new Date().getTime(), title:"raf"+new Date().getTime(),type:"mobilya"})
        this.$store.state.fullName="handan kandemir"
      }
    },
}
</script>