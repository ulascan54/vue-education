<template>
  <div class="container">
    <h3 class="text-center">Todo App</h3>
    <hr class="my-2">
    <AddSection :addNewTodo="addNewTodo" />
    <ListSection />
    <!-- <ListSection @delete-todo-item="deleteItem" :todoList="todoList" /> -->
    <!-- <TodoList :myData="todoList"  @delete-todo-item="deleteItem"/>
    <ResultBar :itemCount="todoList.length" /> -->

  </div>
</template>
<script>
import AddSection from "@/components/AddSection"
import ListSection from "@/components/ListSection"

// import TodoList from "@/components/TodoList"
// import ResultBar from "@/components/ResultBar"

export default {
  components :{
    AddSection,
    ListSection
    // TodoList,
    // ResultBar
  },
  created(){
    // setTimeout(() => {
    //    this.todoList=[
    //     { id:1, text:"Bootcamp #2"},
    //     { id:2, text:"Bootcamp #2.1"},
    //     { id:3, text:"Bootcamp #2.2"},
    //     { id:4, text:"Bootcamp #2.3"},
    //     { id:5, text:"Bootcamp #2.4"},
    //     { id:6, text:"Bootcamp #2.5"},
    //   ]
      
    // }, 2000);
  },
  data() {
    return{

      provideData:{
         todoList:[//!siz statik olarak data yollarsaız problem olmaz ama edit olursa iş patlaya bilir oyüzden objeye alıyoruz
        { id:1, text:"Bootcamp #2"},
        { id:2, text:"Bootcamp #2.1"},
        { id:3, text:"Bootcamp #2.2"},
        { id:4, text:"Bootcamp #2.3"},
        { id:5, text:"Bootcamp #2.4"},
        { id:6, text:"Bootcamp #2.5"},
      ]
      }
    }
  },
  provide(){
      return{
        provideData:this.provideData,
        deleteItem:this.deleteItem
      }
  },
  methods: {
    deleteItem(todoItem){
      this.provideData.todoList = this.provideData.todoList.filter(t=>t!==todoItem);
    },
    addNewTodo(event){
      this.provideData.todoList.push({
        id:new Date().getTime(),
        text:event.target.value
      })
    },
  },
}
</script>
