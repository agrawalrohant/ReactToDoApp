import ListItems from "../listitems/ListItems";
import InputBox from "../inputbox/InputBox";
import { useState } from "react";
import "./ToDo.css";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (newTask) => {
    let newTaslList = [...tasks];
    newTaslList.push(newTask);
    setTasks(newTaslList);
  };

  const removeTask = (idx) => {
    let newTaslList = [...tasks];
    let index = newTaslList.findIndex((task) => {
      return task.id === parseInt(idx);
    });
    newTaslList.splice(index, 1);
    setTasks(newTaslList);
  };

  return (
    <>
      <h1>React ToDo App</h1>
      <InputBox addNewTask={addNewTask} />
      <ListItems parentTaskList={tasks} removeTask={removeTask} />
    </>
  );
};

export default ToDo;
