const app = Vue.createApp({
  data() {
    return {
      fullName:"Ulaş",
    }
  },
  methods: {
    updateValue(event) {
      this.fullName= event.target.value;
    }
  },
}).mount('#app')