const app = Vue.createApp({
  data() {
    return {
      value: 0,
      result:""
    };
  },
  computed:{
    getResult(){

        
        this.value!==33 ? this.result="Henüz Bitmedi!!" :  this.result="Tamamlandı"
        return this.result
    }

  },
  watch:{
    result(result){
      if (result=="Tamamlandı") {
        setTimeout(()=>{
          this.value=0
        }, 5000)
      }
    }
  }
});
app.mount("#exercise");