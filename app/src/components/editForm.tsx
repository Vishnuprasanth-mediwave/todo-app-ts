// import { ITodo } from "../types";

import { useState } from "react";
import { ITodo } from "../types";

interface IEditForm {
  todo: ITodo;
  handleSave: (id: Number, text: string) => void;
}
const EditForm: React.FC<IEditForm> = ({ todo, handleSave }) => {
  const [text, setText] = useState(todo.text);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>, id: Number) {
    e.preventDefault();
    handleSave(id, text);
  }
  return (
    <form onSubmit={(e) => handleSubmit(e, todo.id)}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">save</button>
    </form>
  );
};

export default EditForm;
