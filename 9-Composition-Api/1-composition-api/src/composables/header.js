
  import {ref,computed} from 'vue'



export default function(){
    const title=ref('Başlık');
    const titleLengthMessage = computed(()=>{
        return title.value.length + "adet karakter yazdınız"
      })

    return{title, titleLengthMessage}
}


