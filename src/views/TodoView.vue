<template>
  <div class="todo-page">
    <TodoForm></TodoForm>
  </div>
</template>

<script lang="ts" setup>
import TodoForm from "../components/TodoForm/TodoForm.vue";
</script>

<style lang="scss" scoped>
.todo-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
