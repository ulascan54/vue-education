<template>
<h3 class="bg-red text-white">{{ msg }}</h3>
</template>
<script>
export default {
  props:["msg"],
   mounted() {
    console.log("red  mounted")
  },
  activated() {
    console.log("red  activated")
  },
  deactivated() {
    console.log("red  deactivated")
  },
}
</script>