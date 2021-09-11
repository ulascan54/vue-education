const app = Vue.createApp({
  template:`
  <button v-on:click="addApp()" >{{appCount}}</button>
  <h2>{{banner}}</h2>
  <div v-if="false">
  asdasdasdasd
  </div>
  <div v-show="false">
  asdasdasdadasd
  </div>
  `,
  data(){
    return{
      appCount:0,
      banner:'Vue3 süperrrrrrr'
    }
  },
  methods: {
    addApp(){
      this.appCount++
    }
  },
}).mount("#app");
