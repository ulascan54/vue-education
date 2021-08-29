<template>
      <ul>
        <li v-for="user in userList" :key="user">{{ user }}</li>
      </ul>
</template>
<script>
export default {
    inject:["userList"]
}
</script>