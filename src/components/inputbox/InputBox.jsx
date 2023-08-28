import { useState } from "react";
const InputBox = (props) => {
  const { addNewTask } = props;

  const [val, setVal] = useState("");

  const addTask = () => {
    addNewTask(val);
    setVal("");
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
