<template>
<div>
    <AppHeader />
    <div class="flex flex-row">
      <side-bar />
      <!-- <div class="socket">
      <input type="text" @keydown.enter="SEND_MESSAGE" />
      </div> -->
      <component :is="$route.meta.componentName" :items="bookmarkList"/>
      {{ $log($route) }}
          <!-- <AppBookmarkList v-if="bookmarkList.length>0" :items="bookmarkList"/>
        <div v-else>Hiç kayıt bulunamadı</div> -->
    </div>
</div>
</template>
<script>
import sideBar from '@/components/Account/sideBar'
import userSettings from '@/components/Account/userSettings'

export default {
  components:{
    sideBar,
    userSettings
  },
    data() {
    return {
      bookmarkList:[],
      socket:[]
    }
  },
    created(){
    this.$appAxios.get("/bookmarks?_expand=category&_expand=user").then(bookmark_list_response => {
      // console.log('bookmark_list_response :>> ', bookmark_list_response);
      this.bookmarkList=bookmark_list_response?.data || []
    })
  },

  // mounted() {
  //   // this.$socket=io("http://localhost:2018")
  //   this.$socket.on("WELCOME_MESSAGE",this.WELCOME_MESSAGE)
  // },
  // methods: {
  //   WELCOME_MESSAGE(data){
  //     console.log(data)
  //   },
  //   SEND_MESSAGE(e){
  //     this.$socket.emit("SEND_MESSAGE",e.target.value)
  //   }
  // },
}
</script>