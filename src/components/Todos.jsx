//

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import { MdDelete } from "react-icons/md";
import { FaEdit, FaSave } from "react-icons/fa";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEditClick = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleSaveEdit = () => {
    if (editText.trim()) {
      dispatch(updateTodo({ id: editId, newText: editText }));
      setEditId(null);
      setEditText("");
    }
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setEditText("");
  };

  return (
    <>
      <div className="w-full flex flex-col items-center p-4 gap-8">
        <h1 className="text-teal-400 text-2xl">Your Todos...</h1>

        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between bg-gray-800 rounded-lg px-6 py-4 shadow-md hover:shadow-lg transition-all duration-200 w-full max-w-xl"
          >
            {editId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-1 mr-4 px-2 py-1 rounded border-2 border-teal-400 bg-gray-700 text-white focus:outline-none"
                autoFocus
              />
            ) : (
              <h3 className="text-white font-medium truncate">{todo.text}</h3>
            )}

            <div className="flex gap-2">
              {editId === todo.id ? (
                <>
                  <button
                    className="bg-teal-500 text-white p-2 rounded-full hover:bg-teal-600 transition-colors duration-200 flex items-center justify-center cursor-pointer"
                    aria-label="Save edit"
                    onClick={handleSaveEdit}
                  >
                    <FaSave className="text-xl" />
                  </button>
                  <button
                    className="bg-gray-500 text-white p-2 rounded-full hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center cursor-pointer"
                    aria-label="Cancel edit"
                    onClick={handleCancelEdit}
                  >
                    <MdDelete className="text-xl" />
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="bg-teal-500 text-white p-2 rounded-full hover:bg-teal-600 transition-colors duration-200 flex items-center justify-center cursor-pointer"
                    aria-label="Edit todo"
                    onClick={() => handleEditClick(todo)}
                  >
                    <FaEdit className="text-xl" />
                  </button>
                  <button
                    className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors duration-200 flex items-center justify-center cursor-pointer"
                    aria-label="Delete todo"
                    onClick={() => dispatch(removeTodo(todo.id))}
                  >
                    <MdDelete className="text-xl" />
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Todos;
