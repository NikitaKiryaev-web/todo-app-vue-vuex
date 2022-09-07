<template>
  <div class="todo">
    <h1 class="todo__title">Todo Vue App</h1>
    <form @submit="onSubmitHandle" class="todo__form">
      <input
        :value="store.state.input.todoInput"
        @input="onChangeHandle"
        type="text"
        class="todo__input"
        required
        placeholder="Добавьте свои дела"
      />
      <button class="todo__submit" type="submit"></button>
      <button @click="fetchTodo" class="todo__api-btn" type="button">
        Api
      </button>
    </form>
    <ul class="todo__list">
      <TodoItem
        v-for="todo in store.state.todo.todos"
        :key="todo.id"
        :todo="todo"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store";
import TodoItem from "../TodoItem.vue/TodoItem.vue";
const store = useStore();

function onChangeHandle(e: Event) {
  store.dispatch("input/setTodoInput", (e.target as HTMLInputElement).value);
}
function onSubmitHandle(e: Event) {
  e.preventDefault();
  store.dispatch("todo/addTodo", {
    id: Date.now() + Math.random(),
    title: store.state.input.todoInput,
    done: false,
  });
}
async function fetchTodo() {
  store.dispatch("todo/fetchTodo");
}
</script>

<style lang="scss" scoped>
@import "./TodoForm.scss";
</style>
