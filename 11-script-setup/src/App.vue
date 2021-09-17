  <script setup>
  import  {reactive , watch } from 'vue'
  import oddOrEven from './components/oddOrEven.vue'
  import utils from './composables/utils'
  const {title,counter,inc,alertMe}=utils()

  const state = reactive({
    personel:{
    name:'felakettin',
    lname:null,
    },
    itemList:[],
  })
  const deepClone= (data) => JSON.parse(JSON.stringify(data))

  watch(()=>deepClone(state.personel),(newPersonal,oldPersonal)=>{
    console.log(newPersonal);
    console.log(oldPersonal);
  })
  // import {ref} from 'vue';
  // const title=ref("başlık")
  // const counter = ref(0)
  // const inc = () => {
  //   counter.value++
  // }
  // const alertMe= (info)=>{
  //   console.log(info);
  // }
</script>


<template>
  <h3> {{ title }} </h3>
  <input type="text" v-model="title">
  <button @click="inc"> {{ counter }} </button>
  <hr>
  <oddOrEven :counter="counter" @odd-even="alertMe"/>
  <hr>
  <input type="text" v-model="state.personel.name">
  <input type="text" v-model="state.personel.lname">
  {{ state.personel.name }}
  {{ state.personel.lname }}
</template>
