<template>
  <div>
      <button @click="newItem(new Date().getTime())">set data</button>    
  </div>
</template>
<script>
export default {
     inject:["newItem"]
}
</script>