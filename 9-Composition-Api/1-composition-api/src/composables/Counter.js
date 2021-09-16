
  import {ref,computed,watch} from 'vue'



export default function(){
  const counter = ref(0)
  const oddoreven=computed(()=>(counter.value % 2 ===0 ? "çift" : "tek"))

  watch([counter,oddoreven],([newc,newo],[oldc,oldo]) => {
    console.log(newo,oldo);
    console.log(newc,oldc);
  })
    return{counter, oddoreven}
}


