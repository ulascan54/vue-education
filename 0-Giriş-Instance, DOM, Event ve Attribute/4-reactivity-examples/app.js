const app = Vue.createApp({
  data() {
    return {
      search: "",
      itemList: ["elma", "armut", "çilek", "kiraz"],
      // filteredList: []
    };
  },
  methods: {
    // searchList() {
    //   this.filteredList = this.itemList.filter(i => i.includes(this.search));
    //   // console.log("lifteredList :>>" , filteredList);
    // }
  },
  computed:{
    filteredList(){
      return this.itemList.filter((i) => i.includes(this.search));
    }
  }
})
app.mount("#app");