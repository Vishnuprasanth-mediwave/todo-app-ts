import { useState } from "react";

import { ITodo } from "./types";

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  function onTodoAdd(str: string) {
    const obj: ITodo = {
      text: str,
      id: new Date().getTime(),
      isEdit: false,
      isDone: false,
    };
    setTodos((prev) => [...prev, obj]);
  }

  function handleEditInApp(id: Number) {
    const index = todos.findIndex((t) => t.id === id);
    const updatedItems = [...todos];
    updatedItems[index] = {
      ...updatedItems[index],
      isEdit: true,
    };
    setTodos(updatedItems);
  }
  function handleSave(id: Number, text: string) {
    const index = todos.findIndex((t) => t.id === id);
    const updatedItems = [...todos];
    updatedItems[index] = {
      ...updatedItems[index],
      text: text,
      isEdit: false,
    };
    setTodos(updatedItems);
  }
  function handleDelete(id: Number) {
    const filtered = todos.filter((t) => t.id != id);
    console.log(filtered);
    setTodos(filtered);
  }
  function handleStrike(id: Number, type: string) {
    const newTodos = [...todos];
    const idx = newTodos.findIndex((nt) => nt.id === id);
    if (idx !== -1) {
      if (type === "done") newTodos[idx]["isDone"] = true;
      else newTodos[idx]["isDone"] = false;
    }
    setTodos(newTodos);
  }
  return (
    <div>
      <h1>my todos</h1>
      <AddTodo onTodoAdd={onTodoAdd} />
      <TodoList
        todos={todos}
        extraCss="text-bold"
        handleEditInApp={handleEditInApp}
        handleSave={handleSave}
        handleDelete={handleDelete}
        handleStrike={handleStrike}
      />
    </div>
  );
}

export default App;
