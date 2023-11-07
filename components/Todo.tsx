import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [text, setText] = useState("");

  return <div></div>;
};

export default Todo;
