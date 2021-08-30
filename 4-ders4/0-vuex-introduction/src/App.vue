<template>
  <p>
    <!-- {{ $store.state.person }}
    {{ $store.state.permissions }} -->
    <!-- <ul>
      <li v-for="permissions in $store.state.permissions" :key="permissions">
        {{ permissions }}
      </li>
    </ul>
    <ul>
      <li v-for="user in $store.state.userList" :key="user">
        {{ user }}
      </li>
    </ul>    -->

    <!-- {{ $store.state.fullName }} -->
  </p>
  <UserList />
  <NewUser />
</template>

<script>
import UserList from '@/components/UserList'
import NewUser from '@/components/NewUser'
//! getter değişken gibi kullanılan geriye değer döndüren fonksiyonlar
export default {
  name: 'App',
  components:{
    UserList,
    NewUser
  },

  created() {
    // console.log(this.$store.state.person)
    // console.log(this.$store.state.theme)
    // console.log(this.$store.getters.woodItems)
    // console.log(this.$store.getters.activeUser)
    // console.log('this. :>> ', this.activeUser);
    },


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
