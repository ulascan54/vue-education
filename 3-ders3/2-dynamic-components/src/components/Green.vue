<template>
<slot/>
<input type="text">
</template>
<script>
export default {
  mounted() {
    console.log("green  mounted")
  },
  activated() {
    console.log("green  activated")
  },
  deactivated() {
    console.log("red  deactivated")
  },
}
</script>