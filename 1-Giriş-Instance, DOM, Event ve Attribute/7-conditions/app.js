const app=Vue.createApp({
  data(){
    return{
      showContainer:false,
      counter:0,
    };
  },
  computed:{
    counterBoxClass(){
      return{ 'bg-danger text-white' : this.counter < 0, 'bg-success text-white' : this.counter >0,}
    }
  }
}).mount("#app");