<template>
  <div class="todo__list-item-wrapper">
    <li
      class="todo__list-item"
      :class="{ 'todo__list-item_done': todo.completed }"
      @click="handleCheck"
    >
      {{ props.todo.title }}
    </li>
    <button @click="handleDelete" type="button" class="todo__list-item-delete">
      Del
    </button>
  </div>
</template>

<script setup lang="ts">
import type ITodo from "@/models/ITodo";
import { useStore } from "@/store";

interface Props {
  todo: ITodo;
}

const props = defineProps<Props>();
const store = useStore();

function handleCheck() {
  store.dispatch("todo/toggleTodo", { id: props.todo.id });
}
function handleDelete() {
  store.dispatch("todo/deleteTodo", { id: props.todo.id });
}
</script>

<style lang="scss" scoped>
@import "./TodoItem.scss";
</style>
