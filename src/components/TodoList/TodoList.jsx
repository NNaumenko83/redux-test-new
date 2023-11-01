import { useDispatch, useSelector } from "react-redux";
import {
  deleteTask,
  todosSelector,
  toggleCompleted,
} from "../../redux/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelector);
  console.log("todos:", todos);

  const completedToggle = (id) => {
    dispatch(toggleCompleted(id));
  };
  const deleteButtonHandler = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      TodoList
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                completedToggle(todo.id);
              }}
            />
            <p>{todo.text}</p>

            <button type="button" onClick={() => deleteButtonHandler(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
