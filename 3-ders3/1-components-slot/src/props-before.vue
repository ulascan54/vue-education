<template>
  <div>
    <Modal :onSave="onSave" :title="title" :content="content"/>
  </div>
</template>
<script>
import Modal from '@/components/Modal'

export default {
  components:{
    Modal,
  },
  data() {
    return {
      title:"Başlık",
      content:`<h3 class="text-red">TİTTTTTTTTTTTLEEE<h3/>`
    }
  },
  methods:{
    onSave(){
      alert("kaydedildi....")
    }
  }
  
}
</script>