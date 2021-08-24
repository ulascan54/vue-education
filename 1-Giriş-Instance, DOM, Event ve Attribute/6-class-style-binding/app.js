const app= Vue.createApp({
  data(){
    return{
      showborder:false,
      redbg:false,
      boxClass: "red border",
      bgColor:"cyan",
    };
  },
  computed:{
    boxClasses(){
      return{border:this.showborder, red: this.redbg}
    }
  }
}).mount("#app")