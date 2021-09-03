<template>
  <div v-if="!oldpassword" class="account_container mx-auto flex flex-col w-1/4">
    <h3 class="text-2xl text-center mb-3">Hesabım</h3>
    <p>Bilgilerinizi güncellemek için  şifrenizi giriniz.</p> <br>
    <input type="text" ref="p3"  placeholder="Şifreniz" class="input mb-3" />
    <button class="default-button" @click="onCheck">Onayla</button>
  </div>
  <div  v-else  class="account_container mx-auto flex flex-col w-1/4">
    <h3 class="text-2xl text-center mb-3">Hesabım</h3>
    <input type="text" v-model="userData.fullname" placeholder="Tam Ad" class="input mb-3" />
    <input type="text" v-model="userData.username" placeholder="Kullanıcı Adı" class="input mb-3" />
    <p>Değitirilecek Şifre:</p><br>
  
    <input type="password" ref="p1" placeholder="Şifre" class="input mb-3" />
    <input type="password" ref="p2" placeholder="Tekrar Şifre" class="input mb-3" />
    <button class="default-button" @click="onUpdate">Güncelle</button>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CryptoJs from"crypto-js"

export default {
  data() {
    return {
      oldpassword:false,
      userData:{
        username:null,
        fullname:null,
        password:null
      }
    }
  },
  mounted() {
      this.userData.username=this._getCurrentUser.username
      this.userData.fullname=this._getCurrentUser.fullname
  },
  computed:{
    ...mapGetters(["_getCurrentUser","_saltKey"])
  },
  methods: {
    onUpdate(){
      const passwordOne=this.$refs.p1.value
      const passwordTwo=this.$refs.p2.value
      if (passwordOne===passwordTwo) {
      const cryptedPassword = CryptoJs.HmacSHA1(passwordOne, this.$store.getters._saltKey).toString()
      this.userData.password=cryptedPassword
      this.$appAxios.patch(`/users/${this._getCurrentUser.id}`,{...this.userData})
      .then(registered_user_response => { console.log('registered_user_response :>> ', registered_user_response)
      this.$store.commit("logoutUser")
      this.$router.push({name:"LoginPage"})
      })
      }
      else{
        alert("Şifreler Uyuşmamaktadır")
        this.$refs.p1.value=""
        this.$refs.p2.value=""
      }
    },
    onCheck(){
      const password=this.$refs.p3.value
      const cryptedPassword = CryptoJs.HmacSHA1(password, this._saltKey).toString()
      this.$appAxios.get(`/users?username=${this._getCurrentUser.username}&password=${cryptedPassword}`)
      .then(login_response=>{
        if (login_response?.data?.length > 0) {
          this.oldpassword=true
        }else{
          alert("Şifreniz uyuşmuyor")
        }
        console.log('login_response :>> ', login_response)
        })
      .catch(e=>console.log('e :>> ', e))
    }
  },
}
</script>