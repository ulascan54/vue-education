<template>
  <div class="container">
    <h3>bu benim ilk vue cli uygulamam</h3>
    <p>bugün component ve vue cli konularını </p>
  </div>
<!-- <CounterItem></CounterItem> -->
<CounterItem/>
<app-header />
<!-- <counter-item />  ! çalışır-->
<!-- <benim-güzel-sayacım></benim-güzel-sayacım> -->
</template>
<script>
  import CounterItem from "@/components/CounterItem"
  export default{
    components :{
      // CounterItem:CounterItem,
      //* key :value - CounterItem:ayse-fatma-hayriye
      //*"benim-güzel-sayacım"
      CounterItem //* eğer key value eşits eböylede yazabiliriz
    }
  }
</script>
