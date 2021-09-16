const app = Vue.createApp({
  data() {
    return {
      // myClass:"text-danger bg-success",//! boşluk koyarakta class ekleyebiliriz
      counter: 0 //!bazı durumlarda koşula bağlı olarakta calassları değiştire bilirz
    }
  },
  created() {
    setInterval(() => {

      this.counter++ 
      if ( this.counter === 5){this.counter=1}
    
    }, 1000)
  },
  computed: {
    boxClass() {//!counter ı anlık takibini sağlamak için computed ile tanımladık
        return{
        "text-danger" : this.counter === 1,
        "text-success" : this.counter === 2,
        "text-warning" : this.counter === 3,
        "text-primary" : this.counter ===4
      }
    }
  }
}).mount("#app")