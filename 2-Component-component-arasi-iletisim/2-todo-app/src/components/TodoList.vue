<template>
    <!-- <ul>
      <li v-for="todoItem in todoList" :key="todoItem.id" class="d-flex justify-content-between align-items-center">
        <span>{{ todoItem.text }}</span>
        <button @click="deleteItem(todoItem)" class="sm red">Sil</button>
      </li>
    </ul> -->
    <ul>
      <!-- <TodoListItem @delete-todo-item="$emit('delete-todo-item',$event)" v-for="todoItem in todoList" :key="todoItem.key" :item="todoItem"/> -->

      <TodoListItem v-for="todoItem in provideData.todoList" :key="todoItem.key" :item="todoItem"/>
    </ul>
</template>
<script>
import TodoListItem from "@/components/TodoListItem"
export default {
  // props:["myData"],
  inject:["provideData"],
  // data(){
  //   return{
  //     myData:""
  //   }
  // }
  // props:{
  //   myData:{
  //     type:String,
  //     required:false,
  //     default:""
  //   }
  // },
  components:{
    TodoListItem
  }
  
}
</script>