<template>
    <small class="mt-2 text-red d-flex justify-content-end align-content-center">{{itemListCount}} adet alınacak ürün vardır</small>

</template>
<script>
import { mapGetters} from "vuex"
export default {
    computed:{
        ...mapGetters({
            itemListCount:"_itemListCount"
        })
    }
}
</script>