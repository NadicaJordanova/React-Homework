import { useContext } from "react";
import { ToDoContext } from "../context/TodoContext";
import { useState } from "react";

function ToDoList() {
  const { tasks, task, addItem, text, setDone, deleteTask, editTask } =
    useContext(ToDoContext);

  const [inputValue, setInputValue] = useState("");
  //   const [editInput, setEditInput] = useState("");
  //   const [editIndex, setEditIndex] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue.trim() === "" || inputValue === "") return;
    addItem({ text: inputValue });
    setInputValue("");
  }
  //   function handleChange(e) {
  //     e.preventDefault();
  //     if (editInput.trim() === "" || editInput === "") return;
  //     if (editIndex !== null) {
  //       editTask(editIndex, editInput);
  //       setEditInput("");
  //       setEditIndex(null);
  //     }
  //     setEditInput("");
  //   }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>New To Do Item:</label>
        <input
          type="text"
          name="input"
          id="input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div>
  {tasks
   
    .map((task, index) => (
      <div key={index}>
        {console.log(tasks)}
        <span>{task.text.text}</span>
        <span>{task.isCompletedText}</span>
        <button onClick={() => setDone(index, !task.isCompleted)}>Done</button>
        <button onClick={() => deleteTask(index)}>Delete</button>
      </div>
    ))}
</div>

      
        {/* <button
      onClick={() => {
        setEditInput(task.text.text);
        setEditIndex(index);
      }}
    >
      Edit
    </button> */}
        {/* <form onSubmit={handleChange}>
      <input
        type="text"
        value={editInput}
        onChange={(e) => setEditInput(e.target.value)}
      />
      <button type="submit">Save</button>
    </form> */}
      </div>

     
  );
}

export default ToDoList;
