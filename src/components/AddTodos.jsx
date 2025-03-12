import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-teal-400 text-2xl">Please Enter Todos here...</h1>

        <div className="flex items-center gap-6">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-80 h-12 border-2 border-white rounded-lg bg-sky-500 p-2 placeholder:text-white text-white"
            placeholder="Enter todos here..."
          />

          <button
            className="flex items-center gap-2 bg-green-500 py-2 px-4 rounded-lg border-2 border-white"
            onClick={addTodoHandler}
          >
            <FaPlus className="text-white" />
            <text className="text-white text-lg">Add</text>
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
