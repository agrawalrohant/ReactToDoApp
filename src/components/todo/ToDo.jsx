import ListItems from "../listitems/ListItems";
import InputBox from "../inputbox/InputBox";
import { useEffect, useState } from "react";
import "./ToDo.css";
import axios from "axios";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);

  const [comments, setComments] = useState([]);

  const addNewTask = (newTask) => {
    let newTaslList = [...tasks];
    newTaslList.push(newTask);
    setTasks(newTaslList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
    console.log(data);
    setComments(data.data);
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
      <>
        <div>Comments : </div>
        <h5>
          {comments.length ? (
            comments.map((comment) => {
              return (
                <li key={comment.id}>
                  {comment.name} - {comment.body}
                </li>
              );
            })
          ) : (
            <h5> No data avaiable</h5>
          )}
        </h5>
      </>
    </>
  );
};

export default ToDo;
