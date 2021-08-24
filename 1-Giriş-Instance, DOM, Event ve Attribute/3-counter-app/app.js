const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
    };
  },
  methods: {
    // getCounterResult() {
    //   console.log("c1 çalıştı")
    //   return this.counter > 5 ? "BÜYÜK" : "KÜÇÜK";
    // },
    // getCounter2Result() {
    //   console.log("c2 çalıştı")
    //   return this.counter > 5 ? "BÜYÜK" : "KÜÇÜK";
    // },
    // inc() {
    //   this.counter++;
    // },
    // dec() {
    //   this.counter--;
    // },
  },
  computed : {
    getCounterResult() {
      console.log("c1 çalıştı");
      return this.counter > 5 ? "BÜYÜK" : "KÜÇÜK";
    },
    getCounter2Result() {
      console.log("c2 çalıştı");
      return this.counter2 > 5 ? "BÜYÜK" : "KÜÇÜK";
    },
  },
  watch:{
    counter(newValue,oldValue){
      console.log("Counter", newValue,"=>",oldValue);
    },
    counter2(newValue,oldValue){
      console.log("Counter2", newValue,"=>",oldValue);
    },
    getCounterResult(newValue,oldValue) {
      console.log("Result", newValue,"=>",oldValue);
    },
    getCounter2Result(newValue,oldValue) {
      console.log("Result", newValue,"=>",oldValue);
    },
  }

}).mount("#app");