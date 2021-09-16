const app = Vue.createApp({
  data() {
    return {
      title: "bu vue tarafından gelen bir bilgidir",
      content: "Lorem ipsum",
      hobbies: [0, 1, 2, 3, 4, 5],
      personal: {
        name: "ulaş",
        surname: "demirbag"
      },
      details: `<a href="https://facebook.com">TIKLA</a>`,
      url: "https://facebook.com",
      coordX: 0,
      coordy: 0,
      fullname:"ulaşcan"
    }
  },
  methods: {
    updatetitle(title) {
      this.title = title || "Bu benim yeni mesajım" //* eğer bilgi gelmezse bu msjı göster
    },
    updateCoords(e) {
      
      this.coordX = e.offsetX
      this.coordY = e.offsetY
      this.updatetitle(`${this.coordX},${this.coordY}`)
      //* burada titleda göstermek için this yazıp fonksiyonu çağırıp değişkenleri
      //*birleştirerek yolluyorum
      //*buradaki e js de otamatik olarak gelen event objesi
    },
    updateValue(e){
      e.target.value=this.fullname
    }
  }
}).mount("#app")
//* vue 2
// new Vue({
//   el:"#app",
//   data:{

//   }
// })