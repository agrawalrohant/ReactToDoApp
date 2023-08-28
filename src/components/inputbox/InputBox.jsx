import { useState } from "react";
import "./InputBox.css";
const InputBox = (props) => {
  const { addNewTask } = props;

  const [val, setVal] = useState("");

  const addTask = () => {
    if (val != "") {
      addNewTask({ taskDetails: val, id: Date.now() });
      setVal("");
    }
  };

  const inputChange = (event) => {
    setVal(event.target.value);
  };
  return (
    <>
      <input type="text" value={val} onChange={inputChange} />
      <button onClick={addTask}>Add</button>
    </>
  );
};

export default InputBox;
