import type ITodo from "@/models/ITodo";
import type { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

interface State {
  todos: ITodo[];
  todoInput: string;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    todos: [
      {
        id: 1,
        title: "Shower",
        completed: false,
      },
      {
        id: 2,
        title: "Eat",
        completed: false,
      },
      {
        id: 3,
        title: "Sleep",
        completed: false,
      },
      {
        id: 4,
        title: "Repeat",
        completed: false,
      },
    ],
    todoInput: "",
  },
  mutations: {
    toggleTodo(state, payload) {
      state.todos = state.todos.map((item) => {
        return item.id === payload.id
          ? { ...item, completed: !item.completed }
          : item;
      });
    },
    deleteTodo(state, payload) {
      state.todos = state.todos.filter((item) => item.id !== payload.id);
    },
    setTodoInput(state, payload) {
      state.todoInput = payload;
    },
    addTodo(state, payload) {
      state.todos = [payload, ...state.todos];
    },
    addTodoApi(state, payload) {
      state.todos = [...payload, ...state.todos];
    },
  },
  actions: {
    toggleTodo({ commit }, payload) {
      commit("toggleTodo", payload);
    },
    deleteTodo({ commit }, payload) {
      commit("deleteTodo", payload);
    },
    setTodoInput({ commit }, payload) {
      commit("setTodoInput", payload);
    },
    addTodo({ commit }, payload) {
      commit("addTodo", payload);
    },
    async fetchTodo({ commit }) {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const json = await res.json();
      commit("addTodoApi", json);
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
