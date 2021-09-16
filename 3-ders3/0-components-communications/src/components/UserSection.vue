<template>
      <ListSection />
      <AddSection />
</template> 
<script>
import AddSection from '@/components/AddSection'
import ListSection from '@/components/ListSection'
export default {
  //* emitleride opsiyonel olarak bu şekilde belirte biliriz
  //* bunun amacı ise daha temiz bir çalışma ortamı olması için
  components:{
    ListSection,
    AddSection
  }
}
</script>