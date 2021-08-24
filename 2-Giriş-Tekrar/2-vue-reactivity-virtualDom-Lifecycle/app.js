const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
      itemList:[]
    }
  },
  methods: {
    addItem(){
      this.itemList.push(new Date().getTime())
    }
  },
  computed:{
    getResult() {
      console.log("counter 1 çalıştı")
      return this.counter > 0 
      ? `Pozitif` 
      : this.counter < 0 
      ? `Negatif` 
      : `Sıfır`
    },
    getResult2() {
      console.log("counter 2 çalıştı")

      return this.counter2 > 0 
      ? `Pozitif` 
      : this.counter2 < 0 
      ? `Negatif` 
      : `Sıfır`
    },

  },
  watch:{
    counter(newValue, oldValue){
      console.log("counter Watcher çalıştı",newValue,oldValue)
    },
    itemList:{//! çalışır referans tipli veri tipini obje olarak tanımlayıp
      deep:true,//!deep true yapmamız gerekiyor
      handler(itemList){
        console.log('itemList :>> ', itemList);
      }
    },
    // itemList(itemList){//! çalışmak normal kullanım fonsiyon tanımı
    //   console.log('itemList :>> ', itemList);
    // }

  }

  // beforeCreate(){
  //   console.log(" beforeCreate Çalıştı....")
  // },
  // created(){
  //   console.log(" create Çalıştı....")
  //     setTimeout(()=>{
  //       this.itemList=[1,2,3,4,5]
  //     },2000)
  // },
  // beforeMount(){
  //   console.log("beforeMount Çalıştı....")
  // },
  // mounted(){
  //   console.log("mounted Çalıştı....")
  // },
  // beforeUpdate(){
  //   console.log("beforeUpdate Çalıştı....")
  // },
  // updated(){
  //   console.log(" updated Çalıştı....")
  // },
  // beforeUnmount(){
  //   console.log(" beforeUnmount Çalıştı....")
  // },
  // Unmounted(){
  //   console.log(" Unmounted Çalıştı....")
  // },
})
app.mount("#app")