<template>
 <div class="login_register_container">
     <!-- {{$store.getters._saltKey}} -->
      <h3 class="text-2xl text-center mb-3">Login</h3>
      <input v-model="userData.username"  type="text" placeholder="Kullanıcı Adı" class="input mb-3" />
      <input v-model="userData.password" type="password" placeholder="Şifre" class="input mb-3" />
      <button @click="onSubmit" class="default-button">Giriş yap</button>
      <span class="text-center mt-3 text-sm">
        Üye değilim,
        <router-link :to="{name:'RegisterPage'}"  class="text-red-900 hover:text-black">Üye olmak istiyorum!</router-link>
      </span>
    </div>
</template>
<script>
import CryptoJs from"crypto-js"
export default {
  data() {
    return {
      userData:{
        username:null,
        password:null
      }
    }
  },
  methods: {
    onSubmit(){
      const password=this.userData.password
      // const key="booklike123!456?"
      // const cryptedPassword = CryptoJs.AES.encrypt(password, this.$store.getters._saltKey).toString()
      const cryptedPassword = CryptoJs.HmacSHA1(password, this.$store.getters._saltKey).toString()
      console.log('cryptedPassword :>> ', cryptedPassword);
      this.$appAxios.get(`/users?username=${this.userData.username}&password=${cryptedPassword}`)
      .then(login_response=>{
        if (login_response?.data?.length > 0) {
        this.$store.commit("setUser", login_response.data[0]);
        this.$router.push({name:"HomePage"})
        }else{
          alert("böyle bir kullanıcı bulunamadı..")
        }
        console.log('login_response :>> ', login_response)
        })
      .catch(e=>console.log('e :>> ', e))
      // .finally(()=>this.loader=false)
    }
  },
}
</script>