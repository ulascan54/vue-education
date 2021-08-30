<template>
<div class="container">
  <div class="d-flex justify-content-between align-items-center">
  <button class="red" @click="activeComponents ='red'">Red</button>
  <button class="green" @click="activeComponents ='green'">Green</button>
  <button class="blue" @click="activeComponents ='blue'">Blue</button>
</div>
  <!-- <Red v-if="activeComponents ==='red'"/>
  <Green v-if="activeComponents ==='green'" />
  <Blue v-if="activeComponents ==='blue'" /> -->
  {{ activeComponents }}
  <keep-alive>
  <component :is="activeComponents" msg="Red Component 2">
    <h3 class="bg-green text-white">GreenSSS Components</h3>
  </component>
  </keep-alive>

  </div>
</template>
<script>
import Red from '@/components/Red'
import Green from '@/components/Green'
import Blue from '@/components/Blue'
export default {
  data() {
    return {
      activeComponents:"red"
    }
  },
  components:{
    Red,
    Green,
    Blue
  }
}
</script>