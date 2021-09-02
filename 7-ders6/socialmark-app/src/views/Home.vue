<template>
  <AppHeader />
  <div class="flex flex-row">
    <Sidebar @category-changed="updateBookmarkList" />
    <AppBookmarkList v-if="bookmarkList.length>0" :items="bookmarkList"/>
    <div v-else>Hiç kayıt bulunamadı</div>
  </div>
</template>
<script>
import Sidebar from '@/components/Home/Sidebar'
export default {
  data() {
    return {
      bookmarkList:[]
    }
  },
    created(){
    this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(bookmark_list_response => {
      // console.log('bookmark_list_response :>> ', bookmark_list_response);
      this.bookmarkList=bookmark_list_response?.data || []
    })
  },
  components:{
    Sidebar
  },
  methods: {
    updateBookmarkList(categoryId){
      const url= categoryId ? `/bookmarks?_expand=category&_expand=user&categoryId=${categoryId}` : `/bookmarks?_expand=category&_expand=user`
      this.$appAxios.get(url).then(bookmark_list_response => {
      // console.log('bookmark_list_response :>> ', bookmark_list_response);
      this.bookmarkList=bookmark_list_response?.data || []
    })
    }
  },

}
</script>