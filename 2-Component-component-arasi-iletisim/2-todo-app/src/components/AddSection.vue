<template>
<div>
<label for="todoText"></label>
    <!-- <input @keydown.enter="addNewTodo" type="text" id="todoText" placeholder="Birşeyler yazınız..." /> -->
    <input @keydown.enter="addNewTodo"  type="text" id="todoText" placeholder="Birşeyler yazınız..." />
</div>
   
</template>
<script>
export default {
    props:{
        addNewTodo:{
            type: Function,
            required:true
        }
    },
    // methods:{
        // addNewTodo(event){
        //     this.$emit("add-todo",event.target.value)
        //     event.target.value=""
        // }
    // }
}
</script>