<template>
    <div class="container">
    <AppTitle>
      <template #default>
        Alıveriş Listesi
      </template>
    </AppTitle>
    <hr />
    <AppInput />
    <AppList/>
    <AppItemCount/>
  </div>
</template>
<script>
import axios from "axios"
import AppList from '@/components/AppList'
import AppInput from '@/components/AppInput'
import AppTitle from '@/components/AppTitle'
import AppItemCount from '@/components/AppItemCount'
export default {
  data() {
    return {
      provideData:{
       itemList:[]
      }
    }
  },
  provide(){
    return{
      itemList:this.provideData.itemList,
      onSave:this.OnSave,
      onDelete:this.onDelete,
      itemCount:this.itemCount
    }
  },
  components:{
    AppList,
    AppInput,
    AppTitle,
    AppItemCount
  },
  mounted() {
    axios.get("http://localhost:3000/items")
    .then(items_response=>{console.log('items_response :>> ', items_response)
    this.provideData.itemList=items_response.data || []
    console.log('this.itemList :>> ', this.provideData.itemList);
    })
  },
  methods: {
    onSave(e){
      const saveObject={
        title:e.target.value,
        created_at: new Date(),
        completed:false,
      };
     axios.post("http://localhost:3000/items", saveObject)
     .then(save_response =>{
      console.log(save_response);
      this.provideData.itemList.push(save_response.data)
      e.target.value="";
      e.target.focus();
     })
    },
    onDelete(item){
      axios.delete(`http://localhost:3000/items/${item.id}`)
      .then(delete_response=>{
          console.log(delete_response);
          this.provideData.itemList= this.provideData.itemList.filter(i=> i.id !== item.id)
        }
      )
    }
  },
  computed:{
    itemCount(){
      return this.provideData.itemList.length || 0
    }
  }
 
}
</script>