<template>
    <div class="my-2">
      <input type="text" placeholder="ne alacaksın" @keydown.enter="onSave">
    </div>
</template>
<script>
export default {
  inject:["onSave"],
}
</script>