<template>
    <small class="mt-2 text-red d-flex justify-content-end align-content-center">{{ itemCount }} adet alınacak ürün vardır</small>

</template>
<script>
export default {
  inject:["itemCount"],
}
</script>