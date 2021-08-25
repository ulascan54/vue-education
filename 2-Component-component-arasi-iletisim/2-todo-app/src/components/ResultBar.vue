<template>
    <!-- <small class="d-flex justify-content-end mt-2 green">{{ todoList.length }} adet todo vardır</small> -->
    <small class="d-flex justify-content-end mt-2 green"> {{ itemCount }} adet todo vardır.</small>

</template>
<script>
export default {
    props: ["itemCount"]
}
</script>