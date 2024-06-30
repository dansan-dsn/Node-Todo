import React, { useState } from "react";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { createTodo } from "../api";

const Todo = ({ onAddTodo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [msg, setMsg] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e) => {
    e.preventdefault();
    if (title.trim() && info.trim()) {
      const newTodo = await createTodo({ title, info });
      onAddTodo(newTodo);
      setMsg("Successfully Added a todo");
      setTitle("");
      setInfo("");
    }
    setMsg("");
  };

  return (
    <div>
      <form
        className="bg-neutral-700 p-5 mx-5 md:mx-56 cursor-pointer rounded"
        onSubmit={handleSubmit}
      >
        <label
          className=" justify-between flex cursor-pointer"
          onClick={handleToggle}
        >
          Make Todos
          <span className="">
            {isOpen ? (
              <TiMinus title="collapse" />
            ) : (
              <FaPlus title="Add Todo" />
            )}
          </span>
        </label>
        {isOpen && (
          <div className="flex flex-col justify-between mt-5 md:flex-row">
            <div className="mb-3">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="p-3 rounded outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
                placeholder="Content"
                className="p-3 rounded outline-none mb-3"
              />
              <button type="submit" className="ml-3 btn btn-neutral">
                Add
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Todo;
