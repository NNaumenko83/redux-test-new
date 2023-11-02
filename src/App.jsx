import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import { fetchTasks } from "./redux/operations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
}

export default App;
