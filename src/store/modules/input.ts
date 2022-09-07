import type ITodo from "@/models/ITodo";
import type { Module } from "vuex";
import type { State } from "..";

export interface inputState {
  todoInput: string;
}

const inputModule: Module<inputState, State> = {
  namespaced: true,
  state: {
    todoInput: "",
  },
  mutations: {
    setTodoInput(state, payload) {
      state.todoInput = payload;
    },
  },
  actions: {
    setTodoInput({ commit }, payload) {
      commit("setTodoInput", payload);
    },
  },
};

export default inputModule;
