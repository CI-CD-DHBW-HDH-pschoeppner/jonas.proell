import { writable } from "svelte/store";
import { nanoid } from "nanoid";

export class TodoItem {
  id = "";
  value = "";
  done = false;
}

// this function must return a unique ID every time it is called
export function generateID(): string {
  return nanoid(5);
}

// make sure, that
// the value isn't longer than 255 characters
// the value isn' empty
// the todo isn't contained in the todos array (case insensitive)
export function validateTodo(todo: TodoItem, todos: TodoItem[]): boolean {
  if (todo.value.length > 255) return false;
  if (!todo.value) return false;
  if (todos.some((t) => t.value.toLowerCase() === todo.value.toLowerCase()))
    return false;

  return true;
}

// capitalize the first letter of the todo
export function formatTodo(todo: TodoItem): TodoItem {
  return {
    id: todo.id,
    value: todo.value.charAt(0).toUpperCase() + todo.value.slice(1),
    done: todo.done,
  };
}

// generate a random rgb color
// each value (r,g,b) should be between 50 and 150
export function generateColor(): string {
  return `rgb(
    ${getRandInt(50, 150)},
    ${getRandInt(50, 150)},
    ${getRandInt(50, 150)})`;
}

export function getRandInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const todoList = writable<TodoItem[]>([]);
