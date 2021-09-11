const app = Vue.createApp({
  template: `
  <h2>İcecek Seç</h2>
  <ul>
    <li @click="selectedItem(item)"  v-for=" item in items" :class="item.selected===false ? 'selected' : 'unselected'" >{{item.name}}</li>
  </ul>
  <button @click="getAllSelectedItems">secilen iceckleri konsolayazdır</button>
  <ul>
  <li @click="selectedItem(item)"  v-for=" item in selectedItems" :class="'selected'" >{{item.name}}</li>
</ul>
  `,
  data() {
    return {
      items: [
        { name: "su", selected: true },
        { name: "ayran", selected: true },
        { name: "cola", selected: true },
        { name: "şalgam", selected: true },
      ],
    };
  },
  methods: {
    selectedItem(item) {
      item.selected =  !item.selected;
    },
    getAllSelectedItems(){
      console.clear()
      // this.items.forEach(item => {
      //   if (!item.selected) {
      //     console.log(item.name)
      //   }
      // });
      const filteredItem=this.items.filter(i=>i.selected ===false)
      console.log(filteredItem);
    }
  },
  computed: {
    selectedItems(){
      const filteredItem=this.items.filter(i=>i.selected ===false)
      return filteredItem
    }
  },
}).mount("#app");
