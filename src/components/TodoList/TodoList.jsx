import { useDispatch, useSelector } from "react-redux";
import { selectTodos } from "../../redux/todoSlice";
import { deleteTask } from "../../redux/operations";

const TodoList = () => {
  const { items, isLoading } = useSelector(selectTodos);
  const dispatch = useDispatch();

  const handleButtonClick = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      {isLoading ? (
        <h1>LOADING...</h1>
      ) : (
        <ul>
          {items.map((todo) => (
            <li key={todo.id}>
              <p>{todo.text}</p>
              <button type="button" onClick={() => handleButtonClick(todo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
