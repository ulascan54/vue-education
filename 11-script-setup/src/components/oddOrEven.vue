<template>
    <h1>{{ counter }}</h1>
    <h1>{{ result }}</h1>
</template>
<script setup>
import {computed,watch} from 'vue'
const props = defineProps({counter:Number})
const emit =defineEmits(['odd-even'])
const result = computed (()=>props.counter % 2 === 0 ? 'çift' : 'tek')
watch(result,(result)=>{
    if(result === 'tek') emit('odd-even',true)

})
</script>