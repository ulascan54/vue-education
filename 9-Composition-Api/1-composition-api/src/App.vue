<template>
<h3>{{title}}</h3>
  <input type="text" v-model="title"> 
  {{ titleLengthMessage }}   
  <button @click="toggleIt()">TIk</button>
  <p v-if="show">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus quasi, veniam magnam velit dolorem nihil, quia ut delectus qui quisquam quas corporis nesciunt voluptatum numquam optio veritatis natus quis voluptatem.
  </p>
  <hr>
  <button @click="counter++">{{ counter }} : {{ oddoreven }}</button>
  <hr>
  <input type="text" v-model="searchText">
  <p v-if="isTyping">şuan yazıyor..</p>
</template>
<script>
  // import {ref,computed,watch, watchEffect} from 'vue'
  import Counter from './composables/Counter'
  import header from './composables/header'
  import Search from './composables/Search'
  import toggle from './composables/toggle'

export default {
  // data() {
  //   return {
        // title:"başlık"
  //   }
//   // },
  setup() {
    const { counter,oddoreven} = Counter()
    const { title,titleLengthMessage} = header()
    const { searchText,isTyping} = Search()
    const { show,toggleIt} = toggle()

    return{
      counter,
      title,
      show,
      toggleIt,
      titleLengthMessage,
      oddoreven,
      searchText,
      isTyping

    }
  }

}

</script>
//     const title=ref('Başlık');
//     const show=ref(true)
//     const toggleIt = () => {
//       show.value = !show.value
//     }
// //!************************************************************** */

//     const titleLengthMessage = computed(()=>{
//       return title.value.length + "adet karakter yazdınız"
//     })
// //!************************************************************** */
//     const counter = ref(0)
//     const oddoreven=computed(()=>(counter.value % 2 ===0 ? "çift" : "tek"))

//     watch([counter,oddoreven],([newc,newo],[oldc,oldo]) => {
//       console.log(newo,oldo);
//       console.log(newc,oldc);
//     })
// //!************************************************************** */
//   const searchText=ref('')
//   const isTyping=ref(false)
//   // watch(searchText,()=>{
//   //   if (searchText.value.length > 0) {
//   //     isTyping.value=true
//   //     setTimeout(() => {
//   //       isTyping.value=false
        
//   //     }, 1500);
//   //   }else{
//   //     isTyping.value=false
//   //   }
//   // })
//   const stop = watchEffect((onInvalidate)=>{
//        if (searchText.value.length > 0) {
//       isTyping.value=true
//       const typing=setTimeout(() => {
//         isTyping.value=false
//         stop()
//       }, 1500);
//       onInvalidate(()=> clearTimeout(typing))
//       }

//   })
//     return{
//       counter,
//       title,
//       show,
//       toggleIt,
//       titleLengthMessage,
//       oddoreven,
//       searchText,
//       isTyping
//     }
//   }
