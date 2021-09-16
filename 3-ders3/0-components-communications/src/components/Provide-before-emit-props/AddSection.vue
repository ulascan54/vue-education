<template>
  <div>
      <button @click="$emit('new-item',new Date().getTime())">set data</button>    
  </div>
</template>
<script>
export default {
     emits:["new-item"],
}
</script>