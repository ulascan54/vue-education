<template>
      <ListSection :userList="userList"/>
      <AddSection  @new-item="$emit('new-item',$event)"/>
</template> 
<script>
import AddSection from '@/components/AddSection'
import ListSection from '@/components/ListSection'
export default {
  props:["userList"],
  //* emitleride opsiyonel olarak bu şekilde belirte biliriz
  //* bunun amacı ise daha temiz bir çalışma ortamı olması için
  emits:["new-item"],
  components:{
    ListSection,
    AddSection
  }
}
</script>