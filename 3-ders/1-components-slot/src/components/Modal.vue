<template>
  <div class="container">
    <div class="header" >
      <slot name="titlee" />
    </div>
    <hr>
    <div class="content my-2" >
      <slot name="content" />
    </div>
      <slot />
    <div class="footer text-right">
      <button >kapat</button>
      <button class="green" @click="onSave">kaydet</button>
    </div>
  </div>
</template>
<script>
export default {
  props:["title","onSave","content"]
}
</script>