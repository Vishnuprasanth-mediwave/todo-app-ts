import { ITodo } from "../types";
import EditForm from "./editForm";

interface ITodoList {
  todos: ITodo[];
  extraCss?: string;
  handleEditInApp: (str: Number) => void;
  handleSave: (id: Number, text: string) => void;
  handleDelete: (num: Number) => void;
  handleStrike: (n: Number, t: string) => void;
}

const TodoList: React.FC<ITodoList> = ({
  todos,
  extraCss,
  handleEditInApp,
  handleSave,
  handleDelete,
  handleStrike,
}) => {
  function handleEdit(id: Number) {
    handleEditInApp(id);
  }
  function handleCheck(e: React.ChangeEvent<HTMLInputElement>, id: Number) {
    if (e.target.checked) {
      handleStrike(id, "done");
    } else {
      handleStrike(id, "undone");
    }
  }

  return (
    <div className={extraCss}>
      {todos.map((t) => (
        <div key={t.id.toString()}>
          {t.isEdit ? (
            <>
              <EditForm
                todo={t}
                handleSave={(id, text) => handleSave(id, text)}
              />
            </>
          ) : (
            <>
              <input
                type="checkbox"
                checked={t.isDone}
                onChange={(e) => handleCheck(e, t.id)}
              />
              <span style={t.isDone ? { textDecoration: "line-through" } : {}}>
                {t.text}
              </span>

              <button onClick={() => handleEdit(t.id)}>edit</button>
              <button onClick={() => handleDelete(t.id)}>delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
