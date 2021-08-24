const app = Vue.createApp({
  data() {
    return {
      title: "TestBaşlığı",
      itemList: [],
    };
  },
  beforeCreate() {
    console.log(" beforeCreate Çalıştı....")
  },
  created() {
    console.log(" created Çalıştı....")
    setTimeout(() => {
      this.itemList = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },2000)
    setTimeout(() => {
      this.title="bu yeni başlıkk"
    },4000)
  },
  beforeMount() {
    console.log(" beforeMount Çalıştı....")
  },
  maunted() {
    console.log(" maunted Çalıştı....")
  },
  beforeUpdate() {
    console.log(" beforeUpdate Çalıştı....")
  },
  updated() {
    console.log(" updated Çalıştı....")
  },
  beforeUnmount() {
    console.log(" beforeUnmount Çalıştı....")
  },
  unmounted() {
    console.log(" unmounted Çalıştı....")
  },
});

app.mount("#app");

setTimeout(() => {
  app.unmount();
}, 6000);