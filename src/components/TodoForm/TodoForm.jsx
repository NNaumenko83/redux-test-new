import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/operations";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTask(value));
    setValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="todo"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
