import { useState } from "react";
import { createContext } from "react";

export const ToDoContext = createContext(null);

function ToDoProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({
    isCompleted: false,
    text: "",
    isCompletedText: "",
  });

  function addItem(newText) {
    try {
      setTask({
        isCompleted: false,
        text: newText,
        isCompletedText: ""
      });

      // Add the new task to the array
      setTasks((prevTasks) => [...prevTasks, task]);
    } catch (err) {
      console.log(err.message);
    }
  }


        function deleteTask(index) {
            setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
          }
    
  
  
  function setDone(taskIndex, newState) {
      try {
          setTasks(prevTasks => {
              const updatedTasks = [...prevTasks];
              const updatedTask = {
                  ...updatedTasks[taskIndex],
                  isCompleted: newState,
                  isCompletedText: newState ? "✅" : "Not Done"
                };
                updatedTasks[taskIndex] = updatedTask;
                return updatedTasks;
            });
        } catch (err) {
            console.log(err.message);
        }
    }
    // function editTask(taskIndex, newText){
    //     try{
    //       setTasks(prevTasks => {
    //           const updatedTasks = [...prevTasks];
    //           const updatedTask = {
    //             ...updatedTasks[taskIndex],
    //             text: newText,
    //           };
    //           updatedTasks[taskIndex] = updatedTask;
    //           return updatedTasks;
    //         });
          
    //       }
    //           catch{
    //               console.log(err.message);
    //           }
    //       }
  
  return (
    <ToDoContext.Provider value={{ tasks, addItem , setDone, deleteTask}}>
      {children}
    </ToDoContext.Provider>
  );
}

export default ToDoProvider;
