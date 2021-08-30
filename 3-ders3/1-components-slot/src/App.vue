<template>
  <div>
    <!-- <Modal :onSave="onSave" :title="title" :content="content"/> -->
   
   <Modal>
      <template #titlee>
        <h3>Bu bir slot başlıktırr</h3>
      </template>
<!-- 
      <template #content>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id facere odit rerum magnam maiores architecto accusantium enim, sunt blanditiis minima non illo unde fugiat nisi ab consequatur reiciendis cumque debitis!
      </template> -->
       <template v-slot:content>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id facere odit rerum magnam maiores architecto accusantium enim, sunt blanditiis minima non illo unde fugiat nisi ab consequatur reiciendis cumque debitis!
      </template>
      <template #default>
        default olarak gösterilicektirrr.
      </template>
   </Modal>
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