<template>
  <div class="home">
    <NavbarFilter @filterState="activeTab = $event" :activeTab="activeTab" />
    <div v-if="filteredTodos.length">
      <div v-for="todo in filteredTodos" :key="todo.id">
        <todos :todo="todo" @delete="deleteTodo" @donetodo="doneTodo" />
      </div>
    </div>
    <div v-else>
      yapılacaklar yükleniyorr...
    </div>
  </div>
  <div>
    {{ filteredTodos.length }}
    {{ activeTab ==='all' ? 'yapılacak' : activeTab ==='loading' ? 'tamamlanan yapılacak' : 'devam eden yapılacak' }}
    tane vardır.
  </div>
</template>

<script>
import todos from "@/components/todos";
import NavbarFilter from "@/components/NavbarFilter";

export default {
  components: { todos, NavbarFilter },
  name: "Home",
  data() {
    return {
      todos: [],
      activeTab: "All",
    };
  },
  mounted() {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => (this.todos = data))
      .catch((err) => console.log(err));
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter((f) => f.id !== id);
    },
    doneTodo(id) {
      let todo = this.todos.find((f) => f.id === id);
      todo.complated = !todo.complated;
    },
  },
  computed: {
    filteredTodos() {
      if (this.activeTab == "complate") {
        return this.todos.filter((t) => t.complated);
      } else if (this.activeTab === "loading") {
        return this.todos.filter((t) => !t.complated);
      } else return this.todos;
    },
  },
};
</script>
