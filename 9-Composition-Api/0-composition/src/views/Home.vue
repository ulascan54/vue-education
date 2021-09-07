<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="counter" :style=" {color: store.state.colorCode}">
      {{ store.state.counter }}
    </div>
    <div class="counter-squared">
      {{ store.state.counter }}
      <sup>2</sup> = {{ store.getters.counterSquared() }}
    </div>
    <div class="buttons">
      <button @click="store.methods.decreaseCounter">-</button>
      <button @click="store.methods.increaseCoounter">+</button>
    </div>
    <input type="text" placeholder="enter color code" v-model="colorCode" />
  </div>
</template>

<script>
import { computed, inject } from "vue";
// @ is an alias to /src

export default {
  name: "Home",
  setup() {
    const store = inject("store");
    const colorCode = computed({
      get(){
        return store.state.colorCode
      },
      set(val){
        store.methods.setColorCode(val)
      }
      
    })
    return {
      store,
      colorCode
    };
  },
};
</script>
<style>
div {
  margin-bottom: 10px;
}
.counter {
  font-size: 80px;
}
.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>
