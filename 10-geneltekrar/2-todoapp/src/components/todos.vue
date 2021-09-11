<template>
  <div class="todo" :class="{ complated: !todo.complated }">
    <div class="banner">
      <h3 @click="details = !details">
        {{ todo.banner }}
      </h3>
      <div class="icons">
        <span class="material-icons done" @click="toggle">done</span>
        <router-link  :to="{name:'updateTodo',params:{id:todo.id}}">
        <span class="material-icons" >edit</span>
        </router-link>
        <span class="material-icons" @click="deleteTodo">delete</span>
      </div>
    </div>
    <div v-if="details" class="content">
      <p>
        {{ todo.content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todo"],
  data() {
    return {
      details: false,
      uri: "http://localhost:3000/todos/" + this.todo.id,
    };
  },
  methods: {
    deleteTodo() {
      fetch(this.uri, { method: "DELETE" })
        .then(() => {
          this.$emit("delete", this.todo.id);
        })
        .catch((err) => console.log(err));
    },
    toggle() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ complated: !this.todo.complated }),
      })
        .then(() => {
          this.$emit("donetodo", this.todo.id);
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped>
.todo {
  margin: 20px auto;
  background-color: #4b4b4b;
  padding: 10px 20px;
  border-radius: 15px;
  border: 3px solid #b33939;
  color: #f7f1e3;
}
.todo:hover {
  box-shadow: 8px 10px 10px rgba(2, 2, 2, 0.3);
}
h3 {
  cursor: pointer;
}
.banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 25px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #fff;
}
.complated {
  border: 3px solid #218c74;
}
.complated h3 {
  text-decoration: line-through;
}
.complated .done {
  color: #218c74;
}
</style>
