<template>
  <header class="header">
    <h1>Шапка сайта</h1>
    <RouterLink class="header__link" to="/">Home</RouterLink>
    <RouterLink class="header__link" to="/todo">Todo</RouterLink>
  </header>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  padding: 15px;
  border-bottom: 1px solid pink;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  line-height: 22px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 30px;
  &__link {
    margin-right: 30px;
    color: #fff;
    text-decoration: none;
    position: relative;
    &::before {
      content: "";
      width: 0%;
      height: 2px;
      background-color: #fff;
      position: absolute;
      bottom: -5px;
    }
    &:hover {
      transition: 0.3s;
      opacity: 0.8;
      &::before {
        width: 100%;
        transition: 0.5s;
      }
    }
    &.router-link-active {
      &::before {
        width: 100%;
      }
    }
    &:last-of-type {
      margin: 0;
    }
  }
}
</style>
