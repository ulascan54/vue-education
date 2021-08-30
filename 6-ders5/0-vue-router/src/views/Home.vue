<template>
<h3>HOME</h3>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ducimus amet nobis nihil animi voluptatibus facilis? Vitae, nihil omnis. Aliquam, animi recusandae dolor repellat quasi blanditiis mollitia est vel pariatur.
</p>
<input type="text" @keydown.enter="goToDetails">
</template>
<script>
export default {
  methods: {
    goToDetails(e){
      // this.$router.push(`/detay/${e.target.value}`)
      this.$router.push({
        name:"DetailPage",
        params:{
          userID:e.target.value
        },
        query:{
          type:"DetailAuth",
          user:"tayfunerbilen"
        }
      })
    }
  },
}
</script>