import ListItems from "../listitems/ListItems";
import InputBox from "../inputbox/InputBox";
import { useState } from "react";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (newTask) => {
    let newTaslList = [...tasks];
    newTaslList.push(newTask);
    setTasks(newTaslList);
  };

  const removeTask = (idx) => {};

  return (
    <>
      <h1>React ToDo App</h1>
      <InputBox addNewTask={addNewTask} />
      <ListItems parentTaskList={tasks} />
    </>
  );
};

export default ToDo;
