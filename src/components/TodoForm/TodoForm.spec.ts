import { key } from "./../../store/index";
import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import TodoFormVue from "./TodoForm.vue";
import { createStore } from "vuex";
import type { State } from "@/store";

describe("TodoForm", () => {
  const todoState = {
    todos: [
      {
        id: 1,
        title: "Test",
        completed: false,
      },
    ],
  };

  const todoActions = {
    toggleTodo: vi.fn(),
    deleteTodo: vi.fn(),
    addTodo: vi.fn(),
    fetchTodo: vi.fn(),
  };

  const inputState = {
    todoInput: "",
  };

  const inputActions = {
    setTodoInput: vi.fn(),
  };

  const store = createStore<State>({
    modules: {
      todo: {
        namespaced: true,
        state: todoState,
        actions: todoActions,
      },
      input: {
        namespaced: true,
        state: inputState,
        actions: inputActions,
      },
    },
  });

  it("input change call setTodoInput", async () => {
    const wrapper = mount(TodoFormVue, {
      global: {
        plugins: [[store, key]],
      },
    });
    await wrapper.find("input").setValue("Test");
    expect(wrapper.find("input").element.value).toBe("Test");
  });

  it("dispatch addTodo action on submit click", async () => {
    const wrapper = mount(TodoFormVue, {
      global: {
        plugins: [[store, key]],
      },
    });
    const submit = wrapper.find("button[type=submit]");
    await submit.trigger("submit");
    expect(todoActions.addTodo).toHaveBeenCalled();
  });

  it("dispatch fetchTodo action on fetch click", async () => {
    const wrapper = mount(TodoFormVue, {
      global: {
        plugins: [[store, key]],
      },
    });
    const fetch = wrapper.find("button[type=button]");
    await fetch.trigger("click");
    expect(todoActions.fetchTodo).toHaveBeenCalled();
  });
});
