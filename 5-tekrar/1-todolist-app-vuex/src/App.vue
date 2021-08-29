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
import AppList from '@/components/AppList'
import AppInput from '@/components/AppInput'
import AppTitle from '@/components/AppTitle'
import AppItemCount from '@/components/AppItemCount'
export default {
    components:{
    AppList,
    AppInput,
    AppTitle,
    AppItemCount
  },
}
</script>