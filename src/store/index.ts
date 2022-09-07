import type { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import inputModule, { type inputState } from "./modules/input";
import todoModule, { type todoState } from "./modules/todo";

export interface State {
  input: inputState;
  todo: todoState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: {
    todo: todoModule,
    input: inputModule,
  },
});

export function useStore() {
  return baseUseStore(key);
}
