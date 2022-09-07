import { key } from "./../../store/index";
import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import TodoItemVue from "./TodoItem.vue";
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
  };

  const store = createStore<State>({
    modules: {
      todo: {
        namespaced: true,
        state: todoState,
        actions: todoActions,
      },
    },
  });

  it("deleting todo on delete btn click", async () => {
    const wrapper = mount(TodoItemVue, {
      props: {
        todo: {
          id: 1,
          title: "Test",
          completed: false,
        },
      },
      global: {
        plugins: [[store, key]],
      },
    });
    const deleteBtn = wrapper.find("button");
    await deleteBtn.trigger("click");
    expect(todoActions.deleteTodo).toHaveBeenCalled();
    expect(wrapper.find("li").exists()).toBeFalsy;
  });

  it("toggling todo on todo title click", async () => {
    const wrapper = mount(TodoItemVue, {
      props: {
        todo: {
          id: 1,
          title: "Test",
          completed: false,
        },
      },
      global: {
        plugins: [[store, key]],
      },
    });
    const todoElem = wrapper.find("li");
    await todoElem.trigger("click");
    expect(todoActions.toggleTodo).toHaveBeenCalled();
    expect(wrapper.find("li").element.style).toContain(
      "text-decoration: line-through"
    );
  });
});
