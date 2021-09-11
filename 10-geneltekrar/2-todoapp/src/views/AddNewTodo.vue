<template>
  <form @submit.prevent="addNewTodo">
    <label for="">Başlık:</label>
    <input type="text" v-model="banner" required />
    <label for="">İçerik:</label>
    <input type="text" v-model="content" required />
    <button>Ekle</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      banner: "",
      content: "",
    };
  },
  methods: {
    addNewTodo() {
      const data = {
        banner: this.banner,
        content: this.content,
        complated:true,
      };
      fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data) ,
      })
        .then(() => this.$router.push('/'))
        .catch((err) => console.log(err));
      this.banner = "";
      this.content = "";
    },
  },
};
</script>

<style scoped>
form {
  background-color: rgb(255, 255, 255);
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
}
input {
  margin-top: 10px;
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button {
  display: block;
  margin: 20px auto;
  background-color: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
</style>
