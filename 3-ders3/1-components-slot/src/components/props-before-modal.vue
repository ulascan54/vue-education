<template>
  <div class="container">
    <div class="header" >
      <h1>{{ title }}</h1>
    </div>
    <hr>
    <div class="content my-2" v-html="content">

    </div>
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